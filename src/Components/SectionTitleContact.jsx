import { carousel2 } from "../assets/imagesFile/Images";

export default function SectionTitleContact() {
  return (
    <div className="mt-[10vh] w-full relative">
      <img src={carousel2} alt="image banner" className="h-[25vh] w-full object-cover object-top" />
      <h1 className="absolute text-white text-5xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold">
        CONTACT
      </h1>
    </div>
  )
}
