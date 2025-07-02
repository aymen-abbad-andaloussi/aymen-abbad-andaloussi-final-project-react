import CompContactEmailJs from "../Components/CompContactEmailJs";
import CompContactMap from "../Components/CompContactMap";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import SectionTitleContact from "../Components/SectionTitleContact";

export default function Contact() {
  return (
    <div>
      <Nav />
      <SectionTitleContact />
      <div className="flex gap-10 my-15 justify-center">
        <CompContactMap />
        <CompContactEmailJs />
      </div>
      <Footer />
    </div>
  );
}
