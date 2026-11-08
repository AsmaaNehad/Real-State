function DetailsBtn({ onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="w-full py-2 font-lato text-[#8E1616] border border-[#8E1616] rounded-xl hover:bg-red-950 hover:text-white transition duration-350 cursor-pointer"
      >
        View Details
      </button>
    </div>
  );
}

export default DetailsBtn;
