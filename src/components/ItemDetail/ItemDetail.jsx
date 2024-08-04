import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IMG1 from "../../assets/camisasHombres/camisablanca.png";
import IMG2 from "../../assets/camisasHombres/camisarayada.png";
import IMG3 from "../../assets/camisasHombres/camisalinoazul.png";
import IMG4 from "../../assets/camisasHombres/camisamezclilla.png";
import IMG5 from "../../assets/camisasHombres/camisapolonegra.png";
import IMG6 from "../../assets/pantalonesHombres/pantalónchinobeige.png";
import IMG7 from "../../assets/pantalonesHombres/jeansslimfitoscuros.png";
import IMG8 from "../../assets/pantalonesHombres/pantalóncargoverde.png";
import IMG9 from "../../assets/pantalonesHombres/pantalóndevestirgris.png";
import IMG10 from "../../assets/pantalonesHombres/shortsdeportivosnegros.png";
import IMG11 from "../../assets/zapatosHombres/zapatosdevestirnegros.png";
import IMG12 from "../../assets/zapatosHombres/zapatillasdeportivasblancas.png";
import IMG13 from "../../assets/zapatosHombres/botasdecueromarrón.png";
import IMG14 from "../../assets/zapatosHombres/mocasinesclásicos.png";
import IMG15 from "../../assets/zapatosHombres/sandaliasdeportivas.png";
import { AppContext } from "../AppContext/AppContext";

const ItemDetail = () => {
  const {productos} = useContext(AppContext)
  const { id } = useParams();

  const [item, setItem] = useState();

  useEffect(() => {
    setItem(productos.find((e) => e.id === parseInt(id)))
  }, [id, productos]);
  console.log(IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9, IMG10, IMG11, IMG12, IMG13, IMG14, IMG15)

  return (
    <>
      {item && (
        <div
          key={item.id}
          className="divContainer w-full h-screen text-white bg-black pt-8"
        >
          <div className=" flex flex-wrap">
            <div className="w-64 h-auto rounded-lg shadow-lg shadow-yellow-400 p-4 mx-auto m-4">
              <img src={item.imagen} className="h-44 m-auto bg-black"></img>
              <h1 className="text-yellow-400 my-2">U$D {item.precio}</h1>
              <p className="text-yellow-400 h-20 my-2">{item.descripcion}</p>
              <button className="text-yellow-400 my-2 rounded-lg shadow-lg shadow-yellow-400 p-2">
                add to Car
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
