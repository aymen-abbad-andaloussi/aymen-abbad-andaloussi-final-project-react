import { Link } from "react-router-dom";

export default function PageError() {
  return (
    <div className="flex flex-col gap-20 items-center py-35 ">
        <h1 className="text-red-600 text-9xl font-semibold ">404 Error</h1>
        <p className="text-4xl font-medium ">This page is not Found !</p>
        <Link to={"/"} className="text-xl bg-yellow-400 px-20 py-4 rounded-3xl hover:bg-amber-500 ">
            Go Home
        </Link>
    </div>
  )
}
