import { FaFacebookF, FaGooglePlusG, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full h-[50vh] bg-black/10 ">
      <div className="w-full h-[100%] flex flex-col justify-between">
        <div className="h-fit w-full flex py-20 ">
            <div className="w-[30vw] pl-15 flex flex-col gap-6">
                <h1 className="font-semibold ">GET IN TOUCH</h1>
                <p className="text-sm font-light text-black/70">Any questions? Let us know in store at 8th floor, 379 Hudson St,<br />New York, NY 10018 or call us on (+1) 96 716 6879</p>
                <div className="flex gap-3 ">
                    <FaFacebookF className="text-black/50" />
                    <FaTwitter className="text-black/50" />
                    <FaPinterest className="text-black/50" />
                    <FaGooglePlusG className="text-black/50" />
                    <FaInstagram className="text-black/50" />
                </div>
            </div>
            <div className="w-[15vw] flex flex-col gap-6 ">
                <h1 className="font-semibold ">CATEGORIES</h1>
                <p className="text-sm font-light text-black/70">Men</p>
                <p className="text-sm font-light text-black/70">Women</p>
                <p className="text-sm font-light text-black/70">Dresses</p>
                <p className="text-sm font-light text-black/70">Sunglasses</p>
            </div>
            <div className="w-[15vw] flex flex-col gap-6 ">
                <h1 className="font-semibold ">LINKS</h1>
                <p className="text-sm font-light text-black/70">Search</p>
                <p className="text-sm font-light text-black/70">About Us</p>
                <p className="text-sm font-light text-black/70">Contact Us</p>
                <p className="text-sm font-light text-black/70">Returns</p>
            </div>
            <div className="w-[15vw] flex flex-col gap-6 ">
                <h1 className="font-semibold ">HELP</h1>
                <p className="text-sm font-light text-black/70">Track Order</p>
                <p className="text-sm font-light text-black/70">Returns</p>
                <p className="text-sm font-light text-black/70">Sipping</p>
                <p className="text-sm font-light text-black/70">FAQs</p>
            </div>
            <div className="flex flex-col gap-5">
                <h1 className="font-semibold ">NEWSLETTER</h1>
                <input type="email" placeholder="Email Adress" className="border-b border-b-black/20 w-[15vw] text-sm " />
                <button className="bg-black rounded-4xl text-white py-3 px-15 text-l w-fit ">SUBSRIBE</button>
            </div>
        </div>
        <p className="font-light text-sm text-black/60 text-center py-10 ">Copyright © 2022 <span className="font-medium">Shopify Theme Developed by MassTechnologist</span> All rights reserved.</p>
      </div>
    </footer>
  )
}
