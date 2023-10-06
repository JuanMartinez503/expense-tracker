import { Link } from "react-router-dom";
export default function Error(){

    return(
        <div className="error-cont">
        <div className="home-body">
          <div className="text-center">
            <h2>Oops! Page Not Found</h2>
            <p>The page you are looking for might have been removed or doesn't exist.</p>
            <Link to="/" className="btn btn-warning">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
    
}