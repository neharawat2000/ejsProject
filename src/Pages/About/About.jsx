import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { FaCheck } from "react-icons/fa6";
import building from "../../resources/building.png"
import btn_logo_black from "../../resources/btn_logo_black.png";

import Navbar from "../../Components/Navbar/Navbar";



import "../../Style/aboutSection.css";
import "../../Style/whyChoose.css";



export default function About() {
    return(
        <>
            <Navbar/>
            <div className="aboutContainer">
                <div className="box">
                    <div className="about">
                        <h2>About Us</h2>
                        <p>
                            Welcome to EJS Equities, your premier property management company in New York. At EJS Equities, we pride ourselves on providing a white-glove service that transforms property ownership into a seamless and stress-free experience. Our commitment to excellence and personalized attention ensures that every aspect of property management is handled with the utmost care, allowing our clients to enjoy truly passive income without the hassle.
                        </p>
                        <p>
                            Our team of experienced professionals is dedicated to maintaining and enhancing the value of your property. From routine maintenance to tenant relations, we take care of it all, so you don't have to. With EJS Equities, you can rest assured that your property is in good hands, receiving the best possible care and attention.
                        </p>
                    </div>
                </div>
                <div className="whyChooseContainer">
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
                                <p style={{textAlign:"left"}}>
                                Choosing EJS Equities means partnering with a company that values excellence, integrity, and personalized service. We understand the importance of your investment and are committed to maximizing its value while minimizing your stress. Let us take care of your property so you can enjoy the benefits of passive income without the headaches.
                                </p>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className="second_section">
                        <img src={building} alt="building-image" />
                    </div>
                </div>
            </div>
            

        </>
    );
}