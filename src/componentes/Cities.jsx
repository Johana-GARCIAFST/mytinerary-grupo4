import { useEffect, useState } from "react";
import {Link as LinkRouter} from 'react-router-dom'
import "../cities.css"
import Animation from "./squeleton"
import axios from "axios"



function Cities(){
    const [cities, setCities]=useState([])
    let  citiesDb
    async function getData(){
    citiesDb = await axios.get("http://localhost:5000/api/cities")
    setCities(citiesDb.data.response.cities)
    console.log(citiesDb )
    console.log(cities);    
    }   
    useEffect(()=>{
      getData()

    },[])
    
   
    return(
        <>
         <h1 className="titulo">Cities</h1>
        <div className='contenedorCities'>
        {cities.length>0 ? 
        cities.map((city, index  )=>
        <div className="tarjeta" key={index}>
            <img src={city.image} alt=""  />
            <h2 >
                {city.name}
            </h2>
           <LinkRouter to={'/Details/'+ city._id}> 
           <button className="botonDetalles">
                Detais
            </button>
            </LinkRouter>
            
            </div>
        )
            :
            
            <Animation/>
        }
       
       
            
        </div>
        
        
        </>
    )
}
export default Cities;