import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "./components/Logo/Logo";
import NavBar from "./components/NavBar/NavBar";
import ItemList from "./components/ItemList/ItemLIst";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import NotFound from "./components/NotFound/NotFound";
import CartItem from "./components/CartItem/CartItem";
import Pedidos from "./components/Pedidos/Pedidos";
import Contactos from "./components/Contactos/Contactos";
import { AppProvider } from "./components/AppContext/AppContext";

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Logo />} />
          <Route path="/productos/man" element={<ItemList categoria="man" />} />
          <Route
            path="/productos/woman"
            element={<ItemList categoria="woman" />}
          />
          <Route
            path="/productos/childrens"
            element={<ItemList categoria="childrens" />}
          />
          <Route path="/productos/man/detail/:id" element={<ItemDetail />} />
          <Route path="/productos/woman/detail/:id" element={<ItemDetail />} />
          <Route
            path="/productos/childrens/detail/:id"
            element={<ItemDetail />}
          />
          <Route path="/productos/pedidos" element={<Pedidos />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/productos/cartItems" element={<CartItem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
