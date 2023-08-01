import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GroupsIcon from '@mui/icons-material/Groups';
import axios from 'axios'
import Regresar from './regresar'
import Itinerary from './itinerary';
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
       <div className='fondo'  style={{ backgroundImage: `url(${cityDetails[0].image})` }}> 
       
        <h1 className='tituloDetalle'>{cityDetails[0].name}</h1>
        <div className='country'>
                <h2>Country:{cityDetails[0].country}</h2>
         </div>
        <section className='contenedorDescription'>
            <p>
                {cityDetails[0].description}
            </p>
            <span>
            <GroupsIcon/>Popupation: {cityDetails[0].population}
            </span>
          
        </section>
        <section>
            <Itinerary/>
        </section>

        <div className='regresar'>
        <Regresar/>
        </div>
        </div>
       
       </>
      
    :
     
    <div className='loading'>
    <h1>Loading...</h1>
    </div>
        }

       </>
    )

}
export default Details
