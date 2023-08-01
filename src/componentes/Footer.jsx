import Twitter  from '@mui/icons-material/Twitter';
import '../footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


function Footer(){
    return(
        <div className="Footer">
        <div className="LinksFooter">
        <div className="LinkFooter"><p>Link to Home</p></div>
        <div className="LinkFooter"><p>Link to About us</p></div>
        <div className="LinkFooter"><p>Link to Cities</p></div>
        <div> &copy; MyTinerary Todos los derechos reservados.
        </div>
        </div>
        <div className="SocialMedia">
        <FacebookIcon/>
        <InstagramIcon/>
        <WhatsAppIcon/>
        <Twitter/>
        </div>
        </div>
        )
}
export default Footer;