//Inicializamos las variables
let usuariosnombre=["Dario","Valentin","Luis","Magali","Fernanda","Agustin","Matias"];
let usuariosapellido=["Orduña","Zibana","Gonzalez","Salinas"];
let compnombre=0;
let compapellido=0;
let nombre;
let apellido;
let siguiente;
let edad=0;
let salario=0;
let agregarsalario=0;
let gasto=0;
let gastoin=0;
let gastos = [0];
let gastosinnecesarios = [0];

//Creamos Constructor
class Persona {
    constructor (nombre, apellido, edad, salario){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.salario= salario;
    }
    identificaredad (){
        if (this.edad <=22){
            alert("Te felicitamos que a pesar de tu edad quieras manejar mejor tu economia");
        }else {
            alert("Muy buena decision ya estas preparado para CALCULAR TUS GASTOS DE LA MEJOR MANERA!");
        }
    }
}

//Presentacion de la aplicacion


function Prensentacion (){
    alert("BIEVENIDO A LA MEJOR CALCULADORA DE GASTOS! CALCULA TUS GASTOS DE LA MANERA MAS EFICIENTE Y SIN INVERTIR NADA DE TIEMPO. TODO LO HACEMOS POR VOS!");
    PedirDatos();
}

//Pedimos datos

function PedirDatos(){
    nombre= prompt("Ingrese tu Nombre");
    ValidarDatos(nombre);
    apellido = prompt("Ingrese tu Apellido");
    ValidarDatos(apellido);
    edad = parseInt (prompt("Ingrese tu Edad"));
    ValidarDatos(edad);
    salario = parseInt (prompt("Ingrese tu Salario Mensual"));
    ValidarDatos(salario);
    const persona1= new Persona (nombre, apellido, edad, salario);
    MostrarDatos(persona1);
}

//Validamos datos

function ValidarDatos (validar) {
    while (validar===" " || validar==="") {
        switch (validar){
            case nombre:
                alert("El nombre ingresado no es correcto,ingrese uno nuevamente");
                nombre= prompt("Ingrese tu Nombre");
                break;
            case apellido:
                alert("El apellido ingresado no es correcto,ingrese uno nuevamente");
                apellido = prompt("Ingrese tu Apellido");
                break;
            case edad:
                alert("La edad ingresada no es correcta,ingrese una nuevamente");
                edad = parseInt (prompt("Ingrese tu Edad"));
                break;
            case salario:
                alert("El salario ingresado no es correcto,ingrese uno nuevamente");
                salario = parseInt (prompt("Ingrese tu Salario Mensual"));
                break;
            default:

                break;
        }
    }
}

//Mostrar Datos

function MostrarDatos (Verificar) {
    alert ("VERIFICA SI LOS DATOS INGRESADOS SON CORRECTOS:");
    for (let propiedades in Verificar){
        alert("Tu "+propiedades+" es : "+Verificar[propiedades]+" ");
    }
    siguiente= prompt("ES CORRECTO? Si/No");
    if (siguiente==="no" || siguiente==="No"){
        PedirDatos();
    }else {
        ComprobarUsuario();
    }
}

//Comprabamos si el usuario esta en el array

function ComprobarUsuario (){;
    const mostrar= new Persona (nombre, apellido, edad, salario);
    compnombre=usuariosnombre.indexOf(nombre);
    compapellido= usuariosapellido.indexOf(apellido);
    if (compnombre>=0 && compapellido>=0) {
        alert("El usuario que ingresaste ya esta creado,intenlo nuevamente");
        PedirDatos();
    }else {
        alert("Felicitaciones!! te has registrado exitosamente!!");
        mostrar.identificaredad();
        AgregarUsuario();
    }
}

//Agregamos usuario al array si es que no esta

function AgregarUsuario(){
    if (compnombre===-1){
        usuariosnombre.push(nombre);
    }
    if (compapellido===-1) {
        usuariosapellido.push(apellido);
    }
    Menu();
}

//Menu de la aplicacion con las opciones

function Menu () {
    const persona= new Persona (nombre, apellido, edad, salario);
    let opcion= parseInt(prompt("INTRODUCE QUE QUIERES HACER:\n 1) Agregar Gasto \n 2) Agregar Dinero \n 3) Ver Salario \n 4) Salir "));
    switch (opcion) {
        case 1:
            GastosDelDia();           
            break;
        case 2:
            AgregarSalario();
            break;
        case 3:
            alert("Tu salario es : $ "+persona.salario);
            Menu();

            break;
        case 4:
            alert("Muchas gracias por usar nuestra Calculadora, TE ESPERAMOS!");
            break;
    }
}

//Oedimos dato de gastos

function GastosDelDia (){
    ComprobarSalario();
    gasto = parseInt(prompt("Ingresa los gastos vitales (Luz, Gas, Comida, Bebida, Nafta) del dia"));
    gastoin = parseInt(prompt("Ingresa los gastos innecesarios (Salida a comer, Tu chocolate favorito, Compra de Videojuego) del dia"));
    gastos.push(gasto);
    gastosinnecesarios.push(gastoin);
    SumandoGastos(gasto,gastoin);
}

//Sumamos los gastos y se lo restamos a salario
function SumandoGastos (gasto,gastoin) {
    salario = salario-gasto-gastoin;
    alert("GASTO AGREGADO!");
    Menu();
}

//Comprabamos Salario

function ComprobarSalario () {
    if (salario<=0) {
        alert("Tus gastos superaron el salario, necesitas controlar mejor tu economia, si quieres agregar nuevos gastos necesitas ingresar dinero");
        Menu(); 
    }
}

//Agregamos dinero al salario

function AgregarSalario() {
    agregarsalario= parseInt(prompt("Ingresa el dinero a agregar"));
    salario+=agregarsalario;
    alert("SALARIO AGREGADO!");
    Menu();
}

Prensentacion();