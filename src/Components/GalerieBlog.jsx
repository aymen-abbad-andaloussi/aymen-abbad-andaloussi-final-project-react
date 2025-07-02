import { FaLongArrowAltRight, FaSearch } from "react-icons/fa";
import { products } from "./Products";
import { Link } from "react-router-dom";

export default function GalerieBlog() {
  const newProduct = products.slice(0, 5);
  return (
    <div className="flex justify-center my-15 w-full ">
      <div className="w-[60vw] flex gap-20 ">
        <div className="w-[45vw] flex flex-col gap-20 h-fit ">

              <div className="w-full h-[80vh] ">
                <Link to="/DetailBlog">
                <div className="w-full h-[80%] blogImage1 flex items-end pb-10 ">
                  <p className="bg-gray-950 text-white text-l font-light py-1 px-5 ">28 DEC,2017</p>
                </div>
                  </Link>
                <div className="flex flex-col gap-3 pt-3">
                  <p className="text-3xl ">
                    Black Friday Guide: Best Sales & Discount Codes
                  </p>
                  <p className="text-sm text-black/40 ">
                    by fashe-theme Admin | <span className="hover:text-red-800 cursor-pointer text-base text-black/70">crafts, street style</span>| 1 Comments
                  </p>
                  <p className="text-black/40 text-base ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam sed turpis sed lorem dignissim vulputate nec cursus
                    ante. Nunc sit...
                  </p>
                  <Link to="/DetailBlog">
                    <p className="flex items-center gap-3 text-black/60 cursor-pointer hover:text-red-800">Continue Reading <FaLongArrowAltRight /> </p>
                  </Link>
                </div>
              </div>
              <div className="w-full h-[80vh] ">
                <Link to="/DetailBlog">
                <div className="w-full h-[80%] blogImage2 flex items-end pb-10 ">
                  <p className="bg-gray-950 text-white text-l font-light py-1 px-5 ">28 DEC,2017</p>
                </div>
                  </Link>
                <div className="flex flex-col gap-3 pt-3">
                  <p className="text-3xl ">
                    The White Sneakers Nearly Every Fashion Girls Own
                  </p>
                  <p className="text-sm text-black/40 ">
                    by fashe-theme Admin | <span className="hover:text-red-800 cursor-pointer text-base text-black/70">crafts, street style</span>| 1 Comments
                  </p>
                  <p className="text-black/40 text-base ">
                    Duis ut velit gravida nibh bibendum commodo. Sus-pendisse
                    pellentesque mattis augue id euismod. Inter-dum et...
                  </p>
                  <Link to="/DetailBlog">
                    <p className="flex items-center gap-3 text-black/60 cursor-pointer hover:text-red-800">Continue Reading <FaLongArrowAltRight /> </p>
                  </Link>
                </div>
              </div>
              <div className="w-full h-[80vh] ">
                <Link to="/DetailBlog">
                <div className="w-full h-[80%] blogImage3 flex items-end pb-10 ">
                  <p className="bg-gray-950 text-white text-l font-light py-1 px-5 ">28 DEC,2017</p>
                </div>
                  </Link>
                <div className="flex flex-col gap-3 pt-3">
                  <p className="text-3xl ">
                    New York SS 2018 Street Style: By Annina Mislin
                  </p>
                  <p className="text-sm text-black/40 ">
                    by fashe-theme Admin | <span className="hover:text-red-800 cursor-pointer text-base text-black/70">crafts, street style</span>| 1 Comments
                  </p>
                  <p className="text-black/40 text-base ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam sed turpis sed lorem dignissim vulputate nec cursus
                    ante. Nunc sit...
                  </p>
                  <Link to="/DetailBlog">
                    <p className="flex items-center gap-3 text-black/60 cursor-pointer hover:text-red-800">Continue Reading <FaLongArrowAltRight /> </p>
                  </Link>
                </div>
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
