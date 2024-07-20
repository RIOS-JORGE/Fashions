import React from "react";
import { useState, useEffect } from "react";
import Logo from "./components/Logo/Logo";
import NavBar from "./components/NavBar/NavBar";
import ApiHombres from "./Api/ApiHombres";
import ItemList from "./components/ItemList/ItemLIst";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
