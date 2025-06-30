export default function Catalogue() {
  return (
    <div className="w-full h-[60vh] bg-black/10 flex justify-center items-center mb-10 ">
      <div className="w-[60vw] h-[80%] flex gap-[3rem] ">
        <div className="w-[50%] h-[100%] bg-amber-200 imageCatalogue1 flex flex-col justify-center items-center gap-2 ">
            <h2 className="text-4xl font-semibold text-white ">The Beauty</h2>
            <h1 className="text-6xl font-semibold text-white ">LOOKBOOK</h1>
            <p className="text-lg text-white pt-5 ">VIEW COLLECTION</p>
        </div>
        <div className="w-[50%] h-[100%] bg-amber-200 flex flex-col justify-end items-center pb-5 imageCatalogue2 ">
          <h1 className="pb-1.5 font-light text-black/80 text-xl ">Boxy2 T-Shirt with Roll Sleeve</h1>
          <p className="font-light text-black/80 text-xl ">$20.00</p>
          <div className="w-full flex justify-center gap-2 mt-12 ">
            <div className="flex flex-col items-center justify-center border border-black/20 w-15 h-15 ">
              <p className="">-2373</p>
              <p className="text-black/60 ">days</p>
            </div>
            <div className="flex flex-col items-center justify-center border border-black/20 w-15 h-15 ">
              <p className="">-19</p>
              <p className="text-black/60 ">hours</p>
            </div>
            <div className="flex flex-col items-center justify-center border border-black/20 w-15 h-15 ">
              <p className="">-36</p>
              <p className="text-black/60 ">mins</p>
            </div>
            <div className="flex flex-col items-center justify-center border border-black/20 w-15 h-15 ">
              <p className="">-16</p>
              <p className="text-black/60 ">secs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
