import { Link } from "react-router-dom";
import Navbar from "./Navbar";


function Portofolio(){
    return(
        <div>
            <Navbar />
            <h1>Halaman Portofolio</h1>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default Portofolio;