import { Link } from "react-router-dom";
import Navbar from "./Navbar";


function About(){
    return(
        <div>
            <Navbar />
            <h1>Halaman About</h1>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default About;