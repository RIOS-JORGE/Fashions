import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./components/Logo/Logo";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <Logo />
    <ItemListContainer mensaje="Bienvenido"/>
  </React.StrictMode>
);
