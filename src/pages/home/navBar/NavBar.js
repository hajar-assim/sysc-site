import { Link } from "react-router-dom";
import "./NavBar.css"; 
import HelpPopUp from "../../calculator/contactPop";
import { useState } from "react";

const NavBar = () => {

    const [buttonPopUp, setButtonPopUp] = useState(false);

    const handleClick = () => {
        setButtonPopUp(true);
    }

    return(
        <div className="navbar">
            <div className="leftside"> 
                <Link>sysc</Link>
             </div>
            <div className="center">
                <Link to="/">home</Link>
                <Link to="/courses">courses</Link>
                <Link to="/resources">resources</Link>
                <Link to="/calculator">gpa calculator</Link>
                <Link to="/faq">faq</Link>
                </div>
                
            <div className="rightside">
                <button className="button" on onClick={handleClick}> contact</button>
            </div>
            <HelpPopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}> </HelpPopUp>

            

        </div>

    );
}



export default NavBar;