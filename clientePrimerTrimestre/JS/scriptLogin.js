window.onload = load;

function load(){
    document.getElementById("formulario").addEventListener("submit", inicioSesion, false);
}

function validaUsuario(){
    if (document.getElementById("usuario").value != "") {
        if (!/(^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,16})+$/.test(document.getElementById("usuario").value)) {
                    
            errores += "El usuario introducido no es valido </br>";

            document.getElementById("usuario").focus();
            document.getElementById("usuario").style.backgroundColor = "red";
        }else{
            document.getElementById("usuario").style.backgroundColor = "white";
        }
    }else{
        errores += "El campo usuario no puede estar vacio </br>";
        document.getElementById("usuario").focus();
        document.getElementById("usuario").style.backgroundColor = "red";
    }
}

function validaContrasena(){
    if (document.getElementById("contrasena").value != "") {
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(document.getElementById("contrasena").value)) {
                    
            errores += "La contraseña introducida no es valida (minimo 8 caracteres, 1 mayuscula, 1 minuscula y 1 numero)</br>";

            document.getElementById("contrasena").focus();
            document.getElementById("contrasena").style.backgroundColor = "red";
        }else{
            document.getElementById("contrasena").style.backgroundColor = "white";
        }
    }else{
        errores += "El campo contraseña no puede estar vacio </br>";
        document.getElementById("contrasena").focus();
        document.getElementById("contrasena").style.backgroundColor = "red";
    }
}

function inicioSesion(event){
    event.preventDefault();
    errores = "";

    validaUsuario();
    validaContrasena();

    if (errores!="") {
        event.preventDefault()
        document.getElementById("errores").innerHTML= errores;
        return false;
    }else{    
        var usuario = document.getElementById ("usuario").value;
        var contrasena = document.getElementById ("contrasena").value;

        var usuariojson = JSON.parse(localStorage.getItem(usuario));

        if(usuariojson == null){
            event.preventDefault()
            errores = "El usuario no existe";
            document.getElementById("errores").innerHTML= errores;
            return false;
        }else{
            event.preventDefault();
            if (usuario == usuariojson.usuario && contrasena == usuariojson.contrasena) {
                event.preventDefault();
                sessionStorage.setItem("usuario", JSON.stringify(usuariojson));
                location.href="perfil.html";

            }else{
                event.preventDefault();
                errores = "El usuario y la contraseña no coinciden";
                document.getElementById("errores").innerHTML= errores;
                return false;
            }
        }
    }
    
}