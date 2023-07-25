import NavBar from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./index.css";
import Footer from "./Components/Footer";
import Contactus from "./Pages/Contactus/Contactus";
import Career from "./Pages/Career/Career";

function App() {
  return (
    <div className="app">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/pricing" element={<Pricing />}></Route> */}
          <Route path="contactUs" element={<Contactus />}></Route>
          <Route path="career" element={<Career />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
