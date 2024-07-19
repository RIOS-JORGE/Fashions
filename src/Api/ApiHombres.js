const apiHombres = {
  productosMasculinos: [
    {
      id: 1,
      nombre: "Camisa de vestir blanca",
      precio: 39.99,
      descripcion:
        "Camisa clásica de vestir blanca, ideal para ocasiones formales.",
      imagen: "src/assets/camisasHombres/camisablanca.png",
    },
    {
      id: 2,
      nombre: "Camisa casual de cuadros",
      precio: 29.99,
      descripcion:
        "Camisa casual de manga larga con patrón de cuadros, perfecta para un look relajado.",
      imagen: "src/assets/camisasHombres/camisarayada.png",
    },
    {
      id: 3,
      nombre: "Camisa de lino azul",
      precio: 34.99,
      descripcion:
        "Camisa ligera de lino en color azul, ideal para climas cálidos.",
      imagen: "src/assets/camisasHombres/camisalinoazul.png",
    },
    {
      id: 4,
      nombre: "Camisa de mezclilla",
      precio: 27.99,
      descripcion:
        "Camisa informal de mezclilla en tono azul claro, perfecta para un estilo urbano.",
      imagen: "src/assets/camisasHombres/camisamezclilla.png",
    },
    {
      id: 5,
      nombre: "Camisa polo negra",
      precio: 19.99,
      descripcion:
        "Camisa polo negra de algodón, cómoda y versátil para el día a día.",
      imagen: "src/assets/camisasHombres/camisapolonegra.png",
    },
    {
      id: 6,
      nombre: "Pantalón chino beige",
      precio: 49.99,
      descripcion:
        "Pantalón chino clásico en color beige, adecuado para cualquier ocasión.",
      imagen: "src/assets/pantalonesHombres/pantalónchinobeige.png",
    },
    {
      id: 7,
      nombre: "Jeans slim fit oscuros",
      precio: 39.99,
      descripcion:
        "Jeans ajustados slim fit en tono oscuro, ideales para un look moderno.",
      imagen: "src/assets/pantalonesHombres/jeansslimfitoscuros.png",
    },
    {
      id: 8,
      nombre: "Pantalón cargo verde",
      precio: 44.99,
      descripcion:
        "Pantalón cargo resistente en color verde militar, perfecto para actividades al aire libre.",
      imagen: "src/assets/pantalonesHombres/pantalóncargoverde.png",
    },
    {
      id: 8,
      nombre: "Pantalón de vestir gris",
      precio: 54.99,
      descripcion:
        "Pantalón de vestir elegante en color gris, ideal para eventos formales.",
      imagen: "src/assets/pantalonesHombres/pantalóndevestirgris.png",
    },
    {
      id: 9,
      nombre: "Shorts deportivos negros",
      precio: 29.99,
      descripcion:
        "Shorts deportivos negros, cómodos y funcionales para actividades físicas.",
      imagen: "src/assets/pantalonesHombres/shortsdeportivosnegros.png",
    },
    {
      id: 10,
      nombre: "Zapatos de vestir negros",
      precio: 79.99,
      descripcion:
        "Zapatos clásicos de vestir en color negro, elegantes y cómodos.",
      imagen: "src/assets/zapatosHombres/zapatosdevestirnegros.png",
    },
    {
      id: 11,
      nombre: "Zapatillas deportivas blancas",
      precio: 59.99,
      descripcion:
        "Zapatillas deportivas blancas, ideales para un estilo casual urbano.",
      imagen: "src/assets/zapatosHombres/zapatillasdeportivasblancas.png",
    },
    {
      id: 12,
      nombre: "Botas de cuero marrón",
      precio: 89.99,
      descripcion:
        "Botas de cuero genuino en color marrón, perfectas para el invierno.",
      imagen: "src/assets/zapatosHombres/botasdecueromarrón.png",
    },
    {
      id: 13,
      nombre: "Mocasines clásicos",
      precio: 69.99,
      descripcion:
        "Mocasines clásicos en piel, cómodos y versátiles para ocasiones informales.",
      imagen: "src/assets/zapatosHombres/mocasinesclásicos.png",
    },
    {
      id: 14,
      nombre: "Sandalias deportivas",
      precio: 34.99,
      descripcion:
        "Sandalias deportivas ajustables, perfectas para el verano y actividades al aire libre.",
      imagen: "src/assets/zapatosHombres/sandaliasdeportivas.png",
    },
  ],
};

const ApiHombres = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(apiHombres);
    }, 1000);
  });
};

export default ApiHombres;
