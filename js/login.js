// ------------- ------------- ------------- funcionces de inicio de sesion ------------- ------------- -------------


const   email = document.querySelector("#email"),
        pass = document.querySelector("#pass")
        check = document.querySelector("#check"),
        msj = document.querySelector("#msj"),
        btnI = document.querySelector("#btnI");


function inicioSesion(usuarios){
    let userFound = usuarios.find( (user) =>{
        return user.email === email.value && user.pass === pass.value
        })
        if(userFound){
            window.location.href = "index.html"
        }else{
            document.querySelector("#mensaje").innertext="Usuario no encontrado"
        }
        return userFound;
        }


function recuperarLS(){
    let datos = JSON.parse(localStorage.getItem("usuarios"));
        return datos;
    }


const usuarioLS = recuperarLS();


btnI.addEventListener("click", (e) =>{
    e.preventDefault();
        inicioSesion(usuarioLS)
    });


// check.addEventListener("checked",() => {
//     if(check.checked){
        
//     }else{localStorage.removeItem("usuarios");
//             localStorage.clear()}
// })


// if (localStorage.usuarios && localStorage.usuarios !== "") {
//     check.setAttribute("checked", "checked");
//     email.value = localStorage.usuarios;
// } else {
//     check.removeAttribute("checked");
//     email.value = "";
// }