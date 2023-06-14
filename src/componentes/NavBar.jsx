import "../App"
import "../app.css"
import {link as LinkRouter} from "react-router-dom"

function NavBar() {
    const NavLinks = [
        {name:"Home", 
        path:"/Home"},

         {name:"Cities",
         path:"/Cities)"},

         {name:"About Us",
          path:"/About Us"}, 

         {name:"Contacts",
          path:"/Contacts"}]
    
    return (
        <div className="NavBar">
            <ul>
                {
                    NavLinks.map(link => {
                        return<LinkRouter to={link.path}>className="NavItem"to={link.path}{link.name} </LinkRouter>
                    })
                    }
                </ul>
        </div>
    )
}
export default NavBar;