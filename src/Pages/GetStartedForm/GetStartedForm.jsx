import React from "react";
import "../../Style/formNavbar.css";
import FormNavbar from "../../Components/FormNavbar/FormNavbar";
import { Link } from "react-router-dom";
import FormFooter from "../../Components/FormFooter/FormFooter";

export default function GetStartedForm(){
    return(
        <>
            <FormNavbar path="/"/>
            <div className="getStartedContainer" id="getStarted">
                <h1>Which of the following best describes you?</h1>
                <div className="section">
                    <Link to="/get-started/board-member">
                        <div className="box">Board Member</div>
                    </Link>
                    <div style={{display:"flex", gap:"2rem"}}>
                        <Link to="/get-started/owner">
                            <div className="box">Owner</div>
                        </Link>
                        <Link to="/get-started/renter">
                            <div className="box">Renter</div>
                        </Link>
                    </div>
                </div>
            </div>
            <FormFooter background="#EAF5FF"/>
        </>
    );
}