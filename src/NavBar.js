import { Link } from "react-router-dom";

const NavBar = () => {

    return(
        <nav className="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/years">Years</Link></li>
                <li><Link to="/programtree">Program Tree</Link></li>
                <li><Link to="/calculator">Calculator</Link></li>

            </ul>
        </nav>
    );
}



export default NavBar;