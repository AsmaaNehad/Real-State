import Hero from "../../components/Hero section/Hero";
import BedroomIcon from "../../assets/BedroomIcon.svg";
import BathroomIcon from "../../assets/BathroomIcon.svg";
import unites from "../../assets/unites.png";
import searchIcon from "../../assets/searchIcon.svg";
import { useState, useEffect } from "react";
import api from "../../pages/utils/api";
import Cards from "../../components/Cards/Cards";
import DetailsBtn from "../../components/Buttons/DetailsBtn";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

function Units() {
  const navigate = useNavigate();
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [developer, setDeveloper] = useState("");
  const [zone, setZone] = useState("");
  const [projects, setProjects] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState("");

  const allUnits = async () => {
    try {
      const response = await api.get("/unit");

      setUnits(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    allUnits();
  }, []);

  const filteredUnits = units.filter((unit) => {
    return (
      unit.title_en.toLowerCase().includes(search.toLowerCase()) &&
      (price === "" || unit.price <= price) &&
      (bedrooms === "" || unit.bedrooms == bedrooms) &&
      (developer === "" || unit.developer == developer) &&
      (zone === "" || unit.zone == zone) &&
      (projects === "" || unit.projects == projects) &&
      (status === "" || unit.status == status)
    );
  });
  return (
    <div>
      <Hero
        bg={unites}
        title={"Where Visionary Design Meets Daily Life"}
        desc={
          "Experience a collection of residences designed as personal sanctuaries. Each unit balances expansive city views with artisanal textures and quiet, light-filled interiors to create the ultimate retreat from the world"
        }
        icons={true}
      />
      <section className=" px-6 py-6 grid grid-cols-1 items-center lg:border lg:border-[#8E1616] lg:rounded-lg sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 lg:w-full mt-10 mb-15.25 ">
        <div className="relative border border-[#8E1616] p-3 lg:p-0 rounded-lg lg:rounded-none lg:border-0 lg:border-l lg:border-[#8E1616]/40 lg:first:border-l-0 ">
          <input
            className="peer w-full min-w-0 pr-8 text-gray-400 font-lato font-bold outline-none truncate "
            type="search"
            required
            placeholder="Search Property"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none peer-not-placeholder-shown:hidden ">
            <img src={searchIcon} className="w-6 h-6" />
          </span>
        </div>
        <select
          value={bedrooms}
          className="p-3 outline-none text-[#BEBEBE] font-lato font-bold border border-[#8E1616] rounded-lg lg:rounded-none lg:border-0 lg:border-l lg:border-[#8E1616]/40 lg:first:border-l-0"
          onChange={(e) => setBedrooms(e.target.value)}
        >
          <option value="" disabled hidden>
            Bedrooms
          </option>
          <option value="">All Bedrooms</option>
          <option value="1">1 Bedroom</option>
          <option value="2">2 Bedrooms</option>
          <option value="3">3 Bedrooms</option>
          <option value="4">4 Bedrooms</option>
        </select>
        <select
          value={developer}
          className="p-3 outline-none  text-[#BEBEBE] font-lato font-bold border border-[#8E1616] rounded-lg lg:rounded-none lg:border-0 lg:border-l lg:border-[#8E1616]/40 lg:first:border-l-0"
          onChange={(e) => setDeveloper(e.target.value)}
        >
          <option value="" disabled hidden>
            Developer
          </option>
          <option value="">All Developers</option>
          <option value="elmorshedy">El Morshedy</option>
          <option value="lagoon">Lagoon</option>
          <option value="HM Group">HM Group</option>
          <option value="palm hills">Palm Hills</option>
        </select>
        <select
          value={zone}
          className="p-3 outline-none  text-[#BEBEBE] font-lato font-bold border border-[#8E1616] rounded-lg lg:rounded-none lg:border-0 lg:border-l lg:border-[#8E1616]/40 lg:first:border-l-0"
          onChange={(e) => setZone(e.target.value)}
        >
          <option value="" disabled hidden>
            Zone
          </option>
          <option value="">All Zones</option>
          <option value="Alexandria">Alexandria</option>
          <option value="Cairo">Cairo</option>
        </select>
        <select
          value={projects}
          className="p-3 outline-none  text-[#BEBEBE] font-lato font-bold border border-[#8E1616] rounded-lg lg:rounded-none lg:border-0 lg:border-l lg:border-[#8E1616]/40 lg:first:border-l-0"
          onChange={(e) => setProjects(e.target.value)}
        >
          <option value="" disabled hidden>
            Projects
          </option>
          <option value="">All Projects</option>
          <option value="hills">Hills</option>
          <option value="Hayah">Hayah</option>
          <option value="Hayah resident">Hayah resident</option>
        </select>
        <select
          value={status}
          className="p-3 outline-none  text-[#BEBEBE] font-lato font-bold border border-[#8E1616] rounded-lg lg:rounded-none lg:border-0 lg:border-l lg:border-[#8E1616]/40 lg:first:border-l-0"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="" disabled hidden>
            Status
          </option>
          <option value="">All Status</option>
          <option value="AVAILABLE">Available</option>
          <option value="SOLD">Sold</option>
        </select>
        <select
          value={price}
          className="p-3 outline-none  text-[#BEBEBE] font-lato font-bold border border-[#8E1616] rounded-lg lg:rounded-none lg:border-0 lg:border-l lg:border-[#8E1616]/40 lg:first:border-l-0"
          onChange={(e) => setPrice(e.target.value)}
        >
          <option value="" disabled hidden>
            Price Range
          </option>
          <option value="">All Prices</option>
          <option value="1000000">1000000</option>
          <option value="2000000">2000000</option>
          <option value="3000000">3000000</option>
          <option value="4000000">4000000</option>
          <option value="5000000">5000000</option>
          <option value="6000000">6000000</option>
          <option value="7000000">7000000</option>
          <option value="8000000">8000000</option>
          <option value="9000000">9000000</option>
          <option value="10000000">10000000</option>
          <option value="20000000">20000000</option>
        </select>
      </section>
      <div className=" flex justify-center items-center">
        <button className="text-white bg-linear-to-r from-[#8E1616] to-[#C34B4B] hover:brightness-125 transition duration-200 w-150 h-10 rounded-xl cursor-pointer font-lato font-bold text-lg flex justify-center items-center gap-2 my-5">
          Search
        </button>
      </div>
      <div className=" grid grid-cols-1 justify-items-center gap-5 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:my-8 lg:mx-1 xl:mx-5 xl:my-8">
        {loading ? (
          <Loading/>
        ) : (
          filteredUnits.map((unit) => {
            return (
              <div key={unit.id}>
                <Cards
                  cardImg={unit.images[0]}
                  bedrooms={`${unit.bedrooms} Bedrooms`}
                  firstIcon={BedroomIcon}
                  secondIcon={BathroomIcon}
                  bathrooms={`${unit.bathrooms} Bathrooms`}
                  size={unit.size}
                  title={unit.title_en}
                  desc={unit.description_en}
                  price={unit.price}
                  status={unit.status}
                  btn={
                    <DetailsBtn onClick={() => navigate(`/units/${unit.id}`)} />
                  }
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Units;
