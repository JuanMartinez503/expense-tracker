import { Link } from "react-router-dom";
import Auth from "../utils/auth";
export default function NavBar() {
  return (
    <header className="cont">
      <nav className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <div>
          {Auth.loggedIn() ? (
            <li>
              <Link to={"/" + Auth.getProfile().data.username.username}>
                Profile
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login">Profile</Link>
            </li>
          )}
        </div>

        <div>
          {Auth.loggedIn() ? (
            <li>
              <button className="btn btn-danger" onClick={() => Auth.logout()}>
                Logout
              </button>
            </li>
          ) : (
            <li>
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
