import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="w-[30vw] border p-5 flex flex-col gap-2 border-black/15 h-fit ">
      <h1 className="text-3xl ">New Customer</h1>
      <h2 className="text-black/50 font-bold">Register Account</h2>
      <p className="text-black/50 pb-3">
        By creating an account you will be able to shop faster, be up to date on
        an order's status, and keep track of the orders you have previously
        made.
      </p>
      <Link to="/CreatAccount" className="w-fit bg-black text-white font-light text-sm py-2.5 px-8 ">CONTINUE</Link>
    </div>
  );
}
