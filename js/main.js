// Inicio con usuario guardado

// let usuario = prompt("Ingresa tu nombre");
// let contraseña = prompt("Ingresa tu contraseña");
// let userPrincipal = "AdrielBruno";
// let contraseñaPrincipal = "123123";

// if (usuario == userPrincipal && contraseña == contraseñaPrincipal ){
//     alert("Bienvenido " + userPrincipal + " " + "espero que estes bien");
// } else if (usuario, contraseña) {
//     alert("Bienvenide " + usuario + " gracias por elegirnos");
// } else {
//     alert("no ingreso ningun usuario ni contraseña, podras navegar sin comprar");
// }

// Productos

function productos(){
    let productos = prompt("Que producto estas buscando " + usuario + " ? \n 1. Buzos. \n 2. Pantalones. \n 3. Remeras \n 4. Camperas");

    if (servicios == 1 ){
        let buzos = prompt("Que tipo de buzos estas buscando? \n 1. LifeStyle \n 2. Deportivos");
            if (Buzos == 1){
                alert("Estos son los buzos LifeStyle que tenemos en este momento para ofrecerte");
            } 
            else if(Buzos == 2) {
                alert("Estos son los buzos Deportivos que tenemos en este momento para ofrecerte");
            }
    }
    else if(servicios == 2){
        let Pantalones = prompt("Que tipo de Pantalones estas buscando? \n 1. LifeStyle \n 2. Deportivos");
            if (Pantalones == 1){
                prompt("Que tipo de conte estas buscando? \n 1. Cortos \n 2. Largos");
                    if (prompt == 1 ){
                        alert("Estos son los pantalones cortos que tenemos en este momento para ofrecerte");
                    } 
                    else if (prompt == 2){
                        alert("Estos son los pantalones largos que tenemos en este momento para ofrecerte");
                    }
            }
            else if(Pantalones == 2){
                if (prompt == 1 ){
                    alert("Estos son los pantalones deportivos cortos que tenemos en este momento para ofrecerte");
                } 
                else if (prompt == 2){
                    alert("Estos son los pantalones deportivos largos que tenemos en este momento para ofrecerte");
                }
            } 
    }
    else if(servicios == 3){
        let Remeras = prompt("Que tipo de remeras estas buscando? \n 1. LifeStyle \n 2. Deportivas");
        if (Remeras == 1){
            prompt("Que tipo de conte estas buscando? \n 1. Manga cortas \n 2.  Manga largos");
                if (prompt == 1 ){
                    alert("Estos son los remeras cortos que tenemos en este momento para ofrecerte");
                } 
                else if (prompt == 2){
                    alert("Estos son los remeras largos que tenemos en este momento para ofrecerte");
                }
        }
        else if(Remeras == 2){
            prompt("Que tipo de conte estas buscando? \n 1. Cortos \n 2. Largos");
            if (prompt == 1 ){
                alert("Estos son los remeras cortos que tenemos en este momento para ofrecerte");
            } 
            else if (prompt == 2){
                alert("Estos son los remeras largos que tenemos en este momento para ofrecerte");
            }
        }
        }

}


// Calculadora de Productos
// let descuento = 3000;

// function calculadora(art1, art2, operador) {
//     switch (operador) {
//         case "+":
//             return art1 + art2;
//             break;

//         case "*":
//             let numero = parceInt(prompt("Numero de productos que desea comprar"))
//             return art1 * numero;
//             break;

//         case "-":
//             return art1 - descuento;
//             break;

//         default:
//             return 0;
//             break;
//     }
// }

// let calculo = calculadora(4000, 5000, "+");
// console.log(calculo);
// let calculo1 = calculadora(4000, descuento, "-");
// console.log(calculo1);
// let calculo2 = calculadora(4000, numero, "*");
// console.log(calculo2);

