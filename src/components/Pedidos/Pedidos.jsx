import React, { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";

const Pedidos = () => {
  const { recuperarPedidos, pedidos, ids } = useContext(AppContext);


  return (
    <div className=" h-max">
      <button
        className="text-yellow-400 text-2xl m-5 p-2 rounded-lg shadow-lg shadow-yellow-400"
        type="button"
        onClick={recuperarPedidos}
      >
        Ver pedidos
      </button>
      {pedidos &&
        pedidos.map((e, index) => (
          <div
            key={index}
            className="text-yellow-400 text-sm m-5 p-2 rounded-lg shadow-lg shadow-yellow-400"
          >
            <h1 key={index} className="text-yellow-400 text-xl">PEDIDO ID : {ids[index]}</h1>
            {e.pedidos.map((e) => (
              <div key={e.id}>
                <p className="text-yellow-400 text-2xl">{e.nombre}</p>
                <p className="text-yellow-400 text-2xl">
                  Cantidad : {e.cantidad}
                </p>
                <p className="text-yellow-400 text-2xl">Valor : {e.precio}</p>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Pedidos;
