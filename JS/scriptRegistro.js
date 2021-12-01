window.onload = load;

function load(){
    document.getElementById("formulario").addEventListener("submit", registro, false);
}

function validaNombre(){
    if (document.getElementById("nombre").value != "") {
        if (!/(^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,16})+$/.test(document.getElementById("nombre").value)) {
                    
            errores += "El nombre introducido no es valido </br>";

            document.getElementById("nombre").focus();
            document.getElementById("nombre").style.backgroundColor = "red";
        }else{
            document.getElementById("nombre").style.backgroundColor = "white";
        }
    }else{
        errores += "El campo nombre no puede estar vacio </br>";
        document.getElementById("nombre").focus();
        document.getElementById("nombre").style.backgroundColor = "red";
    }
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

function validaEmail(){
    if (document.getElementById("email").value != "") {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value)) {
                /************************************
                 * 
                 * \w+([\.-]?\w+)* CON ESTA EXPRESION SE PERMITE QUE LA PARTE INICIAL
                 * DEL EMAIL TENGA PALABRAS ALFANUMETICAS, \w+ POSTERIORMENTE CON ([\.-]?\w+)*
                 * SE PERMITE QUE PUEDA HABER UN PUNTO O GUION SEGUIDO DE UNA PALABRA Y CON * SE
                 * INDICA QUE ESTA PARTE PUEDE REPETIRSE 0 O VARIAS VECES.
                 * 
                 * TRAS EL NOMBRE DEL EMAIL, VIENE @ PARA OBLIGAR QUE TENGA QUE ESTAR PRESENTE, Y SEGUIDO DE
                 * LA MISMA SENTENCIA QUE ANTES, PARA EL SUBDOMINIO DE CORREO ELECTRONICO w+([\.-]?\w+)*
                 * 
                 * FINALMENTE (\.\w{2,3})+ CON ESTA SENTENCIA SE OBLIGA A PONER UN PUNTO
                 * SEGUIDO DE UNA PALABRA DE LONGITUD ENTRE 2 Y 3 CARACTERES, Y ESTA PARTE PUEDE REPETIRSE UNA O MAS
                 * VECES.
                 * 
                 *************************************/
            errores += "El Email introducido no cumple con el formato example@example.com </br>";
    
            document.getElementById("email").focus();
            document.getElementById("email").style.backgroundColor = "red";
        }else{
            document.getElementById("email").style.backgroundColor = "white";
            
        } 
    }else{
        errores += "El campo Email no puede estar vacio </br>";
        document.getElementById("email").focus();
        document.getElementById("email").style.backgroundColor = "red";
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

function registro(event){

    event.preventDefault();
    
    errores = "";

    validaNombre();
    validaEmail();
    validaUsuario();
    validaContrasena();

    if (errores!="") {
        event.preventDefault()
        document.getElementById("errores").innerHTML= errores;
        return false;
    }else{    
        var nombre = document.getElementById("nombre").value;
        var email = document.getElementById ("email").value;
        var usuario = document.getElementById ("usuario").value;
        var contrasena = document.getElementById ("contrasena").value;

        var registrojson = {'usuario' : usuario, 'nombre' : nombre, 'email' : email, 'contrasena' : contrasena};

        var confirmacion = confirm("¿Desea confirmar el registro?");

        if (confirmacion) {
            localStorage.setItem(usuario, JSON.stringify(registrojson));
            location.href="login.html"
        }else{
            event.preventDefault();
        }
    }
}