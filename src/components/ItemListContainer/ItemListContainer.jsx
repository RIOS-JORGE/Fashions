import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext/AppContext";

const ItemListContainer = ({categoria}) => {

  const { productos, agregarCarrito } = useContext(AppContext)

  const [filtrado, setFiltrado] = useState([]);
  useEffect(() => setFiltrado(productos), [productos]);

  const Filtrar = (name) => {
    const filtrar = productos.filter((e) =>
      e.nombre.toLowerCase().includes(name)
    );
    setFiltrado(filtrar);
  };

  const entrada = (e) => Filtrar(e.target.value);

  return (
    <>
      <div className="divContainer w-full h-full text-white bg-black pt-8 flex flex-col items-center">
        <input
          id="input"
          onChange={entrada}
          type="text"
          placeholder="Buscar Producto"
          className="text-yellow-400 bg-black p-2 m-2 rounded-lg shadow-lg shadow-yellow-400"
        />
        <div className=" flex flex-wrap">
          {filtrado.map((e) => (
            <div
              key={e.id}
              className="w-64 h-auto rounded-lg shadow-lg shadow-yellow-400 p-4 mx-auto m-4"
            >
              <img src={e.imagen} className="h-44 m-auto bg-black"></img>
              <h1 className="text-yellow-400 my-2">U$D {e.precio}</h1>
              <h2 className="text-yellow-400 text-2xl h-20 my-2">{e.nombre}</h2>
              <Link to={`/productos/${categoria}/detail/${e.id}`}>
                <button className="text-yellow-400 my-2 rounded-lg shadow-lg shadow-yellow-400 p-2 block">
                  Detail
                </button>
              </Link>

              <button
                onClick={() => agregarCarrito(e.id)}
                className="text-yellow-400 my-2 rounded-lg shadow-lg shadow-yellow-400 p-2"
              >
                add to Car
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
