import { useState, useEffect } from "react";
import ApiHombres from "../../Api/ApiHombres";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const ItemList = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    ApiHombres().then((res) => setProductos(res.productosMasculinos));
  }, []);

  const [camisas, setCamisas] = useState([]);
  useEffect(() => {
    ApiHombres().then((res) => setCamisas(res.productosMasculinos.camisas));
  }, []);

  const [pantalones, setPantalones] = useState([]);
  useEffect(() => {
    ApiHombres().then((res) =>
      setPantalones(res.productosMasculinos.pantalones)
    );
  }, []);

  const [zapatos, setZapatos] = useState([]);
  useEffect(() => {
    ApiHombres().then((res) => setZapatos(res.productosMasculinos.zapatos));
  }, []);

  return (
    <>
      {productos.length === 0 ? (
        <h1 className=" h-screen bg-black text-5xl text-center m-0 p-0 text-yellow-400 shadow-lg shadow-yellow-400 sm:text-7xl">
          Loading...
        </h1>
      ) : (
        <ItemListContainer
          camisas={camisas}
          pantalones={pantalones}
          zapatos={zapatos}
        />
      )}
    </>
  );
};

export default ItemList;
