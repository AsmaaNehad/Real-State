import Hero from "../../components/Hero section/Hero";
import dev from "../../assets/dev.png";
import api from "../utils/api";
import { useEffect, useState } from "react";
import FutureCards from "../../components/Cards/FutureCards";
import CardLogo1 from "../../assets/CardLogo1.svg";
import DetailsBtn from "../../components/Buttons/DetailsBtn";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";
function Developers() {
  const navigate = useNavigate();
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);
  const getDeveloper = async () => {
    try {
      const response = await api.get("/developer");
      setDevelopers(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getDeveloper();
  }, []);
  if (loading) {
    return <Loading />;
  }
  if (!developers) {
    <h1>developer Not Found</h1>;
  }
  return (
    <div>
      <Hero
        bg={dev}
        title={"Defining the Future Skyline."}
        desc={
          "Great developments require more than just capital; they require a narrative. We provide the elite marketing and specialized brokerage services needed to position your landmark projects in front of the world’s most discerning buyers."
        }
        icons={true}
      />
      <section className="grid grid-cols-1 gap-5 sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 mx-7 my-10 px-3 md:mx-3 lg:mx-4 lg:px-4 xl:m-10 xl:px-20">
        {developers.map((developer) => {
          return (
            <div key={developer.id}>
              <FutureCards
                id={developer.id}
                imgSrc={developer.images}
                logo={CardLogo1}
                btn={
                  <DetailsBtn
                    onClick={() => navigate(`/developers/${developer.id}`)}
                  />
                }
              />
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Developers;
