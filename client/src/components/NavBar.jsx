import { Link } from "react-router-dom"
export default function NavBar(){

    return(
   
        <header className="cont">
            <nav className="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/:userId">Profile</Link></li>
                <li><Link to="/login"><button className="btn btn-primary">Login</button></Link></li>
            </nav>
        </header>

       
    )
}