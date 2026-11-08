import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../utils/api";
import Loading from "../../components/Loading";
function DevelopersData() {
  const { id } = useParams();
  const [developer, setDeveloper] = useState("");
  const [loading, setLoading] = useState(true);
  const getDeveloperData = async () => {
    try {
      const response = await api.get(`/developer/${id}`);
      setDeveloper(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getDeveloperData();
  }, [id]);

  

  if (loading) {
    return <Loading />;
  }
  if (!developer) {
    <h1>Unit Not Found</h1>;
  }

  return (
    <div className="mx-6">
      <div>
        <img
          className="w-full h-[525px] object-cover rounded-lg"
          src={developer.images}
        />

        <section className="flex justify-between mb-[131px]">
          <div>
            <p className="font-lato font-bold text-[25px] md:text-[40px] text-[#8E1616] mt-[54px] mb-[11px]">
              {developer.name_en}
            </p>
            <div className="flex gap-1">
              <p className="font-lato font-medium text-[20px] text-[#847D7D]">
                Minusio, Lake Maggiore, Switzerland — ref. LOC1771
              </p>
            </div>
          </div>
          <div>
            <p className="text-[#A18E77] font-lato font-bold text-[40px] ">
              {developer.city_en}
            </p>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 mb-[148px]">
            <div>
              <p className="font-lato font-bold text-[#1D1616] text-[26px] mb-[25px]">
                At a glance
              </p>
              <ul className="list-disc list-inside">
                <li className="font-lato text-[26px] text-[#847D7D] pb-7.5">
                  Plot size ca.: 589 m²
                </li>
                <li className="font-lato text-[26px] text-[#847D7D] pb-7.5">
                  Living area ca.: 300 m²
                </li>
                <li className="font-lato text-[26px] text-[#847D7D] pb-7.5">
                  Bedrooms: 3
                </li>
                <li className="font-lato text-[26px] text-[#847D7D] pb-7.5">
                  Bathrooms: 3
                </li>
                <li className="font-lato text-[26px] text-[#847D7D] pb-7.5">
                  Living rooms: 2
                </li>
                <li className="font-lato text-[26px] text-[#847D7D] pb-7.5">
                  WC: 1
                </li>
                <li className="font-lato text-[26px] text-[#847D7D] ">
                  External parking: 3, covered
                </li>
              </ul>
            </div>
            <div>
              <p className="font-lato font-bold text-[#1D1616] text-[26px] mb-[25px]">
                Overview
              </p>
              <p className="font-lato text-[#847D7D] text-[26px] mb-[62px]">
                {developer.description_en}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DevelopersData;
