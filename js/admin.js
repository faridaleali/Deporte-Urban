/**************** CHECKEO SI ESTA LOGEADO COMO ADMINISTRADOR *******************/

function checkeoAdmin() {

  let admin = JSON.parse(localStorage.getItem("useradmin"))

  if(admin === false) {
    alert('No tienes acceso a esta pagina')
    window.location.href = "../pages/login.html"
  }

  return navbarLogeado();
}

checkeoAdmin();

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

/********************* GENERAMOS LAS FILAS Y LAS CELDAS ******************/

let productosUrban = JSON.parse(localStorage.getItem("productosurban"))

function generarFilaProducto(producto) {

  const fila = document.createElement('tr');

  const celdas = ['id', 'name', 'description', 'price'];

  for (const propiedad of celdas) {
    const celda = document.createElement('td');
    celda.innerText = producto[propiedad];
    fila.appendChild(celda);
  }

  let botonEditar = document.createElement('td');
  botonEditar.innerHTML = `<button 
    id="editar-producto" 
    class="rounded botones-admin"
    data-bs-toggle="modal" 
    data-bs-target="#exampleModal">Editar</button>`;
    fila.appendChild(botonEditar)
    botonEditar.addEventListener('click', function() {
      editarFilaProducto(producto.id, producto.name, producto.description, producto.price);
  })

  let botonBorrar = document.createElement('td');
  botonBorrar.innerHTML = '<button class="rounded botones-admin">Borrar</button>';

  fila.appendChild(botonBorrar)
  botonBorrar.addEventListener('click', function() {
    borrarFilaProducto(producto.id);
  })

  return fila;
}

/******************** CARGAR LAS FILAS *****************/

function cargarProductos() {
  let tableBody = document.querySelector('#productos-table tbody');
  tableBody.innerHTML = '';

  productosUrban.forEach(function(producto) {
    let fila = generarFilaProducto(producto);
    tableBody.appendChild(fila);
  });
}

cargarProductos();

/******************** EDITAR PRODUCTOS *****************/

function editarFilaProducto(id, nombre, descripcion, precio) {
  document.getElementById('id-producto').value = id;
  document.getElementById('nombre-producto').value = nombre;
  document.getElementById('detalle-producto').value = descripcion;
  document.getElementById('precio-producto').value = precio;

  const botonGuardar = document.querySelector('#agregar-producto');
  botonGuardar.textContent = 'Guardar cambios';
  botonGuardar.removeEventListener('click', crearNuevoProducto);
  botonGuardar.addEventListener('click', guardarEditProducto);
}

function guardarEditProducto() {

  const idProducto = document.getElementById('id-producto').value;

  let productoEditado = productosUrban.find(function(producto) {
    return producto.id === parseInt(idProducto);
  });

  const nombreProducto = document.getElementById('nombre-producto').value;
  const detalleProducto = document.getElementById('detalle-producto').value;
  const precioProducto = document.getElementById('precio-producto').value;

  productoEditado.name = nombreProducto;
  productoEditado.description = detalleProducto;
  productoEditado.price = precioProducto;

  localStorage.setItem("productosurban", JSON.stringify(productosUrban));

  cargarProductos();

  alert('Cambios realizados correctamente');

  document.getElementById('id-producto').value = '';
  document.getElementById('nombre-producto').value = '';
  document.getElementById('detalle-producto').value = '';
  document.getElementById('precio-producto').value = '';

  const botonGuardar = document.querySelector('#agregar-producto');
  botonGuardar.textContent = 'Agregar producto';

  botonGuardar.removeEventListener('click', guardarEditProducto);
  botonGuardar.addEventListener('click', crearNuevoProducto);

}

/********************* FUNCION DE BORRAR PRODUCTO ******************/

function borrarFilaProducto(id) {
  let confirmacion = confirm('¿Estas seguro de que quieres borrar este producto?')

  if(confirmacion) {
    productosUrban = productosUrban.filter(function(producto) {
      return (producto.id !== id);
    });
    localStorage.setItem("productosurban", JSON.stringify(productosUrban));
    cargarProductos();
  } else {
    return;
  }
}

/******************** CREAR OBJETO NUEVO PRODUCTO *****************/

class NuevoProducto {
  constructor(id, name, description, price) {
    this.id = parseInt(id, 10);
    this.name = name;
    this.description = description;
    this.price = price;
  }
  crearProducto() {
    let newProduct = {
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price
    };
    productosUrban.push(newProduct);
    localStorage.setItem("productosurban", JSON.stringify(productosUrban));
  }
}

/******************** CREAR VISUALMENTE NUEVO PRODUCTO *****************/

function crearNuevoProducto(event) {

  event.preventDefault();

  const idProducto = document.getElementById('id-producto').value;
  const nombreProducto = document.getElementById('nombre-producto').value;
  const detalleProducto = document.getElementById('detalle-producto').value;
  const precioProducto = document.getElementById('precio-producto').value;

  if (idProducto && nombreProducto && detalleProducto && precioProducto) {
    const productoCreado = new NuevoProducto(idProducto, nombreProducto, detalleProducto, precioProducto, "", "", "");
    productoCreado.crearProducto();

    cargarProductos();

    document.getElementById('id-producto').value = '';
    document.getElementById('nombre-producto').value = '';
    document.getElementById('detalle-producto').value = '';
    document.getElementById('precio-producto').value = '';

    alert('Producto nuevo cargado con exito')
  } 
  else {
    alert('Por favor, ingrese todos los datos del producto');
  }
}

/******************** GUARDAR NUEVO PRODUCTO *****************/

function guardarNuevoProducto() {
  const botonAgregar = document.querySelector('#agregar-producto');
  botonAgregar.addEventListener('click', crearNuevoProducto);
}

guardarNuevoProducto();


/******************** VENTAS MENSUALES *******************/

const ventasMensuales = [15000, 12000, 32000, 19000, 14000, 32000, 22000, 9000];

const canvasVentas = document.getElementById('chart-ventas');

const chartVentas = new Chart(canvasVentas, {
  type: 'bar',
  data: {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'],
    datasets: [{
      label: 'Ventas Mensuales',
      data: ventasMensuales,
      backgroundColor: 'rgba(75, 192, 192, 0.6)'
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

/******************** VISITAS *******************/

const visitas = [
  { etiqueta: 'Directo', visitas: 500 },
  { etiqueta: 'Redes Sociales', visitas: 200 },
  { etiqueta: 'Búsqueda', visitas: 300 },
  { etiqueta: 'Referencias', visitas: 150 }
];

const canvasVisitas = document.getElementById('chart-visitas');

const chart = new Chart(canvasVisitas, {
  type: 'pie',
  data: {
    labels: visitas.map(visita => visita.etiqueta),
    datasets: [{
      data: visitas.map(visita => visita.visitas),
      backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(255, 206, 86, 0.6)'],
    }]
  }
});
