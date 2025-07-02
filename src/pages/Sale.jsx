import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Sale() {
  return (
    <div className="flex flex-col justify-between h-[50vh] ">
        <div className="">
                  <div className="mt-[13vh] flex text-black/60 text-sm items-center w-fit pl-12 gap-1">
          <Link className="hover:text-red-700 transition" to="/">Home</Link>
          <FaAngleRight />
          <Link className="hover:text-red-700 transition" to="/Sale">Search</Link>
        </div>
        <h1 className="pl-100 text-4xl pt-10 ">Search</h1>
        </div>
    </div>
  )
}
