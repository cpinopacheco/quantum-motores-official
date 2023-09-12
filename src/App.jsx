import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import WspButton from "./components/wspButton/WspButton";

function App() {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
      {/* Boton de Whatsapp */}
      <WspButton></WspButton>
    </>
  );
}

export default App;
