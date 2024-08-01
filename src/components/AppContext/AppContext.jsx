import { createContext, useEffect, useState } from "react";
import ApiHombres from "../../Api/ApiHombres";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    ApiHombres().then((e) => setProductos(e.productosMasculinos));
  }, []);

  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = (el) => {
    const carritoCompras = [...carrito];
    const filtrarProducto = productos.find((e) => e.id === el);
    carritoCompras.push(filtrarProducto);
    setCarrito(carritoCompras);
  };

  return (
    <AppContext.Provider
      value={{
        productos,
        setProductos,
        carrito,
        setCarrito,
        agregarCarrito,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
