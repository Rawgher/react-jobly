import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="Nav">
      <div className="Nav-left">
        <Link to="/" className="Nav-link">
          Jobly Home
        </Link>
      </div>
      <div className="Nav-right">
        <Link to="/companies" className="Nav-link">
          Companies
        </Link>
        <Link to="/jobs" className="Nav-link">
          Jobs
        </Link>
        <Link to="/profile" className="Nav-link">
          View Profile
        </Link>
      </div>
    </div>
  );
}

export default Nav;
