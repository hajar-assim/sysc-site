import { Link } from "react-router-dom";
import "./NavBar.css"; 

const NavBar = () => {

    return(
        <div className="navbar">
            <div className="rightside"></div>
                <Link to="/">home</Link>
                <Link to="/years">years</Link>
                <Link to="/programtree">program trees</Link>
                <Link to="/calculator">calculator</Link>
        </div>
    );
}



export default NavBar;