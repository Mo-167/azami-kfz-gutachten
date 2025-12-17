import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Datenschutz from "./pages/Datenschutz";
import Impressum from "./pages/Impressum";
import AGB from "./pages/AGB";
import UeberUns from "./pages/UeberUns";
import Zertifikate from "./pages/Zertifikate";
import FAQ from "./pages/FAQ";
import Standorte from "./pages/Standorte";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout-Wrapper */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/zertifikate" element={<Zertifikate />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="/standorte" element={<Standorte />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
