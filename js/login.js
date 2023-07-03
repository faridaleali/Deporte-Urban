/**************** CHECKEO SI ESTA LOGEADO COMO ADMINISTRADOR *******************/

let admin = false;

function checkeoAdmin() {

  admin = JSON.parse(localStorage.getItem("useradmin"))

  if(admin) {
    window.location.href = "../pages/admin.html"
  }
}

checkeoAdmin();

/************** AUTORIZACION DE ADMINISTRACION ****************/

let botonIniciar = document.getElementById('formulario')

botonIniciar.addEventListener('submit', function(event) {
  event.preventDefault()

  let usuario = document.getElementById('usuario').value;
  let contrasenia = document.getElementById('password').value;


  if(usuario === "admin" && contrasenia === "admin") {
    admin = true;
    alert('Iniciaste sesion como administrador')
    window.location.href = "../pages/admin.html"

    localStorage.setItem("useradmin", JSON.stringify(admin));
  } else {
    alert('Usuario o contraseña incorrecto')
  }
})