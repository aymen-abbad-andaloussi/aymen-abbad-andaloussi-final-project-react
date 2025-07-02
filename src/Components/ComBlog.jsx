import { Link } from "react-router-dom";

export default function ComBlog() {
  return (
    <div className="w-full h-[70vh] flex flex-col items-center ">
      <h1 className="py-10 text-3xl font-semibold ">OUR BLOG</h1>
      <div className="w-[60vw] h-[100%] flex gap-[2rem] ">
        <div className="w-1/3 h-full ">
          <Link to="/Blog">
            <div className="w-full h-[30vh] blogImage1 "></div>
          </Link>
          <div className="flex flex-col gap-3 pt-3">
            <Link to="/Blog" className="hover:text-red-700">
              <p className="text-lg ">
                Black Friday Guide: Best Sales & Discount Codes
              </p>
            </Link>
            <p className="text-sm text-black/70 ">
              by fashe-theme Admin on Dec 28,2017
            </p>
            <p className="text-black/40 text-sm ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
              turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...
            </p>
          </div>
        </div>
        <div className="w-1/3 h-full ">
          <Link to="/Blog">
            <div className="w-full h-[30vh] blogImage2 "></div>
          </Link>
          <div className="flex flex-col gap-3 pt-3">
            <Link to="/Blog" className="hover:text-red-700">
              <p className="text-lg ">
                The White Sneakers Nearly Every Fashion Girls Own
              </p>
            </Link>
            <p className="text-sm text-black/70 ">
              by fashe-theme Admin on Dec 28,2017
            </p>
            <p className="text-black/40 text-sm ">
              Duis ut velit gravida nibh bibendum commodo. Sus-pendisse
              pellentesque mattis augue id euismod. Inter-dum et...
            </p>
          </div>
        </div>
        <div className="w-1/3 h-full ">
          <Link to="/Blog">
            <div className="w-full h-[30vh] blogImage3 "></div>
          </Link>
          <div className="flex flex-col gap-3 pt-3">
            <Link to="/Blog" className="hover:text-red-700">
              <p className="text-lg ">
                New York SS 2018 Street Style: By Annina Mislin
              </p>
            </Link>
            <p className="text-sm text-black/70 ">
              by fashe-theme Admin on Dec 28,2017
            </p>
            <p className="text-black/40 text-sm ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
              turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
