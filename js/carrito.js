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
        <img class="center-block remeraImg mx-auto d-block" src="../${product.img}" alt="${product.name}">  <hr>
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