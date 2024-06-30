import React from "react";
import "../../Style/whyChoose.css";
import { FaCheck } from "react-icons/fa6";
import building from "../../resources/building.png"
import btn_logo_black from "../../resources/btn_logo_black.png";

export function WhyChoose() {
    return(
        <>
            <div className="whyChooseContainer">
                <div className="first_section">
                    <div className="contentSection">
                        <div className="about">
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
                            <button className="applyBtn">
                                Apply Now <img src={btn_logo_black} alt="btnlogo" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="second_section">
                    <img src={building} alt="building-image" />
                </div>
            </div>
        </>
    );
}