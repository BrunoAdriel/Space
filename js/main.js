// Inicio con usuario guardado

let usuario = prompt("Ingresa tu nombre");
let contraseña = prompt("Ingresa tu contraseña");
let userPrincipal = "AdrielBruno";
let contraseñaPrincipal = "123123";

if (usuario == userPrincipal && contraseña == contraseñaPrincipal ){
    alert("Bienvenido " + userPrincipal + " " + "espero que estes bien");
} else if (usuario, contraseña) {
    alert("Bienvenide " + usuario + " gracias por elegirnos");
} else {
    alert("no ingreso ningun usuario ni contraseña, podras navegar sin comprar");
}

// Productos

function productos(){
    let productos = prompt("Que producto estas buscando " + usuario + " ? \n 1. Buzos. \n 2. Pantalones. \n 3. Remeras \n 4. Camperas");

    if (productos == 1 ){
        let buzos = prompt("Que tipo de buzos estas buscando? \n 1. LifeStyle \n 2. Deportivos");
            if (buzos == 1){
                alert("Estos son los buzos LifeStyle que tenemos en este momento para ofrecerte");
            } 
            else if(buzos == 2) {
                alert("Estos son los buzos Deportivos que tenemos en este momento para ofrecerte");
            }
    }
    if(productos == 2){
        let pantalones = prompt("Que tipo de Pantalones estas buscando? \n 1. LifeStyle \n 2. Deportivos");
            if (pantalones == 1){
                let lifestyle = prompt("Que tipo de conte estas buscando? \n 1. Cortos \n 2. Largos");
                    if ( lifestyle == 1 ){
                        alert("Estos son los pantalones cortos que tenemos en este momento para ofrecerte");
                    } 
                    else if ( lifestyle == 2){
                        alert("Estos son los pantalones largos que tenemos en este momento para ofrecerte");
                    }
            }
            else if(pantalones == 2){
                let deportivos = prompt("Que tipo de conte estas buscando? \n 1. Cortos \n 2. Largos");
                if (deportivos == 1 ){
                    alert("Estos son los pantalones deportivos cortos que tenemos en este momento para ofrecerte");
                } 
                else if (deportivos == 2){
                    alert("Estos son los pantalones deportivos largos que tenemos en este momento para ofrecerte");
                }
            } 
    }
    if(productos == 3){
        let Remeras = prompt("Que tipo de remeras estas buscando? \n 1. LifeStyle \n 2. Deportivas");
            if (Remeras == 1){
                let lifestyle =prompt("Que tipo de conte estas buscando? \n 1. Manga cortas \n 2.  Manga largos");
                    if (lifestyle == 1 ){
                        alert("Estos son las remeras manga corta que tenemos en este momento para ofrecerte");
                    } 
                    else if (lifestyle == 2){
                        alert("Estos son las remeras manga larga que tenemos en este momento para ofrecerte");
                    }
            }
            else if(Remeras == 2){
                let deportivos = prompt("Que tipo de conte estas buscando? \n 1. Cortos \n 2. Largos");
                    if (deportivos == 1 ){
                        alert("Estos son las remeras manga cortas que tenemos en este momento para ofrecerte");
                    } 
                    else if (deportivos == 2){
                        alert("Estos son las remeras manga larga que tenemos en este momento para ofrecerte");
                    }
            }
        }
    if (productos == 4){
        let camperas = prompt("Que tipo de campera estas buscando=? \n 1. Camperas \n 2. Camperones");
        if (camperas == 1){
            alert("Estos son las tipos de camperas que tenemos disponibles en este momento");
        }
        else if( camperas == 2){
            alert("Estos son los tipos de camperones que tenemos disponibles en este momento");
        }
    }
}
productos();

// Calculadora de Productos
let descuento = 3000;

function calculadora(art1, art2, operador) {
    switch (operador) {
        case "+":
            return art1 + art2;
            break;

        case "*":
            let numero = parceInt(prompt("Numero de productos que desea comprar"))
            return art1 * numero;
            break;

        case "-":
            return art1 - descuento;
            break;

        default:
            return 0;
            break;
    }
}

// let calculo = calculadora(4000, 5000, "+");
// console.log(calculo);
// let calculo1 = calculadora(4000, descuento, "-");
// console.log(calculo1);
// let calculo2 = calculadora(4000, numero, "*");
// console.log(calculo2);

