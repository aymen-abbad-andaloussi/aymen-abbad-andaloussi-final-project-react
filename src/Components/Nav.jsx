import { Link } from "react-router-dom"
import { logoNav } from "../assets/imagesFile/Images"
import Home from "../pages/Home"
import { CgProfile } from "react-icons/cg"
import { RiShoppingBagLine } from "react-icons/ri"

export default function Nav() {
  return (
    <nav className="z-10 w-[100vw] h-[10vh] flex items-center justify-between px-15 fixed top-0 left-0 bg-white shadow ">
      <Link to={"/"} className="w-fit h-fit flex items-center">
        <img src={logoNav} alt="logo image nav" className="" />
      </Link>
      <div className="flex items-center gap-10">
        <Link to="/">Home</Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/Sale">Sale</Link>
        <Link to="/Features">Features</Link>
        <Link to="/Blog">Blog</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </div>
      <div className="flex items-center gap-8">
        <CgProfile className="text-3xl text-gray-400 " />
        <div className="h-6 w-[2px] bg-gray-300 "></div>
        <RiShoppingBagLine className="text-3xl text-gray-400 " />
      </div>
    </nav>
  )
}
