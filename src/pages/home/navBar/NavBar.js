import { Link } from "react-router-dom";
import "./NavBar.css"; 

const NavBar = () => {

    return(
        <div className="navbar">
            <div className="rightside"></div>
                <Link to="/">HOME</Link>
                <Link to="/years">YEARS</Link>
                <Link to="/references">REFERENCES</Link>
                <Link to="/calculator">CALCULATOR</Link>
                <Link to="/faq">FAQ</Link>
        </div>
    );
}



export default NavBar;