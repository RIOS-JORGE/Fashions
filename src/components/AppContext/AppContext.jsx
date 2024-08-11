import { createContext, useEffect, useState } from "react";
import { db } from "../../Firebase/Firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

// Creamos el contexto de la aplicación
export const AppContext = createContext();

// Proveedor del contexto que envuelve a los componentes hijos
export const AppProvider = ({ children }) => {
  // Estado para almacenar la lista de productos
  const [productos, setProductos] = useState([]);

  // Estado para almacenar el carrito de compras, cargado desde el localStorage o inicializado como un array vacío
  const [carrito, setCarrito] = useState(
    () => JSON.parse(localStorage.getItem("storage")) || []
  );

  // Estado para almacenar la cantidad seleccionada por el usuario
  const [cantidad, setCantidad] = useState(1);

  // Estado para almacenar el número total de elementos en el carrito
  const [elementosCarrito, setElementosCarrito] = useState(0);

  //Firebase obtener pedidos
  const [pedidos, setPedidos] = useState();

  //Firebase obtener id

  const [ids, setIDs] = useState();

  //Firebase Firestore para obtener datos de los productos, pedidos, ids
  useEffect(() => {
    const DB = async () => {
      try {
        const snapShot = await getDocs(collection(db, "productMan"));
        const datosProductos = snapShot.docs.map((doc) => doc.data());
        setProductos(datosProductos[0].productosMasculinos);
      } catch (error) {
        console.log(error);
      }
    };
    DB();
  }, []);

  useEffect(() => {
    const DB = async () => {
      try {
        const snapShot = await getDocs(collection(db, "pedidos"));
        const datosProductos = snapShot.docs.map((doc) => doc.data());
        setPedidos(datosProductos);
      } catch (error) {
        console.log(error);
      }
    };
    DB();
  }, []);

  useEffect(() => {
    const DB = async () => {
      try {
        const snapShot = await getDocs(collection(db, "pedidos"));
        const datosIDs = snapShot.docs.map((doc) => doc.id);
        setIDs(datosIDs);
      } catch (error) {
        console.log(error);
      }
    };
    DB();
  }, []);

  // Efecto para guardar el carrito en el localStorage cada vez que se actualice
  useEffect(() => {
    localStorage.setItem("storage", JSON.stringify(carrito));
  }, [carrito]);

  // Efecto para actualizar el número total de elementos en el carrito
  useEffect(() => {
    setElementosCarrito(
      carrito.reduce((total, item) => total + item.cantidad, 0)
    );
  }, [carrito]);

  // Función para agregar un producto al carrito o incrementar la cantidad si ya está en el carrito
  const agregarCarrito = (id) => {
    setCarrito((prevCarrito) => {
      // Verificamos si el producto ya está en el carrito
      const productoExistente = prevCarrito.find((item) => item.id === id);
      if (productoExistente) {
        // Si el producto ya está, incrementamos su cantidad
        return prevCarrito.map((item) =>
          item.id === id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      } else {
        // Si el producto no está en el carrito, lo agregamos
        const producto = productos.find((e) => e.id === id);
        return [...prevCarrito, { ...producto, cantidad }];
      }
    });
  };

  // Función para incrementar la cantidad de un producto en el carrito
  const añadirProducto = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + cantidad } : item
      )
    );
  };

  // Función para reducir la cantidad de un producto en el carrito o eliminarlo si la cantidad es menor o igual a la cantidad a reducir
  const quitarProducto = (id) => {
    setCarrito((prevCarrito) => {
      const producto = prevCarrito.find((item) => item.id === id);
      if (producto) {
        if (producto.cantidad > cantidad) {
          // Reducimos la cantidad del producto en el carrito
          return prevCarrito.map((item) =>
            item.id === id
              ? { ...item, cantidad: item.cantidad - cantidad }
              : item
          );
        } /* else {
          // Si la cantidad es menor o igual, eliminamos el producto del carrito
          return prevCarrito.filter((item) => item.id !== id);
        } */
      }
      return prevCarrito;
    });
  };

  // Eliminamos el producto del carrito
  const eliminarProducto = (id) => {
    const prevCarrito = [...carrito];
    const removeElement = prevCarrito.filter((item) => item.id !== id);
    setCarrito(removeElement);
  };

  // Función para calcular el total en número a partir del carrito, sumando el precio total de cada producto
  const pasarANumero = () => {
    // Calculamos el total para cada producto en el carrito
    const cantidad = carrito.map((e) => {
      return Number.parseFloat(e.precio * e.cantidad).toFixed(2);
    });
    // Convertimos los valores a números y sumamos el total
    const quantity = cantidad.map((e) => Number(e));
    return quantity.reduce((total, item) => total + item, 0);
  };

  //Enviar el pedido a Firestore
  const enviarPedido = () => {
    try {
      //Enviar el pedido a la DB pedidos
      const pedidosRef = collection(db, "pedidos");
      addDoc(pedidosRef, { pedidos: carrito });
    } catch (error) {
      console.log(error);
    }
  };

  //Recuperar pedidos Firestore
  const recuperarPedidos = async () => {
    try {
      const snapShot = await getDocs(collection(db, "pedidos"));
      const datosProductos = snapShot.docs.map((doc) => doc.data());
      const id = snapShot.docs.map((doc) => doc.id);
      setPedidos(datosProductos);
      setIDs(id);
    } catch (error) {
      console.log(error);
    }
  };

  // Proveemos el contexto a los componentes hijos
  return (
    <AppContext.Provider
      value={{
        productos,
        setProductos,
        carrito,
        setCarrito,
        agregarCarrito,
        cantidad,
        setCantidad,
        añadirProducto,
        quitarProducto,
        elementosCarrito,
        pasarANumero,
        eliminarProducto,
        enviarPedido,
        recuperarPedidos,
        pedidos,
        ids,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
