window.onload = main;
function main() {

    var usuarioSesion = JSON.parse(sessionStorage.getItem("usuario"));
    
    if (usuarioSesion) {
        document.getElementById("login").innerHTML="Cerrar Sesion";
        document.getElementById("registro").innerHTML="Perfil";
        document.getElementById("login").addEventListener("click", cerrarSesion, false);;
        document.getElementById("registro").href="perfil.html";
    }

}

function cerrarSesion() {
    sessionStorage.removeItem("usuario");
}
