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
import IMG16 from "../../assets/productosMujeres/camisa_lino_blanca.jpg";
import IMG17 from "../../assets/productosMujeres/blusa_seda_estampada.png";
import IMG18 from "../../assets/productosMujeres/remera_algodon_oversize.png";
import IMG19 from "../../assets/productosMujeres/vestido_corto_verano.jpg";
import IMG20 from "../../assets/productosMujeres/vestido_largo_fiesta.png";
import IMG21 from "../../assets/productosMujeres/vestido_midi_punto.png";
import IMG22 from "../../assets/productosMujeres/falda_midi.png";
import IMG23 from "../../assets/productosMujeres/falda_corta_plisada.png";
import IMG24 from "../../assets/productosMujeres/jeans_skinny.png";
import IMG25 from "../../assets/productosMujeres/pantalon_palazzo_estampado.png";
import IMG26 from "../../assets/productosMujeres/leggings_deportivos.png";
import IMG27 from "../../assets/productosMujeres/zapatillas_deportivas_blancas.png";
import IMG28 from "../../assets/productosMujeres/botas_altas_cuero.png";
import IMG29 from "../../assets/productosMujeres/sandalias_tacon.png";
import IMG30 from "../../assets/productosMujeres/botines_tacon_bajo.png";
import { AppContext } from "../AppContext/AppContext";

const ItemDetail = () => {
  console.log(IMG16, IMG17, IMG18, IMG19, IMG20, IMG21, IMG22, IMG23, IMG24, IMG25, IMG26, IMG27, IMG28, IMG29, IMG30);
  const {productos, agregarCarrito} = useContext(AppContext)
  const { id } = useParams();

  const [item, setItem] = useState();

  useEffect(() => {
    setItem(productos.find((e) => e.id === parseInt(id)))
  }, [id, productos]);

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
              <button onClick={() => agregarCarrito(item.id)} className="text-yellow-400 my-2 rounded-lg shadow-lg shadow-yellow-400 p-2">
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
