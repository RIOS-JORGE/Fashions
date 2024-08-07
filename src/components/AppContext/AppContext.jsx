import { createContext, useEffect, useState } from "react";
import ApiHombres from "../../Api/ApiHombres";
import { db } from "../../Firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    ApiHombres().then((e) => setProductos(e.productosMasculinos));
  }, []);

  const storage = JSON.parse(localStorage.getItem("storage")) || [];

  const [carrito, setCarrito] = useState(storage);
  const [cantidad, setCantidad] = useState(1);
  const carritoCompras = [...carrito];
  const [elementosCarrito, setElementosCarrito] = useState();

  const agregarCarrito = (id) => {
    const filtrarProducto = productos.find((e) => e.id === id);

    if (!carritoCompras.find((e) => e.id === id)) {
      filtrarProducto.cantidad += cantidad;
      carritoCompras.push(filtrarProducto);
      setCarrito(carritoCompras);
    } else {
      filtrarProducto.cantidad += cantidad;
      setCarrito(carritoCompras);
    }
  };

  const añadirProducto = (id) => {
    const carritoCompras = [...carrito];
    const filtrarProducto = productos.find((e) => e.id === id);
    filtrarProducto.cantidad += cantidad;
    setCarrito(carritoCompras);
  };

  const quitarProducto = (id) => {
    const filtrarProducto = productos.find((e) => e.id === id);

    if (filtrarProducto.cantidad > 0) {
      const carritoCompras = [...carrito];
      filtrarProducto.cantidad -= cantidad;
      setCarrito(carritoCompras);
    }
  };

  useEffect(() => {
    localStorage.setItem("storage", JSON.stringify(carrito));
  }, [carrito]);

  useEffect(
    () =>
      setElementosCarrito(
        carritoCompras.map((e) => e.cantidad).reduce((a, b) => a + b, 0)
      ),
    [carritoCompras]
  );
  /*
  const snapShot = collection(db, "productMan")
  getDocs(snapShot).then((e)=>console.log(
    e.docs[0].data())
  )
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
