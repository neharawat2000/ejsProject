import React from "react";
import "../../Style/expertAdvice.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from "react-router-dom";

import btnlogo from "../../resources/btn-logo.png";
import expertManagement from "../../resources/expertManagement.png";
import diamond from "../../resources/diamond.png";

export function ExpertAdviceContainer() {
 
    return(
        <>
            <div className="expertContainer">
                <AnimationOnScroll 
                animatePreScroll={false}
                duration={0.5} 
                initiallyVisible={false}
                animateIn="animate__fadeInLeft"
                 className="first_section">
                    <div className="contentSection">
                        <div className="about">
                            <h3>
                                Get 1-2-1 advice 
                                <span> from an in-house team</span>
                                of experts on
                                property management
                            </h3>
                            <p>
                            <span>Facing property management challenges? </span>Get personalized advice from our experts and
                            address maintenance needs, tenant satisfaction, marketing strategies, financial planning, and
                            operational efficiency with customized solutions
                            </p>
                            <div className="section">
                                <h5>Information Needed</h5>
                                <div className="boxes">
                                    <div className="box">
                                        <h6>Personal Info</h6>
                                        <p>To Verify Identity</p>
                                    </div>
                                    <div className="box">
                                        <h6>Property Info</h6>
                                        <p>For Verification</p>
                                    </div>
                                    <div className="box">
                                        <h6>Financial Outlook</h6>
                                        <p>To Evaluate Revenue</p>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll 
                animatePreScroll={false}
                duration={0.5} 
                initiallyVisible={false}
                animateIn="animate__fadeInRight"
                className="second_section">
                    <AnimationOnScroll 
                    animatePreScroll={false}
                    duration={0.5} 
                    initiallyVisible={false}
                    animateIn="animate__zoomIn"
                    className="container">
                        <div className="diamomd">
                            <img src={diamond} />
                        </div>
                        <div className="gridContainer">
                            <div className="first"></div>
                            <div className="second">
                                <img src={expertManagement}/>
                            </div>
                            <div className="third">
                                <p>
                                Get Started in Minutes
                                and See Your Options
                                </p>
                                <Link to="/get-started">
                                <button className="applyBtn">
                                   Apply Now <img src={btnlogo} alt="btnlogo" />
                                </button>
                                </Link>
                            </div>
                            <div className="fourth">
                                <h3>5 Min.</h3>
                                <p>Application
                                Process</p>
                            </div>  
                        </div>
                    </AnimationOnScroll>                    
                </AnimationOnScroll>
            </div>
        </>
    );
}