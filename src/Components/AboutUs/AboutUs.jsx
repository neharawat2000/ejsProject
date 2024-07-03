import React from "react";
import "../../Style/aboutUs.css";
import succeed from "../../resources/succeed.png"
import btnlogo from "../../resources/btn-logo.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from "react-router-dom";

export function AboutUs() {
    return(
        <>
            <div className="AboutUsContainer">
                <div className="aboveContainer">
                    <AnimationOnScroll 
                    animatePreScroll={false}
                    duration={0.5} 
                    initiallyVisible={false}
                    animateIn="animate__fadeInRight" 
                    className="first_section">
                        <div className="contentSection">
                            <div className="about">
                                <h3>
                                Manage, Enhance & Succeed
                                </h3>
                                <h4>
                                    <span>The Proven Framework Helping</span>
                                    <span> Property Owners for 15+ Years</span>
                                </h4>
                                <p>
                                    Experience unparalleled property management – without the
                                    usual hassles.
                                </p>
                            </div>
                            <Link to="/about">
                                <button className="applyBtn">
                                    About Us <img src={btnlogo} alt="btnlogo" />
                                </button>
                            </Link>
                        </div>
                    </AnimationOnScroll >

                    <AnimationOnScroll 
                    animatePreScroll={false}
                    duration={0.5} 
                    initiallyVisible={false}
                    animateIn="animate__fadeInLeft" 
                    className="second_section">
                        <img src={succeed} alt="building-image" />
                    </AnimationOnScroll >
                </div>
                <AnimationOnScroll 
                animatePreScroll={false}
                duration={0.5} 
                initiallyVisible={false}
                animateIn="animate__fadeInUp" 
                className="belowContainer">
                    <p>
                    At EJS Equities, we are dedicated to providing exceptional property management services tailored to meet the specific needs of NYC property owners. Partner with us and experience the difference of professional, reliable, and personalized property management.
                    </p>
                </AnimationOnScroll>
            </div>
        </>
    );
}