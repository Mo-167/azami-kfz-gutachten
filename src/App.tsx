import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Datenschutz from "./pages/Datenschutz";
import Impressum from "./pages/Impressum";
import AGB from "./pages/AGB";
import UeberUns from "./pages/UeberUns";
import Zertifikate from "./pages/Zertifikate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/agb" element={<AGB />} />
        <Route path="/ueber-uns" element={<UeberUns />} />
        <Route path="/zertifikate" element={<Zertifikate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
