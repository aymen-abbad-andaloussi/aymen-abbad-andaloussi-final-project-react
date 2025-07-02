import { FaAngleRight, FaLongArrowAltRight, FaSearch } from "react-icons/fa";
import { products } from "./Products";
import { Link } from "react-router-dom";
import CompContactEmailJs from "./CompContactEmailJs";
import { CgProfile } from "react-icons/cg";

export default function CompDetailBlog() {
  const newProduct = products.slice(0, 5);
  return (
    <>
      <div className="mt-[13vh] flex text-black/60 text-sm items-center w-fit pl-12 gap-1">
        <Link className="hover:text-red-700 transition" to="/">
          Home
        </Link>
        <FaAngleRight />
        <Link className="hover:text-red-700 transition" to="/Blog">
          News
        </Link>
        <FaAngleRight />
        <p className="">Black Friday Guide: Best Sales & Discount Codes</p>
      </div>

      <div className="flex justify-center my-15 w-full ">
        <div className="w-[60vw] flex gap-20 ">
          <div className="w-[45vw] flex flex-col gap-20 h-fit ">
            <div className="w-full  ">
              <div className="w-full h-[70vh] blogImage1 flex items-end pb-10 ">
                <p className="bg-gray-950 text-white text-l font-light py-1 px-5 ">
                  28 DEC,2017
                </p>
              </div>
              <div className="flex flex-col gap-3 pt-3">
                <p className="text-3xl ">
                  Black Friday Guide: Best Sales & Discount Codes
                </p>
                <p className="text-sm text-black/40 ">
                  by fashe-theme Admin |{" "}
                  <span className="hover:text-red-800 cursor-pointer text-base text-black/70">
                    crafts, street style
                  </span>
                  | 1 Comments
                </p>
                <p className="text-black/40 text-base ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc
                  sit amet tempor magna. Donec eros sem, porta eget leo et,
                  varius eleifend mauris. Donec eu leo congue, faucibus quam eu,
                  viverra mauris. Nulla consectetur lorem mi, at scelerisque
                  metus hendrerit vitae. Proin vel magna vel neque porta
                  ultricies non eget mauris. Suspendisse potenti. Aliquam
                  faucibus scelerisque placerat. Vestibulum vel libero eu nulla
                  varius pretium eget eu magna. Pellentesque habitant morbi
                  tristique senectus et netus et malesuada fames ac turpis
                  egestas. Aenean dictum faucibus felis, ac vestibulum risus
                  mollis in. Phasellus neque dolor, euismod vitae auctor eget,
                  dignissim a felis. Etiam malesuada elit a nibh aliquam,
                  placerat ultricies nibh dictum. Nam ut egestas velit. <br />
                  <br />
                  Pellentesque viverra tincidunt tellus. Etiam cursus, ligula id
                  vehicula cursus, turpis mauris facilisis massa, eget tincidunt
                  est purus et odio. Nam quis luctus libero, non posuere velit.
                  Ut eu varius diam, eu euismod elit. Donec efficitur, neque eu
                  consectetur consectetur, dui sem consectetur felis, vitae
                  rutrum risus urna vel arcu. Aliquam semper ullamcorper
                  laoreet. Sed arcu lectus, fermentum imperdiet purus eu, ornare
                  ornare libero.
                </p>
                <div className="my-10 flex gap-5 items-center">
                  <p className="text-black/60">Tags Cloud</p>
                  <div className="">
                    <button className="outline-0 border border-black/20 px-5 py-1 rounded-full bg-white text-black/50 mr-2">
                      crafts
                    </button>
                    <button className="outline-0 border border-black/20 px-5 py-1 rounded-full bg-white text-black/50">
                      street style
                    </button>
                  </div>
                </div>
                <div className="w-full mb-20">
                    <div className="">
                        <h1 className="text-xl font-bold uppercase">1 comment to show</h1>
                        <div className="flex items-center gap-5 mb-5 mt-2">
                            <CgProfile className="bg-gray-300 rounded-full text-7xl" />
                            <div className="flex flex-col text-black/50">
                                <p className="">test name / Jan 11, 2018 Reply</p>
                                <p className="">test message</p>
                            </div>
                        </div>
                    </div>
                    <CompContactEmailJs />
                    <p className="text-black/50 text-sm mt-5 ">Please note, comments must be approved before they are published.</p>
                </div>
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
              <h1 className="font-extrabold text-2xl pb-7">
                Featured Products
              </h1>
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
    </>
  );
}
