import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Sale from "./pages/Sale";
import Features from "./pages/Features";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageError from "./pages/PageError";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<PageError />} />
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Sale" element={<Sale />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
