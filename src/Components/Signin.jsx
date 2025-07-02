import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="w-[30vw] border p-5 flex flex-col gap-2 border-black/15 ">
      <h1 className="text-3xl ">Returning Customer</h1>
      <h2 className="text-black/50 font-bold">I am a returning customer</h2>
      <div className="w-full h-fit ">
        <form action="" className="flex flex-col gap-3">
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
            <button className="w-fit bg-black text-white font-light text-sm py-2.5 px-8 cursor-pointer ">
              SIGN IN
            </button>
            <span className="text-sm text-black/40">or</span>
            <Link to="/" className="text-black/60 hover:text-red-700">
              Return to Store
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
