import React from "react";
import CountUp from 'react-countup';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../../Style/aboutUs.css'

export default function CountUpSection() {
    return(
        <>
        <AnimationOnScroll 
        animatePreScroll={false}
        duration={1.5} 
        initiallyVisible={false}
        animateIn="animate__fadeInUp">
            <div className="countContainer flex gap-4 justify-evenly w-100% mb-[5.5rem] text-white py-[3rem] font-[500] items-start ">
                <div className="flex flex-col items-center gap-2 item-[16px]">
                    <span><CountUp start={0} end={13} delay={1} enableScrollSpy={true} suffix={"+"} />
                    Years of Experience</span>
                    <span className="text-[1.5rem] font-[700] leading-[20px]">FULL-SERVICE</span>
                    <span>PROPERTY MANAGEMENT</span>
                </div>
                <div className="flex flex-col items-center gap-2 item-[16px]">
                    <span>Our Properties Managed</span>
                    <span className="flex gap-2 text-[1.5rem] font-[700] leading-[20px]">
                        <CountUp start={0} end={300} delay={1} enableScrollSpy={true} suffix={"+"} /> UNITS
                    </span>
                    <span>Efficiently Managed Per Year</span>
                </div>
                <div className="flex flex-col items-center gap-2 item-[16px]">
                    <span>Client Satisfaction</span>
                    <CountUp className="text-[1.5rem] font-[700] leading-[20px]" start={0/0} end={4.8/5.0} delay={1} enableScrollSpy={true} />
                    <span>Average Rating</span>
                </div>
                <div className="flex flex-col items-center gap-2 item-[16px]">
                    <span>Save Time</span>
                    <span className="flex gap-2 text-[1.5rem] font-[700] leading-[20px]">
                        <CountUp className="text-[1.5rem]" start={0} end={20} delay={1} enableScrollSpy={true} suffix={"+"} /> HOURS 
                    </span>
                    <span>Per Week</span>
                </div>
            </div>
        </AnimationOnScroll>
        </>
    );
}