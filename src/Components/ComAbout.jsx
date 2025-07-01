import { shopy4 } from "../assets/imagesFile/Images";

export default function ComAbout() {
  return (
    <div className="w-full flex justify-center my-20 ">
      <div className="w-[60vw] flex gap-7 ">
        <div className="w-[20vw] h-[45vh] bg-amber-100 ">
          <img src={shopy4} alt="image shopy4" className="w-[100%] h-[100%] object-cover object-top " />
        </div>
        <div className="flex flex-col gap-6 w-[40vw] ">
          <h1 className="text-2xl">Our story</h1>
          <p className="text-black/40">
            Phasellus egestas nisi nisi, lobortis ultricies risus semper nec.
            Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla
            dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque
            porta est ac neque bibendum viverra. Vivamus lobortis magna ut
            interdum laoreet. Donec gravida lorem elit, quis condimentum ex
            semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet
            sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque
            congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis
            lectus a arcu facilisis, eu sodales lectus sagittis. Etiam
            pellentesque, magna vel dictum rutrum, neque justo eleifend elit,
            vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo
            efficitur, quam velit convallis ipsum, et maximus enim ligula ac
            ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices
            orci.
          </p>
          <div className="pl-5 ml-2 flex flex-col gap-3 border-l-3 border-l-black/10 ">
            <p className="text-black/40">Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.</p>
            <p className="text-sm text-black/70">- Steve Job's</p>
          </div>
        </div>
      </div>
    </div>
  );
}
