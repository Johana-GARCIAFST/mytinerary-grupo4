import imagen from '../img/construccion.jpg'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Regresar from './regresar'
import '../details.css'


function Details(){

    const [cityDetails, setCityDetails]= useState([]);

    const {id} = useParams()

    async function getCity(id){
        let cityDb
        cityDb = await axios.get("https://johana-api-cities-crud.onrender.com/api/cities/" +id);
        console.log(cityDb);

    setCityDetails(cityDb.data.response);
    }
    
    
    useEffect(()=>{

        getCity(id)




    },[setCityDetails])


    return(
        <>
        {cityDetails.length > 0 ?
       <>
       <div className='fondo'> 
       
        <h1>{cityDetails[0].name}</h1>
        <div className="city-details" style={{ backgroundImage: `url(${cityDetails[0].image})`, backgroundSize: 'cover' }}>
         
        <div className='regresar'>
        <Regresar/>
        </div>
        </div>
        </div>
       
       </>
      
    : <h1>Loading...</h1>
        }

       </>
    )

}
export default Details
