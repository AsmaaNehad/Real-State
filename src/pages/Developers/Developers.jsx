import Hero from "../../components/Hero section/Hero"
import dev from '../../assets/dev.png'
import api from "../utils/api"
import {useEffect, useState} from 'react'
function Developers() {
  const [developers, setDevelopers] = useState([])
  useEffect(()=>{
  async function getDevelopers(){
    const response = await api.get('/developer')
    setDevelopers(response.data);
    console.log(developers);
      
  }
  getDevelopers()
  },[])
  return (
    <div>
      <div>
      {
        developers.map((developer) =>{
          return <h1 className="bg-blue-900">{developer.name_en}</h1>
        })
      }
      </div>
      <Hero
      bg={dev}
      title={'Defining the Future Skyline.'}
      desc={'Great developments require more than just capital; they require a narrative. We provide the elite marketing and specialized brokerage services needed to position your landmark projects in front of the world’s most discerning buyers.'}
      icons={true}
      />
    </div>
  )
}

export default Developers
