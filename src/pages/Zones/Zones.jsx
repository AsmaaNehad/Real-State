import Hero from "../../components/Hero section/Hero"
import mainzone from "../../assets/mainzone.png"
import api from "../utils/api"
import { useState, useEffect } from "react"
function Zones() {
  const [zones, setZones]= useState([])
  const [loading, setLoading]= useState(true)
  const [product,setProduct] = useState(null)
  const getZones = async()=>{
    const response = await api.get("/zone")
    console.log(response.data);
    setZones(response.data)
    setLoading(false) 
  };
  useEffect(()=>{
    try{
      getZones()
    }catch(error){
      console.log(error);
      
    }
  },[])

     
    const unitDetail = ()=>{
        setProduct(product.id)
    }
  return (
    <div>
      <button onClick={()=>unitDetail(product.Navigate(`/units/${id}`))}>view datails</button>
      {loading? <h1>Loading...</h1>:
      zones.map((zone)=>{
        return <div key={zone.id}>
          <img src={zone.images} alt="zone-img" className="size-40"/>
          <h1>{zone.name_en}</h1>
        </div>
      })
      }
      <Hero
      bg={mainzone}
      title={'Destinations Defined by Distinction'}
      desc={'From the quiet pulse of the shoreline to the vibrant energy of the metropolitan center, explore our guide to the neighborhoods that mirror your ambition and your aesthetic.'}
      icons={true}
      />
    </div>
  )
}

export default Zones
