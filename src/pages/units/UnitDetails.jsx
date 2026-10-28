import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react';
import api from '../utils/api'

function UniteDetails() {
    const {id}= useParams();
    const [unit, setUnit]= useState('')
    const [loading, setLoading]= useState(true)
    const getUnitDetail = async()=>{
      try{
        const response = await api.get(`/unit/${id}`);
        setUnit(response.data)
      }catch(error){
        console.log(error);
        
      }finally{
        setLoading(false)
      }
      
    }
    useEffect(()=>{
      getUnitDetail();
    },[id])

    if(loading){
      return <h1>Loading...</h1>
    }
    if(!unit){
      return <h1> Unit Not Found</h1>
    }
  return (
    <div>
      <img src={unit.images[0]}/>
      <h2>{unit.title_en}</h2>
      <p>{unit.description_en}</p>
      <div>
        <p>price: {unit.price}</p>
        <p>bedrooms: {unit.bedrooms}</p>
        <p>bathrooms: {unit.bathrooms}</p>
      </div>
    </div>
  )
}

export default UniteDetails

