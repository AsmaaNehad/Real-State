
import SizeIcon from "../../assets/SizeIcon.svg";

function Cards({
  cardImg,
  bedrooms,
  bathrooms,
  size,
  title,
  price,
  desc,
  status,
  btn,
  firstIcon,
  secondIcon
}) {

  return (
    <div className="max-w-110.5 h-auto border border-[#EAEAEA] rounded-2xl shadow-Card hover:shadow-xl flex-col justify-between transition-shadow duration-300">
      <div className="relative">
        <img src={cardImg} className="rounded-t-2xl w-110.5 h-71" />
        {status == "AVAILABLE" ? (
          <span className="absolute top-7 right-2 bg-[#21E008] text-white font-lato font-bold rounded px-5 py-1">
            {status}
          </span>
        ) : (
          <p>
            {status}
          </p>
        )}
      </div>
      <div className="flex justify-around items-center border border-[#CEC7C7] py-2.25">
        <div className="flex justify-center items-center gap-1 ">
          <img src={firstIcon} />
          <span className="text-[#A18E77]">{bedrooms}</span>
          <div className="h-5 w-px bg-[#CEC7C7] ml-3"></div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <img src={secondIcon} />
          <span className="text-[#A18E77]">{bathrooms}</span>
          <div className="h-5 w-px bg-[#CEC7C7] ml-3"></div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <img src={SizeIcon} />
          <span className="text-[#A18E77]">{size}m</span>
        </div>
      </div>
      <div className="flex justify-between items-center mx-4 mt-3.5 mb-5.25">
        <p className="font-heading text-[22px] text-[#8E1616] font-semibold">
          {title}{" "}
        </p>
        <p className="text-[#A18E77] text-[26px] font-bold font-lato">
          {price}
        </p>
      </div>
      <div>
        <p className="text-[#847D7D] font-lato text-[16px] ml-3.25">{desc}</p>
      </div>
      <div className="m-5">{btn}</div>
    </div>
  );
}

export default Cards;
