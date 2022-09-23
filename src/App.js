//Libraries
import { Routes, Route, BrowserRouter } from "react-router-dom";

//Components
import Index from "./Components/Index";
import Products from "./Components/Products";

import Vision from "./Components/Vision";
import SobreMi from "./Components/SobreMi";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Mision from "./Components/Mision";
import Contacto from "./Components/Contacto";
import Nopage from "./Components/Nopage";

//Style
import "./App.css";
import Carrito from "./Components/Carrito";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route index element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/mision" element={<Mision />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />

            <Route path="*" element={<Nopage />} />
          </Routes>
        </BrowserRouter>

        <Footer />
      </div>
      ;
    </>
  );
}

export default App;
