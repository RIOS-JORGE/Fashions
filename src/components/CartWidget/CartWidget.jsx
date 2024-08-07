import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";

const CartWidget = () => {
  const { elementosCarrito } = useContext(AppContext);
  return (
    <div className=" flex flex-wrap">
      <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
      <span>{elementosCarrito}</span>
    </div>
  );
};

export default CartWidget;
