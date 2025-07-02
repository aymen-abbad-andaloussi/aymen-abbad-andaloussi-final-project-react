import { Link } from "react-router-dom";
import Register from "./Register";
import Signin from "../Components/Signin";
import { FaAngleRight } from "react-icons/fa";

export default function Profile() {
  return (
    <>
      <div className="mt-[13vh] mb-10 flex text-black/60 text-sm items-center w-fit pl-12 gap-1">
        <Link className="hover:text-red-700 transition" to="/">
          Home
        </Link>
        <FaAngleRight />
        <Link className="hover:text-red-700 transition" to="/Profile">
          Account
        </Link>
      </div>
      <div className="w-full h-fit flex gap-5 justify-center mb-10 ">
        <Register />
        <Signin />
      </div>
    </>
  );
}
