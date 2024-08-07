const apiHombres = {
  productosMasculinos: [
    {
      id: 1,
      nombre: "Camisa de vestir blanca",
      precio: 39.99,
      descripcion:
        "Camisa clásica de vestir blanca, ideal para ocasiones formales.",
      imagen: "/assets/camisablanca-B-qEjAlw.png",
      cantidad: 0,
    },
    {
      id: 2,
      nombre: "Camisa casual de cuadros",
      precio: 29.99,
      descripcion:
        "Camisa casual de manga larga con patrón de cuadros, perfecta para un look relajado.",
      imagen: "/assets/camisarayada-BagNVPi7.png",
      cantidad: 0,
    },
    {
      id: 3,
      nombre: "Camisa de lino azul",
      precio: 34.99,
      descripcion:
        "Camisa ligera de lino en color azul, ideal para climas cálidos.",
      imagen: "/assets/camisalinoazul-L3UH9oDA.png",
      cantidad: 0,
    },
    {
      id: 4,
      nombre: "Camisa de mezclilla",
      precio: 27.99,
      descripcion:
        "Camisa informal de mezclilla en tono azul claro, perfecta para un estilo urbano.",
      imagen: "/assets/camisamezclilla-_Sq1444T.png",
      cantidad: 0,
    },
    {
      id: 5,
      nombre: "Camisa polo negra",
      precio: 19.99,
      descripcion:
        "Camisa polo negra de algodón, cómoda y versátil para el día a día.",
      imagen: "/assets/camisapolonegra-CaWg-nof.png",
      cantidad: 0,
    },
    {
      id: 6,
      nombre: "Pantalón chino beige",
      precio: 49.99,
      descripcion:
        "Pantalón chino clásico en color beige, adecuado para cualquier ocasión.",
      imagen: "/assets/pantal%C3%B3nchinobeige-CGMoS8_-.png",
      cantidad: 0,
    },
    {
      id: 7,
      nombre: "Jeans slim fit oscuros",
      precio: 39.99,
      descripcion:
        "Jeans ajustados slim fit en tono oscuro, ideales para un look moderno.",
      imagen: "/assets/jeansslimfitoscuros-C0sAgsMV.png",
      cantidad: 0,
    },
    {
      id: 8,
      nombre: "Pantalón cargo verde",
      precio: 44.99,
      descripcion:
        "Pantalón cargo resistente en color verde militar, perfecto para actividades al aire libre.",
      imagen: "/assets/pantal%C3%B3ncargoverde-BTrjLX9H.png",
      cantidad: 0,
    },
    {
      id: 9,
      nombre: "Pantalón de vestir gris",
      precio: 54.99,
      descripcion:
        "Pantalón de vestir elegante en color gris, ideal para eventos formales.",
      imagen: "/assets/pantal%C3%B3ndevestirgris-BuFslnwS.png",
      cantidad: 0,
    },
    {
      id: 10,
      nombre: "Shorts deportivos negros",
      precio: 29.99,
      descripcion:
        "Shorts deportivos negros, cómodos y funcionales para actividades físicas.",
      imagen: "/assets/shortsdeportivosnegros-C2vL2Xty.png",
      cantidad: 0,
    },
    {
      id: 11,
      nombre: "Zapatos de vestir negros",
      precio: 79.99,
      descripcion:
        "Zapatos clásicos de vestir en color negro, elegantes y cómodos.",
      imagen: "/assets/zapatosdevestirnegros-D9cV6-QY.png",
      cantidad: 0,
    },
    {
      id: 12,
      nombre: "Zapatillas deportivas blancas",
      precio: 59.99,
      descripcion:
        "Zapatillas deportivas blancas, ideales para un estilo casual urbano.",
      imagen: "/assets/zapatillasdeportivasblancas-C-psm5Tc.png",
      cantidad: 0,
    },
    {
      id: 13,
      nombre: "Botas de cuero marrón",
      precio: 89.99,
      descripcion:
        "Botas de cuero genuino en color marrón, perfectas para el invierno.",
      imagen: "/assets/botasdecueromarr%C3%B3n-CLD8SIz5.png",
      cantidad: 0,
    },
    {
      id: 14,
      nombre: "Mocasines clásicos",
      precio: 69.99,
      descripcion:
        "Mocasines clásicos en piel, cómodos y versátiles para ocasiones informales.",
      imagen: "/assets/mocasinescl%C3%A1sicos-xLcr5dly.png",
      cantidad: 0,
    },
    {
      id: 15,
      nombre: "Sandalias deportivas",
      precio: 34.99,
      descripcion:
        "Sandalias deportivas ajustables, perfectas para el verano y actividades al aire libre.",
      imagen: "/assets/sandaliasdeportivas-CJa7P8sk.png",
      cantidad: 0,
    },
  ],
};

const ApiHombres = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(apiHombres);
    }, 1500);
  });
};

export default ApiHombres;
