import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Zones from "./pages/Zones/Zones";
import Developers from "./pages/Developers/Developers";
import Contact from "./pages/Contact Us/Contact";
import UnitDetails from "./pages/Units/UnitDetails"
import Layout from "./components/Layout/Layout";
import Units from './pages/Units/Units'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/units/:id" element={<UnitDetails/>}/>
        <Route path="/units" element={<Units />} />
        <Route path="/zones" element={<Zones />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;