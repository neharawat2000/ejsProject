import React from "react";
import "../../Style/whyChoose.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from "react-router-dom";

import { FaCheck } from "react-icons/fa6";
import building from "../../resources/building.png"
import btn_logo_black from "../../resources/btn_logo_black.png";

export function WhyChoose() {
    return(
        <>
        <AnimationOnScroll 
        animatePreScroll={false}
        duration={0.5} 
        initiallyVisible={false}
        animateIn="animate__fadeInUp">
            <div className="whyChooseContainer mb-[1px]">
                <div className="first_section">
                    <div className="contentSection">
                        <AnimationOnScroll 
                        animatePreScroll={false}
                        duration={0.5} 
                        initiallyVisible={false}
                        animateIn="animate__fadeInLeft" 
                        className="about">
                            <h3>
                                Why Choose <span>EJS Equities?</span>
                            </h3>
                            <p>
                            At EJS Equities, we understand the unique challenges and opportunities your property faces. That's why we offer tailored management solutions that empower you to achieve your property's full potential with confidence and ease.
                            </p>
                            <div className="options">
                                <h6>Unlock Your Property's Full Potential</h6>
                                <ul className="links">
                                    <li>
                                        <FaCheck className="icon"/>Fast and Efficient Service
                                    </li>
                                    <li>
                                        <FaCheck className="icon"/>Flexible Management Solutions
                                    </li>
                                    <li>
                                        <FaCheck className="icon"/>True Passive Income without the hassle
                                    </li>
                                </ul>
                            </div>
                            <Link to="/get-started">
                            <button className="applyBtn">
                                Apply Now <img src={btn_logo_black} alt="btnlogo" />
                            </button>
                            </Link>
                        </AnimationOnScroll>
                    </div>
                </div>
                <div className="second_section">
                    <img src={building} alt="building-image" />
                </div>
            </div>
        </AnimationOnScroll>
        </>
    );
}