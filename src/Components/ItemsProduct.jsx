import { FaSearch } from "react-icons/fa";
import { products } from "./Products";
import { useState } from "react";

export default function ItemsProduct() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div className="w-full flex justify-center my-20">
      <div className="flex flex-col gap-10 w-[16vw]">
        <div className="w-fit flex flex-col gap-2 ">
          <h1 className="text-lg font-extrabold">Categories</h1>
          <p className=" text-black/55 hover:text-red-700/80 cursor-pointer">
            Best Seller (8 items)
          </p>
          <p className=" text-black/55 hover:text-red-700/80 cursor-pointer">
            Featured (8 items)
          </p>
          <p className=" text-black/55 hover:text-red-700/80 cursor-pointer">
            Men (8 items)
          </p>
          <p className=" text-black/55 hover:text-red-700/80 cursor-pointer">
            Women (8 items)
          </p>
        </div>
        <div className="w-fit flex flex-col gap-2">
          <h1 className="text-lg font-extrabold">color</h1>
          <div className="w-fit flex gap-2.5 text-black/55 hover:text-red-700/80 cursor-pointer">
            <input type="checkbox" id="black" className="" />
            <label htmlFor="black" className="cursor-pointer">
              Black
            </label>
          </div>
          <div className="w-fit flex gap-2.5 text-black/55 hover:text-red-700/80 cursor-pointer">
            <input type="checkbox" id="gray" className="" />
            <label htmlFor="gray" className="cursor-pointer">
              Gray
            </label>
          </div>
          <div className="w-fit flex gap-2.5 text-black/55 hover:text-red-700/80 cursor-pointer">
            <input type="checkbox" id="red" className="" />
            <label htmlFor="red" className="cursor-pointer">
              Red
            </label>
          </div>
        </div>
        <div className="w-fit flex flex-col gap-2">
          <h1 className="text-lg font-extrabold">Price</h1>
          <div className="w-fit flex gap-2.5 text-black/55 hover:text-red-700/80 cursor-pointer">
            <input type="checkbox" id="low" className="" />
            <label htmlFor="low" className="cursor-pointer">
              0-20
            </label>
          </div>
          <div className="w-fit flex gap-2.5 text-black/55 hover:text-red-700/80 cursor-pointer">
            <input type="checkbox" id="hight" className="" />
            <label htmlFor="hight" className="cursor-pointer">
              20-40
            </label>
          </div>
        </div>
        <div className="w-fit flex flex-col gap-2">
          <h1 className="text-lg font-extrabold">Size</h1>
          <div className="w-fit flex gap-2.5 text-black/55 hover:text-red-700/80 cursor-pointer">
            <input type="checkbox" id="l" className="" />
            <label htmlFor="l" className="cursor-pointer">
              L
            </label>
          </div>
          <div className="w-fit flex gap-2.5 text-black/55 hover:text-red-700/80 cursor-pointer">
            <input type="checkbox" id="m" className="" />
            <label htmlFor="m" className="cursor-pointer">
              M
            </label>
          </div>
          <div className="w-fit flex gap-2.5 text-black/55 hover:text-red-700/80 cursor-pointer">
            <input type="checkbox" id="s" className="" />
            <label htmlFor="s" className="cursor-pointer">
              S
            </label>
          </div>
          <div className="w-fit flex gap-2.5 text-black/55 hover:text-red-700/80 cursor-pointer">
            <input type="checkbox" id="xl" className="" />
            <label htmlFor="xl" className="cursor-pointer">
              XL
            </label>
          </div>
        </div>
        <div className="flex items-center py-2 px-4 border w-fit border-black/15">
          <input
            type="text"
            className="text-black/70 w-[11vw] outline-0 h-10"
            placeholder="Search..."
          />
          <FaSearch className="text-black/70 size-3" />
        </div>
      </div>
      <div className="w-[50vw] ">
        <div className="flex justify-between items-center">
          <div className="flex gap-5">
            <select
              name=""
              id=""
              className="outline-0 border border-black/15 px-3 py-2 w-[12vw] text-black/50 text-sm"
            >
              <option value="" className="text-black/50">
                Alphabetically, A-Z
              </option>
              <option value="" className="text-black/50">
                Featured
              </option>
              <option value="" className="text-black/50">
                Best Selling
              </option>
              <option value="" className="text-black/50">
                Alphabetically, Z-A
              </option>
              <option value="" className="text-black/50">
                Price, Low to Height
              </option>
              <option value="" className="text-black/50">
                Price, Hight to Low
              </option>
              <option value="" className="text-black/50">
                Date, New to Old
              </option>
              <option value="" className="text-black/50">
                Date, Old to New
              </option>
            </select>
            <select
              name=""
              id=""
              className="outline-0 border border-black/15 px-3 py-2 text-black/50 text-sm w-[12vw]"
            >
              <option value="" className="text-black/50">
                10
              </option>
              <option value="" className="text-black/50">
                20
              </option>
              <option value="" className="text-black/50">
                30
              </option>
              <option value="" className="text-black/50">
                All
              </option>
            </select>
          </div>
          <p className="text-sm text-black/50">Showing 1 to 6 of 8 items</p>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 w-full h-[100vh] mt-10 gap-8">
          {currentProducts.map((product) => (
            <div key={product.id} className="w-full h-full relative divAddCard">
              <div className="w-full h-[80%]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[100%] h-[100%]"
                />
              </div>
              <div className="hover:bg-black/20 w-full h-[80%] absolute top-0 left-0 transition-all"></div>
              <button className="text-lg p-2 w-45 bg-gray-950 rounded-full text-white absolute bottom-30 transition-all left-1/2 transform -translate-x-1/2 buttonAddCard cursor-pointer hover:bg-red-700">
                ADD TO CART
              </button>
              <div className="w-full h-[20%] pt-3">
                <p className="text-black/70 ">{product.name}</p>
                <p className="text-black/70">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => setCurrentPage(1)}
            className={`px-4 py-2 rounded-full cursor-pointer ${
              currentPage === 1
                ? "bg-gray-800 text-white"
                : "bg-white border border-black/10 hover:bg-gray-800 hover:text-white"
            }`}
          >
            1
          </button>

          <button
            onClick={() => setCurrentPage(2)}
            className={`px-4 py-2 rounded-full cursor-pointer ${
              currentPage === 2
                ? "bg-gray-800 text-white"
                : "bg-white border border-black/10 hover:bg-gray-800 hover:text-white"
            }`}
          >
            2
          </button>
        </div>
      </div>
    </div>
  );
}
