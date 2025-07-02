import { FaAngleRight } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";

export default function CompCreatAccount() {
  return (
    <div className="mt-[13vh] mb-10 w-full h-fit ">
      <div className=" mb-10 flex text-black/60 text-sm items-center w-fit pl-12 gap-1">
        <Link className="hover:text-red-700 transition" to="/">
          Home
        </Link>
        <FaAngleRight />
        <Link className="hover:text-red-700 transition" to="/Profile">
          Account
        </Link>
      </div>
      <div className="w-full h-fit flex justify-center ">
        <div className="w-[50vw]  ">
          <div className="flex flex-col gap-2 pb-3">
            <h1 className="text-4xl ">Creat Account</h1>
            <h2 className=" text-lg">Your Personal Details</h2>
          </div>
          <form action="" className="flex flex-col gap-3 pl-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="font-light">
                First Name
              </label>
              <input
                placeholder="First Name"
                type="text"
                name="firstName"
                className="outline-0 border border-black/15 px-3 py-2 w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lastName" className="font-light">
                Last Name
              </label>
              <input
                placeholder="Last Name"
                type="text"
                name="lastName"
                className="outline-0 border border-black/15 px-3 py-2 w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-light">
                Email
              </label>
              <input
                placeholder="Email"
                type="email"
                name="email"
                className="outline-0 border border-black/15 px-3 py-2 w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="font-light">
                Email
              </label>
              <input
                placeholder="Password"
                name="pasword"
                type="password"
                className="outline-0 border border-black/15 px-3 py-2 w-full"
              />
              <p className="text-black/60 hover:text-red-700 cursor-pointer ">
                Forgot your password?
              </p>
            </div>
            <div className="flex items-center gap-1 pt-2">
              <button className="w-fit bg-black flex items-center gap-1 text-white font-light text-sm py-2.5 px-8 cursor-pointer ">
                <MdPerson className="text-gray-100 text-lg" /> CREATE
              </button>
              <span className="text-sm text-black/40">or</span>
              <Link to="/" className="text-black/60 hover:text-red-700">
                Return to Store
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
