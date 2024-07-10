import React from "react";
import "../../Style/work.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


import Scroll from "../Scroll/Scroll";
 
export default function Work(){

    return(
        <>
            <AnimationOnScroll 
            animatePreScroll={false}
            duration={0.5} 
            initiallyVisible={false}
            animateIn="animate__fadeInUp">
                <div className="workContainer">
                    <div className="title_section">
                        <h3>How we <span>work</span></h3>
                    </div>
                    <Scroll/>
                </div>
            </AnimationOnScroll>
        </>
    );
}