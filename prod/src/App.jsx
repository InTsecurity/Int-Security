import NavBar from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./index.css";
import Footer from "./Components/Footer";
import Contactus from "./Pages/Contactus/Contactus";
import Career from "./Pages/Career/Career";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

function App() {
  const overscrollPluginOptions = {
    enable: true,
    effect: "bounce",
    damping: 0.15,
    maxOverscroll: 150,
    glowColor: "#fff",
  };
  Scrollbar.use(OverscrollPlugin);
  const scrollbar = Scrollbar.init(document.body, {
    damping: 0.07,
    plugins: {
      overscroll: { ...overscrollPluginOptions },
    },
  });
  Scrollbar.initAll();
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
