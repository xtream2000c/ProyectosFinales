window.onload = load;

function load(){
    document.getElementById("formulario").addEventListener("submit", inicioSesion, false);
}

function inicioSesion(event){
    event.preventDefault();

    var usuario = document.getElementById ("usuario").value;
    var contrasena = document.getElementById ("contrasena").value;

    var usuariojson = JSON.parse(localStorage.getItem(usuario));

    if(usuariojson == null){
        event.preventDefault()
        alert("El usuario no existe");
    }else{
        event.preventDefault();
        if (usuario == usuariojson.usuario && contrasena == usuariojson.contrasena) {
            event.preventDefault();
            sessionStorage.setItem("usuario", JSON.stringify(usuariojson));
            location.href="perfil.html";

        }else{
            event.preventDefault();
        }
    }

    
}