import { bannerShop } from "../assets/imagesFile/Images";

export default function SectsionTitle() {
  return (
    <div className="mt-[10vh] w-full relative">
        <img src={bannerShop} alt="image banner" className="" />
        <h1 className="absolute text-white text-5xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold">PRODUCTS</h1>
    </div>
  )
}
