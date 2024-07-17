import React from "react";
import Logo from "./components/Logo/Logo";
import NavBar from "./components/NavBar/NavBar";
import ItemList from "./components/ItemList/ItemLIst";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Logo />} />
          <Route path="/productos" element={<ItemList />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
