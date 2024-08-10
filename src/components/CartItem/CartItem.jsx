import React, { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
import CheckoutButton from "../CheckoutButton/CheckoutButton";

const CartIten = () => {
  const { carrito, añadirProducto, quitarProducto, eliminarProducto } =
    useContext(AppContext);

  return (
    <>
      {carrito.length === 0 ? (
        <div className=" flex justify-center items-center vh-developer">
          <h1 className="text-yellow-400 my-2 text-4xl h-10 ">Carrito Vacio</h1>
        </div>
      ) : (
        <div className=" flex flex-col items-center">
          <CheckoutButton />
          <div className=" flex flex-wrap">
            {carrito.map((e) => (
              <div
                key={e.id}
                className=" w-64 h-auto rounded-lg shadow-lg shadow-yellow-400 pt-1 p-4 m-2"
              >
                <button
                  onClick={() => eliminarProducto(e.id)}
                  className="  text-yellow-400 w-10 text-xl rounded-lg shadow-lg shadow-yellow-400 m-2"
                  type="button"
                >
                  x
                </button>
                <img src={e.imagen} className="h-44 m-auto bg-black"></img>
                <h1 className="text-yellow-400 my-2">U$D {e.precio}</h1>
                <h1 className="text-yellow-400 my-2">
                  Total U$D{" "}
                  {Number.parseFloat(e.precio * e.cantidad).toFixed(2)}
                </h1>
                <p className="text-yellow-400 h-20 my-2">{e.descripcion}</p>
                <div className=" flex items-stretch justify-evenly">
                  <button
                    onClick={() => quitarProducto(e.id)}
                    className="  text-yellow-400 w-10 text-4xl rounded-lg shadow-lg shadow-yellow-400"
                    type="button"
                  >
                    -
                  </button>
                  <p className=" content-center text-yellow-400 w-10 text-center rounded-lg shadow-lg shadow-yellow-400">
                    {e.cantidad}
                  </p>
                  <button
                    onClick={() => añadirProducto(e.id)}
                    className=" text-yellow-400 w-10 text-4xl rounded-lg shadow-lg shadow-yellow-400"
                    type="button"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CartIten;
