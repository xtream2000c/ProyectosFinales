window.onload = load;

function load(){
    main();
    var usuarioPerfil = JSON.parse(sessionStorage.getItem("usuario"));

    document.getElementById("nombreUsuario").innerHTML=usuarioPerfil.nombre;
    document.getElementById("emailUsuario").innerHTML=usuarioPerfil.email;
    document.getElementById("usuario").innerHTML=usuarioPerfil.usuario;


}