import { Link } from "react-router-dom";

const ItemListContainer = ({ productos }) => {
  return (
    <>
      <div className="divContainer w-full text-white bg-black pt-8">
        <div className=" flex flex-wrap">
          {productos.map((e, i) => (
            <div
              key={i}
              className="w-64 h-auto rounded-lg shadow-lg shadow-yellow-400 p-4 mx-auto m-4"
            >
              <img src={e.imagen} className="h-44 m-auto bg-black"></img>
              <h1 className="text-yellow-400 my-2">U$D {e.precio}</h1>
              <p className="text-yellow-400 h-20 my-2">{e.descripcion}</p>
              <Link to={`/detail/${e.id}`}>
                <button className="text-yellow-400 my-2 rounded-lg shadow-lg shadow-yellow-400 p-2 block">
                  Detail
                </button>
              </Link>

              <button className="text-yellow-400 my-2 rounded-lg shadow-lg shadow-yellow-400 p-2">
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
