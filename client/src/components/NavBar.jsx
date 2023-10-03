import { Link } from "react-router-dom";
import Auth from "../utils/auth";
export default function NavBar() {
  return (
    <header className="cont">
      <nav className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/:userId">Profile</Link>
        </li>
        <div>
          {Auth.loggedIn() ? (
            <li>
            
              <button className="btn btn-danger">Logout</button>
            </li>
        
          ) : ( <li>
            <Link to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
          </li>
           
          )}
        </div>
      </nav>
    </header>
  );
}
