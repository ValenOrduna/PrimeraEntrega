let nombre;
let apellido;
let siguiente;
let edad=0;
let salario=0;
let gastos = [];
let gastosinnecesarios = [];

class Persona {
    constructor (nombre, apellido, edad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.salario= salario;
    }
    bienvenido () {
        console.log("Muchisimas gracias "+this.nombre+" "+this.apellido+" por usar nuestra CALCULADORA DE GASTOS!");
        this.identificaredad();
    }
    identificaredad (){
        if (this.edad <=20){
            console.log("Te felicitamos que a pesar de tu edad quieras manejar mejor tu economia");
        }
        if (this.edad>20) {
            console.log("Muy buena decision ya estas preparado para CALCULAR TUS GASTOS DE LA MEJOR MANERA!");
        }
    }
}

function Prensentacion (){
    alert("BIEVENIDO A LA MEJOR CALCULADORA DE GASTOS! CALCULA TUS GASTOS DE LA MANERA MAS EFICIENTE Y SIN INVERTIR NADA DE TIEMPO. TODO LO HACEMOS POR VOS!");
    PedirDatos();
}

function PedirDatos(){
    nombre= prompt("Ingrese tu Nombre");
    apellido = prompt("Ingrese tu Apellido");
    edad = parseInt (prompt("Ingrese tu Edad"));
    salario = parseInt (prompt("Ingrese tu Salario Mensual"));
    const persona1= new Persona (nombre, apellido, edad, salario);
    MostrarDatos(persona1);  
}

function MostrarDatos (Persona) {
    alert ("VERIFICA SI LOS DATOS INGRESADOS SON CORRECTOS:");
    for (let propiedades in Persona){
        console.log("Tu "+propiedades+" es "+Persona[propiedades]+" ");
    }
    siguiente= prompt("ES CORRECTO?");
    if (siguiente==="no" || siguiente==="No"){
        PedirDatos();
    }else {
        Persona.bienvenido();
        GastosDelDia();
    }
}

function GastosDelDia (){
    for (let i=1; i<=30;i++){
        alert ("INGRESE LOS GASTOS DEL DIA "+i);
        gastos[i] = parseInt(prompt("Ingresa los gastos vitales (Luz, Gas, Comida, Bebida, Nafta) del dia"));
        gastosinnecesarios[i] = parseInt(prompt("Ingresa los gastos innecesarios (Salida a comer, Tu chocolate favorito, Compra de Videojuego) del dia"));
        SumandoGastos(i);
    }
}

function SumandoGastos (i) {
    salario = salario-gastos[i]-gastosinnecesarios[i];
}


Prensentacion();