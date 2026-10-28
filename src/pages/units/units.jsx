import Hero from "../../components/Hero section/Hero"
import unites from "../../assets/unites.png"
import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import api from '../../pages/utils/api'

function Units() {
  const [units, setUnits]= useState([])
  const [loading, setLoading]= useState(true)
  const [search, setSearch]= useState('')
  const [bedrooms, setBedrooms]= useState('')
  const [developer, setDeveloper]= useState('')
  const [zone, setZone]= useState('')
  const [projects, setProjects]= useState('')
  const [status, setStatus]= useState('')
  const [price, setPrice]= useState('')
  const navigate = useNavigate();
  
  const allUnits = async ()=>{
    try{
    const response = await api.get('/unit');

    setUnits(response.data)
    }catch(err){
    console.log(err);
    }finally{
    setLoading(false)
    }
  };
  useEffect(()=>{
    allUnits();
  },[])
  
  const filteredUnits = units.filter((unit)=>{
    return(
      unit.title_en.toLowerCase().includes(search.toLowerCase()) &&
      (price === "" || unit.price <= price) &&
      (bedrooms === "" || unit.bedrooms == bedrooms) &&
      (developer === "" || unit.developer == developer) &&
      (zone === "" || unit.zone == zone) &&
      (projects === "" || unit.projects == projects) &&
      (status === "" || unit.status == status) 
    )
  })
  return (
    <div>
      <Hero
      bg={unites}
      title={'Where Visionary Design Meets Daily Life'}
      desc={'Experience a collection of residences designed as personal sanctuaries. Each unit balances expansive city views with artisanal textures and quiet, light-filled interiors to create the ultimate retreat from the world'}
      icons={true}
      />
      {
      loading? <h3>Loading...</h3>:
      
      units.map((unit=>{
        return <div key={unit.id}>
          <h1>{unit.name_en}</h1>
        </div>
      }))
    }
    <div className="flex flex-col justify-center items-center md:flex md:flex-row md:justify-center md:items-center mt-51.5 mb-15.25">

  <input className="border border-[#8E1616] p-3 rounded-lg" type="search" required placeholder="Search" value={search} 
  onChange={(e)=> setSearch(e.target.value)} />
    <select value={bedrooms} className="p-3 border border-[#8E1616] rounded-lg" 
    onChange={(e)=> setBedrooms(e.target.value)}>
    <option value='' disabled hidden>Bedrooms</option>
    <option value=''>All Bedrooms</option>
    <option value='1'>1 Bedroom</option>
    <option value='2'>2 Bedrooms</option>
    <option value='3'>3 Bedrooms</option>
    <option value='4'>4 Bedrooms</option>
    </select>
    <select value={developer} className="p-3 border border-[#8E1616] rounded-lg">
    <option value='' disabled hidden>Developer</option>
    <option value=''></option>
    <option value=''></option>
    <option value=''></option>
    <option value=''></option>
    </select>
    <select value={zone} className="p-3 border border-[#8E1616] rounded-lg">
    <option value='' disabled hidden>Zone</option>
    <option value=''></option>
    <option value=''></option>
    <option value=''></option>
    <option value=''></option>
    </select>
    <select value={projects} className="p-3 border border-[#8E1616] rounded-lg">
    <option value='' disabled hidden>Projects</option>
    <option value=''></option>
    <option value=''></option>
    <option value=''></option>
    <option value=''></option>
    </select>
    <select value={status} className="p-3 border border-[#8E1616] rounded-lg">
    <option value='' disabled hidden>Status</option>
    <option value=""></option>
    <option value=""></option>
    <option value=""></option>
    <option value=""></option>
    </select>
    <select value={price} className="p-3 border border-[#8E1616] rounded-lg">
    <option value='' disabled hidden>Price Range</option>
    <option value="1000000">1000000</option>
    <option value="2000000">2000000</option>
    <option value="5000000">5000000</option>
    </select>
    </div>
    <div className=" flex justify-center items-center">
    <button className="text-white bg-linear-[#8E1616]-[#C34B4B] w-150 h-10 rounded-xl">Search</button>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-10 px-20">
    {
      filteredUnits.map((unit)=>{
        return <div key={unit.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-colors">
          <img src={unit.images[0]} className="w-full h-56 object-cover"/>
          <div className="p-4">
            <h2 className="font-bold text-lg">{unit.title_en}</h2>
            <p className="text-gray-500 mt-2 text-sm">{unit.description_en}</p>
          </div>
          <div>
            <p className="text-lg text-blue-950 pl-2 ">{unit.price} $</p>
            <p className="p-2">{unit.bedrooms} Bedrooms</p>
          </div>
          <button onClick={()=> navigate(`/units/${unit.id}`)} className="text-lg py-1 bg-gray-200 rounded-xl border border-gray-300 w-full cursor-pointer hover:bg-gray-900 hover:text-white transition duration-300">View Product</button>
        </div>
      })
    }
    </div>
    </div>
  )
}

export default Units
