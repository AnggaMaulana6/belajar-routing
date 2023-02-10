import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About Us</Link>
            <Link to={'/team'}>Our Team</Link>
            <Link to={'/portofolio'}>Portofolio</Link>
            <Link to={'/contact'}>Contact US</Link>
        </div>
    )
}

export default Navbar;