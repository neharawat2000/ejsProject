import React, { useState } from "react";
import "../../Style/formNavbar.css";
import { Link } from "react-router-dom";
import FormNavbar from "../../Components/FormNavbar/FormNavbar";
import emailjs from 'emailjs-com'; 
import { emailValidator } from '../../utils/emailValidator';
import FormFooter from "../../Components/FormFooter/FormFooter";
import logo from "../../resources/companyLogo.png";
import find from "../../resources/find.png";

export default function DownLoadApp() {
   
    return (
        <>
            <FormNavbar />
            <form className="getStartedContainer">
                <h1>What brings you to Daisy?</h1>
                <div className="section">
                    <div className="square">
                    <img src={find} alt="" style={{height:"100px", width:"100px"}}/>
                        <p>I’d like to learn a bit more</p>
                    </div>
                    <div className="square">
                        <img src={logo} alt="" style={{background: "#00162f"}}/>
                        <p>I live in a EJS-Eqities building</p>
                    </div>
                </div>
            </form>
            <FormFooter/>
        </>
    );
}
