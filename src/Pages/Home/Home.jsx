import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Offer from "../../Components/Offer/Offer";
import { AboutUs } from "../../Components/AboutUs/AboutUs";
import { Link } from "react-router-dom";

import btnlogo from "../../resources/btn-logo.png";
import { ExpertAdviceContainer } from "../../Components/ExpertAdvice/ExpertAdvice";
import { WhyChoose } from "../../Components/WhyChoose/WhyChoose";
import Footer from "../../Components/Footer/Footer";
import Work from "../../Components/Work/Work";

export default function Home() {
    return(
        <>
            <Navbar/>
            <div className="hero-section">
                <div className="box">
                    <div className="about">
                        <h5>Welcome to <span>EJS Equities</span></h5>
                        <h1 className="title">  
                            Your Trusted Partner in  
                            <span> Property Management</span>
                        </h1>
                    </div>
                    <div className="apply">
                        <p>
                            <span>Elevating property management with unparalleled</span>
                            <span> service and dedication</span>
                        </p>
                        <Link to="/get-started">
                            <button className="applyBtn">
                                Apply Now <img src={btnlogo} alt="btnlogo" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Offer/>
            <Work/> 
            <AboutUs/>
            <ExpertAdviceContainer/>
            <WhyChoose/>
            <Footer/>
        </>
    );
}