import { useContext } from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Loader from "../Loader/Loader";
import { AppContext } from "../AppContext/AppContext";

const ItemList = ({categoria}) => {
  const {productos} = useContext(AppContext)
  return (
    <>
      {productos.length === 0 ? (
        <Loader />
      ) : (
        <ItemListContainer categoria={categoria} />
      )}
    </>
  );
};

export default ItemList;
