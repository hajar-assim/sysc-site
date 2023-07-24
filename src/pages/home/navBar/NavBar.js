import { Link } from "react-router-dom";
import "./NavBar.css"; 

const NavBar = () => {

    return(
        <div className="navbar">
            <div className="rightside"></div>
                <Link to="/">home</Link>
                <Link to="/years">years</Link>
                <Link to="/references">references</Link>
                <Link to="/calculator">grade calculator</Link>
                <Link to="/faq">faq</Link>
                <Link to="/chatroom">chatroom</Link>

        </div>
    );
}



export default NavBar;