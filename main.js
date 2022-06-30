//Inicializamos las variables
let usuarios= [
    {nombre: "Dario",
    apellido:"Orduña",
    edad: 52,
    salario:100000}
,
    {nombre: "Valentin",
    apellido:"Orduña",
    edad: 20,
    salario:20000}
,
    {nombre: "Magali",
    apellido:"Zibana",
    edad: 19,
    salario:20000}
,
    {nombre: "Agustin",
    apellido:"Orduña",
    edad: 24,
    salario:50000}
,
    {nombre: "Matias",
    apellido:"Orduña",
    edad: 31,
    salario:100000}
,
    {nombre: "Fernanda",
    apellido:"Gonzalez",
    edad: 51,
    salario:100000}
];
let nombre;
let apellido;
let siguiente;
let edad=0;
let salario=0;
let agregarsalario=0;
let gasto=0;
let gastoin=0;
let gastos = [];
let gastosinnecesarios = [];

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
            alert("Te felicitamos que a pesar de tu edad quieras manejar mejor tu economia!");
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
    ValidarNumeros(edad);
    salario = parseInt (prompt("Ingrese tu Salario Mensual"));
    ValidarNumeros(salario);
    const persona1= new Persona (nombre, apellido, edad, salario);
    MostrarDatos(persona1);
}

//Validamos datos

function ValidarDatos (validar) {
    switch(validar) {
        case  nombre:
            while(nombre===""||nombre===" "|| Number(nombre)) {
                alert("El nombre ingresado no es correcto, intentalo nuevamente");
                nombre= prompt("Ingrese tu Nombre");
            }
            break;

        case  apellido:
            while(apellido===""||apellido===" "|| Number(apellido)) {
                alert("El apellido ingresado no es correcto, intentalo nuevamente");
                apellido = prompt("Ingrese tu Apellido");
            }
            break;

        case  edad:
            while(edad===""||edad===" "|| isNaN(apellido)||edad<=0) {
                alert("La edad ingresada no es correcta, intentalo nuevamente");
                edad = parseInt (prompt("Ingrese tu Edad"));
            }

            break;

        case  salario:
            while(salario===""||salario===" "|| isNaN(salario)||salario<=0) {
                alert("El salario ingresado no es correcto, intentalo nuevamente");
                salario = parseInt (prompt("Ingrese tu Salario Mensual"));
            }
            break;
            
    }
}

function ValidarNumeros(validar) {
    while (isNaN(validar) || validar<=0 || validar===" " || validar==="") {
        switch(validar) {
            case edad:
                alert("La edad ingresada no es correcta,ingrese una nuevamente");
                PedirDatos();
                break;
            case salario:
                alert("El salario ingresado no es correcto,ingrese uno nuevamente");
                PedirDatos();
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
    let persona=new Persona(nombre,apellido,edad,salario);
    for (const propiedad of usuarios) {
        if(persona.nombre===propiedad.nombre){
            if(persona.apellido===propiedad.apellido) {
                alert("El usuario ingresado ya esta registrado, intente con uno nuevamente");
                PedirDatos();
            }
        }
    }
    alert("Te has registrado con exito");
    persona.identificaredad();
    usuarios.push(persona);
    Menu();
}

//Menu de la aplicacion con las opciones

function Menu () {
    const persona= new Persona (nombre, apellido, edad, salario);
    let opcion= parseInt(prompt("INTRODUCE QUE QUIERES HACER:\n 1) Agregar Gasto \n 2) Agregar Dinero \n 3) Ver Salario \n 4) Ver Estadisticas \n 5) Salir "));
    switch (opcion) {
        case 1:
            GastosDelDia();           
            break;
        case 2:
            AgregarSalario();
            break;
        case 3:
            alert("Tu salario es restante : $ "+persona.salario);
            Menu();

            break;
        case 4:
            MostrarEstadisticas();

            break;
        
        case 5:
            alert("Muchas gracias por usar nuestra Calculadora, TE ESPERAMOS!");
            break;
    }
    if(isNaN(opcion)|| opcion===" " || opcion>5){
        alert("No ingresaste ninguna opcion,asegurate de poner alguna de las opciones que ofrecemos");
        Menu();
    }
    
}

//Pedimos dato de gastos

function GastosDelDia (){
    ComprobarSalario();
    gasto = parseInt(prompt("Ingresa los gastos vitales (Luz, Gas, Comida, Bebida, Nafta) del dia"));
    ValidarGastos(gasto);
    gastoin = parseInt(prompt("Ingresa los gastos innecesarios (Salida a comer, Tu chocolate favorito, Compra de Videojuego) del dia"));
    ValidarGastos(gastoin);
    gastos.push(gasto);
    gastosinnecesarios.push(gastoin);
    SumandoGastos(gasto,gastoin);
}

//Validamos Gastos
function ValidarGastos(validar){
    switch (validar) {
        case gasto:
            while(gasto<0||isNaN(gasto)||gasto===" "||gasto===""){
                alert("El gasto ingresado no es correcto,vuelve a ingresarlo nuevamente");
                gasto = parseInt(prompt("Ingresa los gastos vitales (Luz, Gas, Comida, Bebida, Nafta) del dia"));
            } 
            break;
        case gastoin:
            if(gastoin<0||isNaN(gastoin)||gastoin===" "||gastoin===""){
                alert("El gasto ingresado no es correcto,vuelve a ingresarlo nuevamente");
                gastoin = parseInt(prompt("Ingresa los gastos innecesarios (Salida a comer, Tu chocolate favorito, Compra de Videojuego) del dia"));
            } 
            break;

    }
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

//Mostramos Estadisticas
function MostrarEstadisticas () {
    let unirarray= gastos.concat(gastosinnecesarios);
    let total= unirarray.reduce((acumulador,elemento)=>acumulador+elemento,0);
    let totalgastos= gastos.reduce((acumulador,elemento)=>acumulador+elemento,0);
    let totalgastosin= gastosinnecesarios.reduce((acumulador,elemento)=>acumulador+elemento,0);
    alert("Tuviste un total de gastos de $ "+total+"\nUn total de gastos vitales de $ "+totalgastos+"\nUn total de gastos innecesarios de $ "+totalgastosin);
    
}

Prensentacion();

