const apiMujeres = {
  productosFemeninos: [
    // Camisas y Blusas
    {
      id: 1,
      nombre: "Camisa de lino blanca",
      precio: 39.99,
      descripcion: "Camisa de lino ligera y fresca, perfecta para el verano.",
      imagen: "/assets/camisa_lino_blanca-DtrnD9Vm.jpg",
      cantidad: 0,
    },
    {
      id: 2,
      nombre: "Blusa de seda estampada",
      precio: 49.99,
      descripcion: "Blusa de seda elegante con estampado floral.",
      imagen: "/assets/blusa_seda_estampada-gQziuyAC.png",
      cantidad: 0,
    },
    {
      id: 3,
      nombre: "Remera de algodón oversize",
      precio: 24.99,
      descripcion:
        "Remera de algodón cómoda y casual, ideal para el día a día.",
      imagen: "/assets/remera_algodon_oversize-CPCPRFdc.png",
      cantidad: 0,
    },

    // Vestidos
    {
      id: 4,
      nombre: "Vestido corto de verano",
      precio: 34.99,
      descripcion: "Vestido corto y ligero, ideal para días cálidos.",
      imagen: "/assets/vestido_corto_verano-DDzftZ6w.jpg",
      cantidad: 0,
    },
    {
      id: 5,
      nombre: "Vestido largo de fiesta",
      precio: 79.99,
      descripcion:
        "Vestido largo y elegante, perfecto para ocasiones especiales.",
      imagen: "/assets/vestido_largo_fiesta-DcivruPw.png",
      cantidad: 0,
    },
    {
      id: 6,
      nombre: "Vestido midi de punto",
      precio: 49.99,
      descripcion: "Vestido midi de punto, cómodo y versátil.",
      imagen: "/assets/vestido_midi_punto-D5FT0dhR.png",
      cantidad: 0,
    },

    // Faldas
    {
      id: 7,
      nombre: "Falda midi de denim",
      precio: 39.99,
      descripcion:
        "Falda midi de mezclilla, versátil y cómoda para cualquier ocasión.",
      imagen: "/assets/falda_midi-DbRWdbu0.png",
      cantidad: 0,
    },
    {
      id: 8,
      nombre: "Falda corta plisada",
      precio: 29.99,
      descripcion: "Falda corta plisada, ideal para un look juvenil.",
      imagen: "/assets/falda_corta_plisada-DoF3SlyH.png",
      cantidad: 0,
    },

    // Pantalones
    {
      id: 9,
      nombre: "Jeans skinny de tiro alto",
      precio: 39.99,
      descripcion: "Jeans ajustados de denim, de tiro alto y diseño moderno.",
      imagen: "/assets/jeans_skinny-ppb7CabE.png",
      cantidad: 0,
    },
    {
      id: 10,
      nombre: "Pantalón palazzo estampado",
      precio: 49.99,
      descripcion: "Pantalón palazzo ancho y fluido, con estampado floral.",
      imagen: "/assets/pantalon_palazzo_estampado-CAuMN07V.png",
      cantidad: 0,
    },
    {
      id: 11,
      nombre: "Leggings deportivos",
      precio: 29.99,
      descripcion: "Leggings cómodos y versátiles para hacer ejercicio.",
      imagen: "/assets/leggings_deportivos-tG0fXVIP.png",
      cantidad: 0,
    },

    // Calzado
    {
      id: 12,
      nombre: "Zapatillas deportivas blancas",
      precio: 59.99,
      descripcion: "Zapatillas cómodas y versátiles para el día a día.",
      imagen: "/assets/zapatillas_deportivas_blancas-DH5wCHz5.png",
      cantidad: 0,
    },
    {
      id: 13,
      nombre: "Botas altas de cuero",
      precio: 99.99,
      descripcion: "Botas altas de cuero, perfectas para el invierno.",
      imagen: "/assets/botas_altas_cuero-Cy3Rc7bb.png",
      cantidad: 0,
    },
    {
      id: 14,
      nombre: "Sandalias de tacón",
      precio: 69.99,
      descripcion:
        "Sandalias elegantes con tacón, ideales para ocasiones especiales.",
      imagen: "/assets/sandalias_tacon-C2gmalQl.png",
      cantidad: 0,
    },
    {
      id: 15,
      nombre: "Botines de tacón bajo",
      precio: 79.99,
      descripcion: "Botines de tacón bajo, cómodos y versátiles.",
      imagen: "/assets/botines_tacon_bajo-rvzjy-hl.png",
      cantidad: 0,
    },
  ],
};


const ApiMujeres = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(apiMujeres);
      }, 1500);
    });
  };
  
  export default ApiMujeres;