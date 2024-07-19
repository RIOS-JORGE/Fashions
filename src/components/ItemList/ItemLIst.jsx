import ItemListContainer from "../ItemListContainer/ItemListContainer";

const ItemList = ({ productos }) => {
  return (
    <>
      {productos.length === 0 ? (
        <h1 className=" h-screen bg-black text-5xl text-center m-0 p-0 text-yellow-400 shadow-lg shadow-yellow-400 sm:text-7xl">
          Loading...
        </h1>
      ) : (
        <ItemListContainer productos={productos} />
      )}
    </>
  );
};

export default ItemList;
