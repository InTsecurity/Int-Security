import NavBar from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./index.css";
import Footer from "./Components/Footer";
import Contactus from "./Pages/Contactus/Contactus";
import Career from "./Pages/Career/Career";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
import Services from "./Pages/Services/Services";

function App() {
  const overscrollPluginOptions = {
    enable: true,
    effect: "bounce",
    damping: 0.15,
    maxOverscroll: 150,
    glowColor: "#fff",
  };
  Scrollbar.use(OverscrollPlugin);
  Scrollbar.init(document.body, {
    damping: 0.07,
    plugins: {
      overscroll: { ...overscrollPluginOptions },
    },
  });
  Scrollbar.initAll();
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="contactUs" element={<Contactus />}></Route>
          <Route path="careers" element={<Career />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
