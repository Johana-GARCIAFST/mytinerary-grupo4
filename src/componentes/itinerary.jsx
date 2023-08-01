import '../details.css'
import usuario from '../img/userItinerary.png'
import dolar from '../img/imagenDolar.png'
import FavoriteIcon from '@mui/icons-material/Favorite'

function Itinerary() {

    let money = <img src={dolar} alt="" />


    return(
        <>
        <div className='itinerary'>
            <h2>Get to know the top places in the city</h2>
            <div className='author'>
                <img src= {usuario} alt="" />
                <p>Lorenzo Martinez</p>
            </div>
            <div className='price'>
            <p>Price:  </p>

            {money}
            {money}
            {money}
            {money}
            {money}

            </div>
            <div className='contentMegusta'>
                <FavoriteIcon className='megusta' />
                0

                <div className='duration'>
                    Duration: 3 hours
                </div>

                <div className="etiquetas">
                    #travelWorld #myCity
                </div>
                </div>
            
             
        </div>
       
        </>


    )
}
export default Itinerary