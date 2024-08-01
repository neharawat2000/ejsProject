import React from "react";
import logo from "../../resources/companyLogo.png";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function FormNavbar(props){
    return(
        <>
            <nav className="navbarForm">
                <div className="header">
                    <Link to={props.path}>
                        <button className="back">
                            <FaArrowLeft className="icon"/>
                            BACK
                        </button>
                    </Link>
                    <div className="companylogo">
                        <img src={logo} alt="companyLogo" />
                    </div>
                </div>
            </nav>
        </>
    );
}