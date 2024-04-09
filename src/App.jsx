import "./index.css";
import Navbar from "./Components/Header/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, Apousada, Acomodacoes, AVila } from "./Components/Pages";
import Footer from "./Components/Concept/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apousada" element={<Apousada />} />
          <Route path="/acomodacoes" element={<Acomodacoes />} />
          <Route path="/avila" element={<AVila />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
