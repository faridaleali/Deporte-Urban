let galeryarray = [
  {
      id: 1236,
      name: `Remera Under Armour Live GP`,
      description: `- Esta mezcla de algodón super suave, te brinda comodidad durante todo el dia
      - Cuello acanalado
      - 60% Algodon/40% Polyester
      - Ideal para entrenar`,
      price: 11.499,
      src: "assets/images/195252511982-1.jpeg",
      stock: 'Stock Disponible',
      category: `women`
  },
  {
    id: 3256,
    name: `Short Project Rock Fleece para mujer`,
    description: `- Tejido Fleece de mezcla de algodón ligero y ultra cómodo
    - Suave capa interior que mantiene la calidez y la comodidad
    - Amplia cintura elástica con revestimiento y cordón exterior
    - Bolsillos laterales abiertos`,
    price:14.499,
    src:"assets/images/img-short.jpeg",
    stock: 'Stock Disponible', 
    category: `women`
  },
  {
      id:6589 ,
      name: `Calzas UA RUSH™ No-Slip Waistband Full-Length para mujer`,
      description: ` - UA RUSH™ es la tecnología infrarroja que refleja la energía del cuerpo para rendir más y recuperarte más rápido
      - Material que capilariza el sudor y se seca rápidamente
      - Ubicación avanzada de las costuras para eliminar los puntos de presión y los roces
      - Cintura alta UA No-Slip para una protección y una sujeción óptimas que se adapta a todos tus movimientos
      - Bolsillo lateral profundo`,
      price:26.999,
      src: "assets/images/calza.jpeg",
      stock: 'Stock No Disponible',
      category: `women`
    },
    {
      id:2366,
      name: `Pantalón corto UA Rival Fleece Graphic para Hombre`,
      description: `- Tejido Fleece de mezcla de algodón ligero y ultracómodo con interior cepillado para    mantenerte abrigado y cómodo
      - Cintura elástica recubierta con cordón de ajuste externo
      - Bolsillos abiertos para las manos y bolsillo trasero seguro con cierre a presión`,
      price:14.4999,
      src:"assets/images/shotm1.jpeg" ,
      stock: 'Stock Disponible',   
      category: `men`
    },
    {
      id: 9856,
      name: `Remera UA RUSH™ Energy para hombre`,
      description: `- Tejido Fleece de mezcla de algodón ligero y ultra cómodo
      - Suave capa interior que mantiene la calidez y la comodidad
      - Amplia cintura elástica con revestimiento y cordón exterior
      - Bolsillos laterales abiertos`,
      price:16.499,
      src:"assets/images/rem.jpeg" ,
      stock: 'Stock Disponible', 
      category: `men`
    },
    {
      id: 8649 ,
      name: `Camiseta Titular Argentina 3 Estrellas 2022`,
      description:` - UA RUSH™ es la tecnología infrarroja que refleja la energía del cuerpo para rendir más y recuperarte más rápido
      - UA RUSH™ es una tecnología infrarroja que refleja la energía de tu cuerpo para ayudarte a trabajar más duro y recuperarte más rápido
      - El material elástico en 4 direcciones se mueve mejor en todas las direcciones
      - Dobladillo con ventilación lateral`, 
      price:28.999, 
      src: "assets/images/arg.jpg",
      stock: 'Stock No Disponible', 
      category: `men`
    },
    {
      id: 5698,
      name: `Remera de entrenamiento Under Armour Sportstyle Logo para niños`,
      description: `- Esta mezcla de algodón super suave, te brinda comodidad durante todo el dia
      - Cuello acanalado
      - 60% Algodon/40% Polyester`,
      price:9.999,
      src:"assets/images/remchi.jpeg" ,
      stock: 'Stock Disponible', 
      category: `child`
    },
    {
      id: 9695,
      name:`Remera manga corta UA Multilogo Short Sleeve para niño` ,
      description: `- Tejido supersuave de mezcla de algodón que proporciona comodidad durante todo el día.
      - Cuello acanaladoTejido supersuave de mezcla de algodón que proporciona comodidad durante todo el día.
      - Cuello acanalado`,
      price:17.599,
      src: "assets/images/remchil2.jpeg",
      stock: 'Stock Disponible',  
      category: `child` 
    },
    {
      id:2365 ,
      name:`Remera UA BASKETBALL LOCK UP para niños` ,
      description: ` - Tejido supersuave de mezcla de algodón que proporciona comodidad durante todo el día.`,
      price:12.897,
      src:"assets/images/remchil3.jpeg" ,
      stock: 'Stock Disponible',  
      category: `child`, 
    }
]

/************* *************/

function checkArray() {

  let cargarObjetos = JSON.parse(localStorage.getItem("cargarproductos"));

  if(cargarObjetos !== true) {
    localStorage.setItem("productosurban", JSON.stringify(galeryarray));
    cargarObjetos = true;
  } else if (cargarObjetos === true) { 
    JSON.parse(localStorage.getItem("productosurban"))
  }
}

checkArray();
