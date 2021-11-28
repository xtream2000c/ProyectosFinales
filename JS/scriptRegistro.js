window.onload = load;

function load(){
    document.getElementById("formulario").addEventListener("submit", registro, false);
}


function registro(event){
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById ("email").value;
    var usuario = document.getElementById ("usuario").value;
    var contrasena = document.getElementById ("contrasena").value;

    var registrojson = {'usuario' : usuario, 'nombre' : nombre, 'email' : email, 'contrasena' : contrasena};

    

    var confirmacion = confirm("¿Desea confirmar el registro?");

    if (confirmacion) {
        localStorage.setItem('usuarioRegistrado', JSON.stringify(registrojson));
        location.href="login.html"
    }else{
        event.preventDefault();
    }
}