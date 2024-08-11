import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { useContext, useState } from "react";
import { AppContext } from "../AppContext/AppContext";

const CheckoutButton = () => {
  const {
    carrito,
    setCarrito,
    elementosCarrito,
    pasarANumero,
    enviarPedido,
    recuperarPedidos,
  } = useContext(AppContext);

  const [preferenceId, setPreferenceID] = useState(null);

  initMercadoPago(import.meta.env.VITE_APP_PUBLICKEY);

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "https://servidor-mp.vercel.app/create_preference",
        {
          title: "Indumentaria",
          quantity: elementosCarrito,
          price: pasarANumero(),
        }
      );
      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };
  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceID(id);
    }
    enviarPedido();
  };

  const customization = {
    visual: {
      buttonBackground: "black",
      borderRadius: "6px",
    },
    checkout: {
      theme: {
        elementsColor: "#000000",
        headerColor: "#4287F5",
      },
    },
  };

  return (
    <div className=" bg-black">
      <button
        type="button"
        onClick={handleBuy}
        className="text-yellow-400 text-2xl m-5 p-2 rounded-lg shadow-lg shadow-yellow-400"
      >
        Checkout
        {preferenceId && (
          <Wallet
            initialization={{ preferenceId: preferenceId }}
            customization={customization}
            className=" bg-black"
          />
        )}
      </button>
    </div>
  );
};

export default CheckoutButton;
