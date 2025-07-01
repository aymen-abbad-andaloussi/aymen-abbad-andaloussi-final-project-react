import { FaSearch } from "react-icons/fa";
import { products } from "./Products";

export default function GalerieBlog() {
  const newProduct = products.slice(0, 5);
  return (
    <div className="flex justify-center my-15 w-full ">
      <div className="w-[60vw] flex gap-20 ">
        <div className="w-[45vw] ">
            <div className="">
                <img src="" alt="" className="" />
            </div>
        </div>
        <div className="w-[15vw] flex flex-col gap-15 ">
          <div className="flex items-center justify-between border border-black/20 px-6 py-1 rounded-full  ">
            <input
              type="text"
              placeholder="Search All Article..."
              className="text-black/60 outline-0 w-[85%] h-10 "
            />
            <FaSearch className="text-black/70 size-3" />
          </div>
          <div className="">
            <h1 className="font-extrabold text-2xl">Featured Products</h1>
            <div className="flex flex-col gap-5 mt-7">
              {newProduct.map((product) => (
                <div key={product.id} className="flex gap-5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[80px] h-auto"
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-black/60">{product.name}</h1>
                    <p className="text-black/40 text-sm">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <h1 className="font-extrabold text-2xl pb-7">Featured Products</h1>
            <button className="border border-black/20 px-5 py-1 rounded-full bg-white text-black/50 mr-2">
              crafts
            </button>
            <button className="border border-black/20 px-5 py-1 rounded-full bg-white text-black/50">
              street style
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
