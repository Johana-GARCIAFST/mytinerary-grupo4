import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {Link as LinkRouter} from 'react-router-dom'




function Regresar(){

    return(

        <LinkRouter to={'./cities'}>
        <ChevronLeftIcon/>
        </LinkRouter>
    )
}
export default Regresar