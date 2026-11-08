function Buttons({ btnTitle, btnStyle, icon }) {
  return (
    <>
      <button
        className={`${btnStyle} rounded-lg bg-linear-to-r from-[#8E1616] to-[#C34B4B] cursor-pointer font-lato hover:brightness-120 transition duration-200 font-bold`}
      >
        {btnTitle}
        {icon && <img src={icon} alt="" className="w-4 h-4" />}
      </button>
    </>
  );
}

export default Buttons;
