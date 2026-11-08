import FutureOne from "../../../assets/FutureOne.png";
import FutureTwo from "../../../assets/FutureTwo.png";
import CardLogo1 from "../../../assets/CardLogo1.svg";
import CardLogo2 from "../../../assets/CardLogo2.svg";
import Title from "../../../components/Title/Title";
import FutureCards from "../../../components/Cards/FutureCards";
import DetailsBtn from "../../../components/Buttons/DetailsBtn";
function SectionFive() {
  return (
    <section className="mb-36.25">
      <Title title={"Future Landmarks"} hs={"mt-[180px]"} ds={"mb-[38px]"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FutureCards imgSrc={FutureOne} logo={CardLogo1} btn={<DetailsBtn />} />
        <FutureCards
          imgSrc={FutureTwo}
          logo={CardLogo2}
          logoHeader={"Hayah City"}
          logoTitle={"Hayah Development"}
          btn={<DetailsBtn />}
        />
        <FutureCards imgSrc={FutureOne} logo={CardLogo1} btn={<DetailsBtn />} />
      </div>
      <div className="flex w-full justify-center gap-2 py-2 mt-5">
        <a
          href="#item1"
          className="w-2 h-2 bg-gray-400 hover:bg-red-800 rounded-full"
        ></a>
        <a
          href="#item2"
          className="w-2 h-2 bg-gray-400 hover:bg-red-800 rounded-full"
        ></a>
        <a
          href="#item3"
          className="w-2 h-2 bg-gray-400 hover:bg-red-800 rounded-full"
        ></a>
      </div>
    </section>
  );
}

export default SectionFive;
