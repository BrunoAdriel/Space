// Inicio con usuario guardado


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
    { id: 1, nombre:"buzo icons", precio: 12000, color:"Gris y Rosa", talle:"S/M/L/XL", tipo:"LifeStyle", genero:"Unisex", img:"Buzo1.jpg", stock: 7},
    { id: 2, nombre:"camperon bts", precio: 25000, color:"Azul y Amarillo", talle:"M/L/XL/XXL", tipo:"Deportivo", genero:"Unisex", img:"Camperon1.jpg", stock: 10},
    { id: 3, nombre:"campera rompeviento liviano", precio: 14000, color:"Negro, Dorado y Blanco", talle:"XS/S/M/L/XL", tipo:"Deportivo", genero: "mujer", img:"CamperaRompevientoMujer1.jpg", stock:4},
];


function prods(id, nombre, precio, color, talle, tipo, genero, img, stock){
    this.id = id;
    this.nombre = nombre;
    this.precio = parseFloat(precio);
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


// const ropa =filtrar(producto, parseFloat(prompt("precio deseado")), 'precio')

// for (const resultado of ropa) {
//     CargaProd(carrito, resultado);
    
// }
// console.log(carrito);


// ------------- ------------- ------------- insertar productos en html


const conteinP = document.getElementById("pd")
let carrito = [];

producto.forEach((producto) =>{
    const div = document.createElement("div")
    div.innerHTML =`

            <div class="card" style="width: 16rem;">
                <img src="./pictures/${producto.img}" alt=""/ class="card-img-top">
                <div class="card-body">
                <h5 class="card-title"> ${producto.nombre}</h5> 
                <p class="card-text"> ${producto.precio}</p>
                <button id="agregar${producto.id}" class="btnCompra" >Agregar</button>

        </div>
    </div>`;
    conteinP.appendChild(div)
    

    const buton = document.getElementById(`agregar${producto.id}`);

    buton.addEventListener('click', () =>{
        agregarCarrito(producto.id)
    })
})



const agregarCarrito = (prodId) =>{
    const item = producto.find((prod) => prod.id === prodId )
    carrito.push(item)
    console.log(carrito);
}


// ------------- ------------- ------------- actualizar el carrito ------------- ------------- -------------


const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]


botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) =>{
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation() //cuando clickeo sobre el modal se finaliza la propagacion del click a los elementos
    //padre
})


// ------------- ------------- ------------- actualizar el carrito ------------- ------------- -------------

const contenedorCarrito = document.getElementById('carritoContenedor')

// const actualizarCarrito = () => {
    

//     carrito.forEach((prod) => {
//         const div = document.getElementById('div')
//         div.className  = ('productoEnCarrito')
//         div.innerHTML =   `

//     })
// }