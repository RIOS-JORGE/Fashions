import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemDetail({ productos }) {
  const { id } = useParams();
  const [productoSeleccionado, setProductoSeleccionado] = useState({});
  useEffect(
    () => setProductoSeleccionado(productos.find((e) => e.id === parseInt(id))),
    []
  );

  return (
    <>
      <div className="divContainer w-full h-screen text-white bg-black pt-8">
        <div className=" flex flex-wrap">
          <div
            key={productoSeleccionado.id}
            className="w-64 h-auto rounded-lg shadow-lg shadow-yellow-400 p-4 mx-auto m-4"
          >
            <img
              src={productoSeleccionado.imagen}
              className="h-44 m-auto bg-black"
            ></img>
            <h1 className="text-yellow-400 my-2">
              U$D {productoSeleccionado.precio}
            </h1>
            <p className="text-yellow-400 h-20 my-2">
              {productoSeleccionado.descripcion}
            </p>
            <button className="text-yellow-400 my-2 rounded-lg shadow-lg shadow-yellow-400 p-2">
              add to Car
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
