import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

export default function Features() {
  return (
    <div className="h-[100vh] flex flex-col justify-between">
      <Nav />

      <div className="mt-[10vh] w-full h-[25vh] bg-black flex justify-center items-center">
        <h1 className="text-5xl text-white font-bold">FEATURES</h1>
      </div>

      <Footer />
    </div>
  );
}
