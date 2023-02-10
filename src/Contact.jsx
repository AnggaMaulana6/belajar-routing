import { Link } from "react-router-dom";
import Navbar from "./Navbar";


function Contact(){
    return(
        <div>
            <Navbar />
            <h1>Halaman Contact Us</h1>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default Contact;