import Logo from "./components/Logo/Logo";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <Logo />
      <ItemListContainer mensaje="Bienvenido"/>
    </>
  );
};

export default App;