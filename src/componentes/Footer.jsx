import '../footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer(){
    return(
        <div className="Footer">
        <div className="LinksFooter">
        <div className="LinkFooter"><p>Link a Home</p></div>
        <div className="LinkFooter"><p>Link a Home</p></div>
        <div className="LinkFooter"><p>Link a Home</p></div>
        <div className="LinkFooter"><p>Link a Home</p></div>
        </div>
        <div className="SocialMedia">
        <FacebookIcon/>
        <InstagramIcon/>
        <WhatsAppIcon/>
        </div>
        </div>
        )
}
export default Footer;