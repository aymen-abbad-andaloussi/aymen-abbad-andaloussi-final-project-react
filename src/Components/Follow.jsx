export default function Follow() {
  return (
    <div className="w-full h-[35vh] flex flex-col items-center mb-10 ">
      <h1 className="text-4xl font-medium pt-15 pb-20 ">@ FOLLOW US ON INSTAGRAM</h1>
      <div className="flex ">
        <div className="text-center w-[30vw] py-5">
          <h2 className="text-xl font-light">Free Delivery Worldwide</h2>
          <h3 className="text-sm text-black/40 italic">
            Mirum est notare quam littera gothica
          </h3>
        </div>
        <div className="text-center w-[30vw] py-5 border-l border-r border-l-black/20 border-r-black/20 ">
          <h2 className="text-xl font-light">30 Days Return</h2>
          <h3 className="text-sm text-black/40 italic">
            Simply return it within 30 days for an exchange.
          </h3>
        </div>
        <div className="text-center w-[30vw] py-5">
          <h2 className="text-xl font-light">Store Opening</h2>
          <h3 className="text-sm text-black/40 italic">
            Shop open from Monday to Sunday
          </h3>
        </div>
      </div>
    </div>
  );
}
