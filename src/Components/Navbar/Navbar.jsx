import React, {useState} from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "../../Style/navbar.css";

import logo from '../../resources/companyLogo.png';
import btnlogo from "../../resources/btn-logo.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return(
        <>
            <nav className="navbar">
                <div className="first">
                    <img src={logo} className="logo" alt="company-logo" />
                    <button className="nav-bar" onClick={toggleMenu}>
                        <FaBars className="icon"/>
                    </button>
                </div>
                <div className="middle" >
                    <div className={`navbar-links ${isOpen ? 'active' : 'second'}`}>
                        <div className="links" >
                            <NavLink to= "/" style={({ isActive }) => ({
                                fontWeight: isActive ? 600 : 400,
                                textDecorationLine:isActive ? "underline" : "none"
                            })}>
                                Home
                            </NavLink>

                            <NavLink to= "/about" style={({ isActive }) => ({
                                fontWeight: isActive ? 600 : 400,
                                textDecorationLine:isActive ? "underline" : "none"
                            })}>
                                About Us
                            </NavLink>

                            <NavLink to= "/services" style={({ isActive }) => ({
                                fontWeight: isActive ? 400 : 400,
                                textDecorationLine:isActive ? "underline" : "none"
                            })}>
                                Services
                            </NavLink>

                            <NavLink to= "/" style={({ isActive }) => ({
                                fontWeight: isActive ? 600 : 400,
                                textDecorationLine:isActive ? "underline" : "none"
                            })}>
                                Contact
                            </NavLink>
                        </div>
                        <div className="last">
                            <Link to="/get-started">
                                <button className="applyBtn">
                                    Apply Now <img src={btnlogo} alt="btnlogo" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}