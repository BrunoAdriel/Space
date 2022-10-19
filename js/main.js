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
// productos();

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


// ------------- asi creamos un arrays y una function 

const producto =[
    { id: 1, nombre:"buzo icons", precio: 12000, color:"Gris y Rosa", talle:"S/M/L/XL", tipo:"LifeStyle", genero:"Unisex", img:"BuzoArticulo1.jpg", stock: 7},
    { id: 2, nombre:"camperon bts", precio: 25000, color:"Azul y Amarillo", talle:"M/L/XL/XXL", tipo:"Deportivo", genero:"Unisex", img:"Camperon1.jpg", stock: 10},
    { id: 3, nombre:"campera rompeviento liviano", precio: 14000, color:"Negro, Dorado y Blanco", talle:"XS/S/M/L/XL", tipo:"Deportivo", genero: "mujer", img:"CamperaRompevientoMujer1.jpg", stock:4},
];


function prods(id, nombre, precio, color, talle, tipo, genero, img, stock){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.color = color;
    this.talle = talle;
    this.tipo = tipo;
    this.genero = genero;
    this.img = img;
    this.stock = stock;
}

// ------------- asi agregamos un nuevo producto  y lo pusheamos al arrays por funciones (es una manera generica, para que cuando quieras agregar mas servicios puedas hacerlo llamando a la funcion)

const NuevoProd = new prods (4, "campera cuerina", 20000, "negro", "S/M/L", "LifeStyle", "Mujer", "CamperaMujer3.jpg", 10);

function CargaProd(arr, objetos){
    arr.push(objetos);
}

CargaProd(producto, NuevoProd);
// console.log(producto);


// ------------- Filtrado y busquedas

function filtrar(arr, filtro, param){
    return arr.filter((el)=>{
        if(param == 'precio'){
            return el[param] <= parseFloat(filtro);
        }else{
            return el[param].includes(filtro);
        }
    }
    )
}

// console.log(filtrar(producto, parseFloat(prompt("precio deseado")), 'precio'));
// console.log(filtrar(producto, prompt("nombre del producto").toLowerCase() ,'nombre'));

// ------------- Carrito

const carrito = [];
// const ropa =filtrar(producto, parseFloat(prompt("precio deseado")), 'precio')

// for (const resultado of ropa) {
//     CargaProd(carrito, resultado);
    
// }
// console.log(carrito);

// ------------- ------------- ------------- insertar productos en html

const div = document.getElementById("lista");
console.log(div);

const enJSON = JSON.stringify(producto)

localStorage.setItem("producto", enJSON)


for (const prodd of producto) {
    let p = document.createElement("p");
    p.innerHTML = prodd;
    document.body.append(p);
    // div.appendChild(p)
}




// let div = document.getElementById("lista")

// producto.forEach((productos) => {
//     let p =document.createElement("p");
//     p.innerHTML = productos;
//     div.appendChild(p);
// });



// const catalogo = document.getElementsByClassName("lista")
// catalogo.innerHTML=`
//     <img src="./pictures/${producto.img}" alt="">
//     <p> ${producto.nombre}, $ ${producto.precio}</p>
// `;

