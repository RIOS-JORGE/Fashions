const apiNinos = {
  productosNiños: [
    // Remeras
    {
      id: 1,
      nombre: "Remera blanca de algodón",
      precio: 9.99,
      descripcion:
        "Remera básica de algodón blanco, ideal para cualquier ocasión.",
      imagen: "/assets/remera_blanca.jpg",
      cantidad: 0,
    },
    {
      id: 2,
      nombre: "Remera estampada con animales",
      precio: 12.99,
      descripcion: "Remera de algodón con estampado divertido de animales.",
      imagen: "/assets/remera_estampada_animales.jpg",
      cantidad: 0,
    },

    // Camisas
    {
      id: 3,
      nombre: "Camisa de jean",
      precio: 19.99,
      descripcion: "Camisa de jean clásica, versátil y resistente.",
      imagen: "/assets/camisa_jean.jpg",
      cantidad: 0,
    },
    {
      id: 4,
      nombre: "Camisa a cuadros",
      precio: 14.99,
      descripcion: "Camisa a cuadros de algodón, ideal para un look casual.",
      imagen: "/assets/camisa_cuadros.jpg",
      cantidad: 0,
    },

    // Vestidos
    {
      id: 5,
      nombre: "Vestido de verano",
      precio: 19.99,
      descripcion: "Vestido de algodón ligero y fresco, ideal para el verano.",
      imagen: "/assets/vestido_verano.jpg",
      cantidad: 0,
    },
    {
      id: 6,
      nombre: "Vestido de fiesta",
      precio: 29.99,
      descripcion:
        "Vestido de fiesta con detalles especiales, ideal para ocasiones especiales.",
      imagen: "/assets/vestido_fiesta.jpg",
      cantidad: 0,
    },

    // Pantalones
    {
      id: 7,
      nombre: "Pantalón de jean",
      precio: 19.99,
      descripcion: "Pantalón de jean clásico, cómodo y resistente.",
      imagen: "/assets/pantalon_jean.jpg",
      cantidad: 0,
    },
    {
      id: 8,
      nombre: "Leggins",
      precio: 14.99,
      descripcion: "Leggins de algodón, cómodos y versátiles.",
      imagen: "/assets/leggins.jpg",
      cantidad: 0,
    },

    // Calzado
    {
      id: 9,
      nombre: "Zapatillas deportivas",
      precio: 29.99,
      descripcion: "Zapatillas deportivas cómodas y versátiles.",
      imagen: "/assets/zapatillas_deportivas.jpg",
      cantidad: 0,
    },
    {
      id: 10,
      nombre: "Sandalias",
      precio: 19.99,
      descripcion: "Sandalias de verano, ideales para la playa y la piscina.",
      imagen: "/assets/sandalias.jpg",
      cantidad: 0,
    },
    {
      id: 11,
      nombre: "Botas de lluvia",
      precio: 24.99,
      descripcion: "Botas de lluvia impermeables y divertidas.",
      imagen: "/assets/botas_lluvia.jpg",
      cantidad: 0,
    },

    // Conjuntos
    {
      id: 12,
      nombre: "Conjunto de buzo y pantalón",
      precio: 29.99,
      descripcion: "Conjunto de buzo y pantalón de algodón, cómodo y cálido.",
      imagen: "/assets/conjunto_buzo_pantalon.jpg",
      cantidad: 0,
    },
    {
      id: 13,
      nombre: "Conjunto de short y remera",
      precio: 24.99,
      descripcion:
        "Conjunto de short y remera de algodón, ideal para el verano.",
      imagen: "/assets/conjunto_short_remera.jpg",
      cantidad: 0,
    },

    // Accesorios
    {
      id: 14,
      nombre: "Gorra",
      precio: 9.99,
      descripcion: "Gorra para proteger del sol.",
      imagen: "/assets/gorra.jpg",
      cantidad: 0,
    },
    {
      id: 15,
      nombre: "Bufanda",
      precio: 14.99,
      descripcion: "Bufanda de lana para el invierno.",
      imagen: "/assets/bufanda.jpg",
      cantidad: 0,
    },
  ],
};

const ApiNiños = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(apiNinos);
      }, 1500);
    });
  };
  
  export default ApiNiños;
