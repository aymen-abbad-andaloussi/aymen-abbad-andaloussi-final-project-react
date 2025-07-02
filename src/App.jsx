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
import DetailBlog from "./pages/DetailBlog";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import CreatAccount from "./pages/CreatAccount";
import Button from "./Button";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";

function App() {
  return (
    <>
    <Nav />
      <Routes>
        <Route path="/*" element={<PageError />} />
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/CreatAccount" element={<CreatAccount />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Sale" element={<Sale />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/DetailBlog" element={<DetailBlog />} />
      </Routes>
      <Footer />
      <Button />
    </>
  );
}

export default App;
