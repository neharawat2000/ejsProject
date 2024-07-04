import React from "react";
import "../../Style/formNavbar.css";
import FormNavbar from "../../Components/FormNavbar/FormNavbar";
import download from "../../resources/download.png";
import scan from "../../resources/scan.svg";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa6";

export default function DownLoadApp() {
   
    return (
        <>
            <FormNavbar />
            <div className="downloadContainer">
                <img src={download} alt="" />
                <div className="secondContainer">
                    <h3>Looking for help with
                    something specific?</h3>
                    <p>
                    Download the EJS-EQUITIES App to submit a request, get building updates, make payments and more.
                    </p>
                    <img src={scan} alt="scanner" className="scan" />
                    <div className="socialMedia">
                        <p>Stay up to date:</p>
                        <div className="media">
                            <div>
                                <PiInstagramLogoFill className="icon"/>
                            </div>
                            <div>
                                <FaLinkedinIn
                                 className="icon"/>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </>
    );
}
