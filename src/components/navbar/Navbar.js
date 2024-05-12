import {NavLink} from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.css";

const Navbar = () => {

    const activeLink = "nav-list__link nav-list__link--active";
    const normalLink = "nav-list__link";

    return ( 
    <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <NavLink to="/" className="logo"><strong>Freelancer</strong> portfolio</NavLink>
                
                <ul className="nav-list">
                    <li className="nav-list__item"><NavLink to="/" className={(props)=>props.isActive ? activeLink : normalLink}>Home</NavLink></li>
                    <li className="nav-list__item"><NavLink to="/projects" className={(props)=>props.isActive ? activeLink : normalLink}>Projects</NavLink></li>
                    <li className="nav-list__item"><NavLink to="/contacts" className={(props)=>props.isActive ? activeLink : normalLink}>Contacts</NavLink></li>
                    <BtnDarkMode/>
                </ul>
            </div>
        </div>
    </nav>
    );
}
    
export default Navbar;