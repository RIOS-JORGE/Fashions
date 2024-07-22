import ItemListContainer from "../ItemListContainer/ItemListContainer";

const ItemList = ({ productos, categoria }) => {
  return (
    <>
      {productos.length === 0 ? (
        <div className=" flex flex-col justify-center items-center h-screen bg-black">
          <h1 className=" text-5xl text-yellow-400  z-10 shadow-lg shadow-yellow-400 mb-9 sm:text-7xl">
            Loading ...
          </h1>
        </div>
      ) : (
        <ItemListContainer productos={productos} categoria={categoria} />
      )}
    </>
  );
};

export default ItemList;
