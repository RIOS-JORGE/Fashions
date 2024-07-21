import React from "react";
import { useState, useEffect } from "react";
import ApiHombres from "./Api/ApiHombres";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "./components/Logo/Logo";
import NavBar from "./components/NavBar/NavBar";
import ItemList from "./components/ItemList/ItemLIst";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    ApiHombres().then((e) => setProductos(e.productosMasculinos));
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Logo />} />
          <Route
            path="/productos"
            element={<ItemList productos={productos} />}
          />
          <Route
            path="/detail/:id"
            element={<ItemDetail productos={productos} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
