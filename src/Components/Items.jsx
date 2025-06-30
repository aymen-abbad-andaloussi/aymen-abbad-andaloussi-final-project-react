import { Link } from "react-router-dom";

export default function Items() {
  return (
    <div className="flex justify-center w-full my-10 ">
      <div className="w-[60vw] h-[90vh] flex gap-[2rem] ">
        <div className="w-1/3 h-[100%] flex flex-col gap-[2rem] ">
          <Link to={"/"} className="w-full h-[60%] cardsImage1 flex items-baseline-last justify-center pb-5 ">
            <button className="cursor-pointer transition bg-white text-black text-xl px-10 py-3 hover:bg-red-700 hover:text-white font-light ">DRESSES</button>
          </Link>
          <Link to={"/"} className="w-full h-[40%] cardsImage4 flex items-baseline-last justify-center pb-5 ">
            <button className="cursor-pointer transition bg-white text-black text-xl px-10 py-3 hover:bg-red-700 hover:text-white font-light">SUNGLASSES</button>
          </Link>
        </div>
        <div className="w-1/3 h-[100%] flex flex-col gap-[2rem] ">
          <Link to={"/"} className="w-full h-[40%] cardsImage2 flex items-baseline-last justify-center pb-5 ">
            <button className="cursor-pointer transition bg-white text-black text-xl px-10 py-3 hover:bg-red-700 hover:text-white font-light">WATCHES</button>
          </Link>
          <Link to={"/"} className="w-full h-[60%] cardsImage5 flex items-baseline-last justify-center pb-5 ">
            <button className="cursor-pointer transition bg-white text-black text-xl px-10 py-3 hover:bg-red-700 hover:text-white font-light">FOOTERWEAR</button>
          </Link>
        </div>
        <div className="w-1/3 h-[100%] flex flex-col gap-[2rem] ">
          <Link to={"/"} className="w-full h-[60%] cardsImage3 flex items-baseline-last justify-center pb-5 ">
            <button className="cursor-pointer transition bg-white text-black text-xl px-10 py-3 hover:bg-red-700 hover:text-white font-light">BAGS</button>
          </Link>
          <Link to={"/"} className="w-full h-[40%] cardsImage6 flex items-baseline-last justify-center pb-5 ">
            <button className="cursor-pointer transition bg-white text-black text-xl px-10 py-3 hover:bg-red-700 hover:text-white font-light">ACCESSOIRIES</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
