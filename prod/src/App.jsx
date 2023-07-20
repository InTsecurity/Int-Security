import NavBar from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Components/Home";

function App() {
  return (
    <div className="app">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/pricing" element={<Pricing />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
