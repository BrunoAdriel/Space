// ------------- ------------- ------------- funcionces de registro de sesion ------------- ------------- -------------
// constantes

const   nombre = document.querySelector("#nombre"),
        apellido = document.querySelector("#apellido"),
        email = document.querySelector("#email"),
        pass = document.querySelector("#pass"),
        btnR =document.querySelector ("#BtnR")


// clase y funciones principales
let usuarios;
if (localStorage.getItem("usuarios")){
    usuarios = JSON.parse(localStorage.getItem("usuarios"))
}else {
    usuarios = [];
}


class usuario{
    constructor(nombre, apellido, email, pass){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.pass = pass;
    }
}

function limpiar(){
    nombre.value = "";
    apellido.value = "";
    email.value = "";
    pass.value = "";
}

function guardarUsuario(usuario){
    return usuarios.push(usuario)
}

btnR.addEventListener("click", (e) =>{
    e.preventDefault();
    let nuevoUser = new usuario(
        nombre.value,
        apellido.value,
        email.value,
        pass.value
    );
    

    guardarUsuario(nuevoUser);
    limpiar();
    guardarEnLocal(usuarios);
    
    })

// funciones Storage

function guardarEnLocal(el){
    return localStorage.setItem("usuarios", JSON.stringify(el) )
}

