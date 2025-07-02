import CompContactEmailJs from "../Components/CompContactEmailJs";
import CompContactMap from "../Components/CompContactMap";
import SectionTitleContact from "../Components/SectionTitleContact";

export default function Contact() {
  return (
    <div>
      <SectionTitleContact />
      <div className="flex gap-10 my-15 justify-center">
        <CompContactMap />
        <CompContactEmailJs />
      </div>
    </div>
  );
}
