const ItemListContainer = ({camisas, pantalones, zapatos}) => {

  return (
    <>
      <div className="divContainer w-full text-white bg-black pt-8">
        <div className=" flex flex-wrap">
          {camisas.map((e, i) => (
            <div
              key={i}
              className="w-64 h-96 rounded-lg shadow-lg shadow-yellow-400 p-4 mx-auto m-4"
            >
              <img src={e.imagen} className="h-44 m-auto bg-black"></img>
              <h1 className="text-yellow-400 my-2">U$D {e.precio}</h1>
              <p className="text-yellow-400 h-20 my-2">{e.descripcion}</p>
              <button className="text-yellow-400 my-2 rounded-lg shadow-lg shadow-yellow-400 p-2">
                add to Car
              </button>
            </div>
          ))}
          {pantalones.map((e, i) => (
            <div
              key={i}
              className="w-64 h-96 rounded-lg shadow-lg shadow-yellow-400 p-4 mx-auto m-4"
            >
              <img src={e.imagen} className="h-44 m-auto bg-black"></img>
              <h1 className="text-yellow-400 my-2">U$D {e.precio}</h1>
              <p className="text-yellow-400 h-20 my-2">{e.descripcion}</p>
              <button className="text-yellow-400 my-2 rounded-lg shadow-lg shadow-yellow-400 p-2">
                add to Car
              </button>
            </div>
          ))}
          {zapatos.map((e, i) => (
            <div
              key={i}
              className="w-64 h-96 rounded-lg shadow-lg shadow-yellow-400 p-4 mx-auto m-4"
            >
              <img src={e.imagen} className="h-44 m-auto bg-black"></img>
              <h1 className="text-yellow-400 my-2">U$D {e.precio}</h1>
              <p className="text-yellow-400 h-20 my-2">{e.descripcion}</p>
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
