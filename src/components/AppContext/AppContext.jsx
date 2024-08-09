import { createContext, useEffect, useState } from "react";
import ApiHombres from "../../Api/ApiHombres";
import { db } from "../../Firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState(
    () => JSON.parse(localStorage.getItem("storage")) || []
  );
  const [cantidad, setCantidad] = useState(1);
  const [elementosCarrito, setElementosCarrito] = useState(0);

  useEffect(() => {
    ApiHombres().then((e) => setProductos(e.productosMasculinos));
  }, []);

  useEffect(() => {
    localStorage.setItem("storage", JSON.stringify(carrito));
  }, [carrito]);

  useEffect(() => {
    setElementosCarrito(
      carrito.reduce((total, item) => total + item.cantidad, 0)
    );
  }, [carrito]);

  const agregarCarrito = (id) => {
    setCarrito((prevCarrito) => {
      const productoExistente = prevCarrito.find((item) => item.id === id);
      if (productoExistente) {
        return prevCarrito.map((item) =>
          item.id === id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      } else {
        const producto = productos.find((e) => e.id === id);
        return [...prevCarrito, { ...producto, cantidad }];
      }
    });
  };

  const añadirProducto = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + cantidad } : item
      )
    );
  };

  const quitarProducto = (id) => {
    setCarrito((prevCarrito) => {
      const producto = prevCarrito.find((item) => item.id === id);
      if (producto) {
        if (producto.cantidad > cantidad) {
          return prevCarrito.map((item) =>
            item.id === id
              ? { ...item, cantidad: item.cantidad - cantidad }
              : item
          );
        } else {
          return prevCarrito.filter((item) => item.id !== id);
        }
      }
      return prevCarrito;
    });
  };

  const pasarANumero = () => {
    const cantidad = carrito.map((e) => {
      return Number.parseFloat(e.precio * e.cantidad).toFixed(2);
    });
    const quantity = cantidad.map((e) => Number(e));

    return quantity.reduce((total, item) => total + item, 0);
  };

  /*
  const snapShot = collection(db, "productMan");
  getDocs(snapShot).then((e) => console.log(e.docs[0].data()));
*/
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
