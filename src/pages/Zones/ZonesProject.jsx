import Cards from "../../components/Cards/Cards";
import api from "../utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import Title from "../../components/Title/Title";
import Apartment from "../../assets/Apartment.svg";
import Gym from "../../assets/Gym.svg";
import { useNavigate, useLocation } from "react-router-dom";
import DetailsBtn from "../../components/Buttons/DetailsBtn";
function ZonesProject() {
  const { id } = useParams();
  const location = useLocation();
  const zoneImage = location.state?.image;
  const navigate = useNavigate();
  const [zones, setZones] = useState(null);
  const [loading, setLoading] = useState(true);
  const getZones = async () => {
    try {
      const response = await api.get("/zone");
      setZones(response.data);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getZones();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Title title={"Zone Projrcts"} hs={"mt-[40px]"} ds={"mb-[48px]"} />
      <div>
        <img
          src={zoneImage}
          className="w-full h-[525px] object-cover mx-auto rounded-3xl"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 justify-items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 my-[69px]">
        {zones.map((zone) => {
          return (
            <div key={zone.id} className="flex justify-center items-center">
              <Cards
                title={zone.name_en}
                desc={zone.description_en}
                firstIcon={Apartment}
                bedrooms={'6'}
                bathrooms={'3'}
                size={'250'}
                secondIcon={Gym}
                cardImg={zone.images}
                btn={
                  <DetailsBtn
                    onClick={() => navigate(`/zones/${id}/item/${zone.id}`)}
                  />
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ZonesProject;
