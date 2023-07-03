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
  window.location.href = "./pages/admin.html"
}

/**************** FUNCION CERRAR SESION *******************/

function cerrarSesion() {
  let admin = false;
  localStorage.setItem("useradmin", JSON.stringify(admin));
  window.location.href = "./index.html"

  alert('Has cerrado sesion correctamente')
}


/**************** *******************/

let productosUrban = JSON.parse(localStorage.getItem("productosurban"))
let filterarray = []
let newArray = [...galeryarray] 

//creamos una funcion para mostrar la galeria

showgallery(productosUrban)

function showgallery(curarray) {
  document.getElementById("card").innerText = "";

  for (var i = 0; i < curarray.length; i++) {
    document.getElementById("card").innerHTML += `
      <div class="col-lg-4 text-center mb-2 mt-5">
        <div class="card border-0 bg-light">
          <div class="card-body">
            <img id="product-${i}" src="${curarray[i].src}" class="img-fluid object-fit-cover h-100 w-100" alt="${curarray[i].id}">
          </div>
        </div>
        <h6>${curarray[i].name}</h6>
        <p>$${curarray[i].price}</p>
      </div>
    `;
  }

  // Agregar evento click a cada imagen de producto
  const productElements = document.querySelectorAll('[id^="product-"]');
  productElements.forEach(function(element) {
    element.addEventListener('click', function() {
      const productId = element.id.split('-')[1];
      redireccionarProducto(curarray[productId].id);
    });
  });
}

function redireccionarProducto(productId) {
  // Realizar redirección al producto correspondiente utilizando el ID del producto
  window.location.href = `./pages/detalle.html?id=${productId}`;
}



function filterProduct(value){
  if (!value) { newArray = [...galeryarray] ; 
  
    showgallery(newArray)
  } else {
    newArray = galeryarray.filter(item => item.category === value);
    showgallery(newArray)
  }
}

document.getElementById("myinput").addEventListener("keyup", function(){
  let text = document.getElementById("myinput").value.toLowerCase();
  
  let filterarray = galeryarray.filter(function(a){
    return a.name.toLowerCase().startsWith(text);
  });
  
  if (this.value == "") {
    showgallery(galeryarray);
    document.getElementById("para").style.display = "none";
  } else {
    if (filterarray.length === 0) {
      document.getElementById("para").style.display = "block";
      document.getElementById("card").innerHTML = "";
    } else {
      showgallery(filterarray);
      document.getElementById("para").style.display = "none";
    }
  }
});


/****************** CARRITO ****************/

const showCar = () => {
  let modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = "";

  for (let i = 0; i < miCarrito.length; i++) {
    let product = miCarrito[i];
    let modalContenido = document.createElement("div");
    modalContenido.classList.add('contenidoModal')
    modalContenido.innerHTML = `
      <h2> ${product.name} </h2>  <hr>
      <p class="text-center">$${product.price}</p>  <hr>
      <img class="center-block remeraImg mx-auto d-block" src="./${product.img}" alt="${product.name}">  <hr>
      <p class="text-center">ID:${product.id}</p>
    `;

    modalBody.append(modalContenido);

    let eliminar = document.createElement('span')
    eliminar.innerText = '❌'
    eliminar.className = 'eliminar-product'
    modalContenido.appendChild(eliminar)
    eliminar.addEventListener('click', eliminarProducto)
  }
};

/***** Cargar carrito ******/

window.onload = () => {
  if (localStorage.getItem("car")) {
    miCarrito = JSON.parse(localStorage.getItem("car"));
    countCard = miCarrito.length;
    let itemCards = document.querySelector('#carrito');
    itemCards.innerText = countCard; 
    showCar();
  }
};

/***** Eliminar del carrito ******/

const eliminarProducto = () =>{
  const foundId = miCarrito.find ((element)=> element.id)
  miCarrito = miCarrito.filter((carritoId) =>{
    return carritoId !== foundId
  })
  showCar()
  localStorage.setItem("car", JSON.stringify(miCarrito));
}






