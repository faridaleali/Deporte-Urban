/**************** CHECKEO SI ESTA LOGEADO COMO ADMINISTRADOR *******************/

function checkeoLogin() {

    let admin = JSON.parse(localStorage.getItem("useradmin"))
  
    if(admin === true) {
        return navbarLogeado();
    }
}
  
checkeoLogin();

/**************** CAMBIO DE NAVBAR AL ESTAR LOGEADO *******************/

function navbarLogeado() {
  const botonLogin = document.querySelector('#login-navbar');
  botonLogin.innerHTML = `
  <div id="adminLogin">
    <p class="menu-admin m-0 p-0 pe-2">Administracion</p>
    <button type="button" id="log-out" class="btn m-0 ms-2 p-0 px-2 btn-danger">Cerrar sesion</button>
  </div>`
  botonLogin.removeAttribute('href');

  const botonAdmin = document.querySelector('.menu-admin');
  botonAdmin.addEventListener('click', menuAdministracion);

  const botonCerrar = document.querySelector('#log-out');
  botonCerrar.addEventListener('click', cerrarSesion);
}

/**************** FUNCION MENU ADMIN *******************/

function menuAdministracion() {
  window.location.href = "../pages/admin.html"
}

/**************** FUNCION CERRAR SESION *******************/

function cerrarSesion() {
  let admin = false;
  localStorage.setItem("useradmin", JSON.stringify(admin));
  window.location.href = "../pages/login.html"

  alert('Has cerrado sesion correctamente')
}
  
/**************** *******************/