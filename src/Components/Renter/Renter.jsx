import React from "react";
import "../../Style/formNavbar.css";
import { Link } from "react-router-dom";
import FormNavbar from "../../Components/FormNavbar/FormNavbar";
import FormFooter from "../../Components/FormFooter/FormFooter";
import logo from "../../resources/companyLogo.png";
import find from "../../resources/find.png";

export default function Renter() {
    return (
        <>
            <FormNavbar />
            <div className="getStartedContainer">
                <h1>What brings you to EJS-EQUITIES?</h1>
                <div className="section">
                    <Link to="/learn-bit-more">
                        <button className="square">
                            <img src={find} alt="" style={{height:"100px", width:"100px"}}/>
                            <p>I’d like to learn a bit more</p>
                        </button>
                    </Link>
                    <Link to="/download-app">
                        <button className="square">
                            <img src={logo} alt="" style={{background: "#00162f"}}/>
                            <p>I live in a EJS-EQUITIES building</p>
                        </button>
                    </Link>
                </div>
            </div>
            <FormFooter background="#EAF5FF"/>
        </>
    );
}
