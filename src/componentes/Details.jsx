import imagen from '../img/construccion.jpg'
import { useParams } from 'react-router-dom'
import Regresar from './regresar'
import '../details.css'


function Details(){

    const {id} = useParams()
    console.log(id)

    return(
        <>

        <h1>Details</h1>
        <div className='regresar'>
        <Regresar/>
        </div>
       
       <img src={imagen} alt="" />
       </>
    )

}
export default Details
