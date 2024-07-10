import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import proposal from "../../resources/proposal.png";
import { Link } from "react-router-dom";
import time from "../../resources/time.png";
import maintain from "../../resources/maintain.png";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function Scroll(){
    const frameData= [
        {
            img:time,
            title:"24/7 Property Support",
            parah:"Immediate assistance around the clock, ensuring your property is always in expert hands."
        },
        {
            img:maintain,
            title:"Comprehensive Maintenance",
            costDetail:"can cost for you",
            parah:"Immediate assistance around the clock, ensuring your property is always in expert hands."
        }
    ];
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()] )

    return(
        <>
            <div className="embla" ref={emblaRef}>
                <div className='boxes'>
                        <div className="box embla__slide">
                            <h2>Apply Online</h2>
                            <div className="section">
                                <p>
                                    Get started with our quick and easy application portal for seamless property management services.
                                </p>
                                <Link to="/get-started">
                                <button className="letWorkBtn">
                                    LETS WORK
                                </button>
                                </Link>
                            </div>
                        </div>
                        <div className="box proposal embla__slide">
                            <img src={proposal} alt="proposal-img" />
                            <h2>Review Proposals</h2>
                            <button className="letWorkBtn">
                                VIEW MORE
                            </button>
                        </div>
                        <div className="box embla__slide">
                            <h2>Get Started</h2>
                            <div className="section">
                                <p>
                                    Choose your package and begin experiencing our
                                    premium property management services.
                                </p>
                                <Link to="/get-started">
                                    <button className="letWorkBtn"> 
                                        LETS WORK
                                    </button>
                                </Link>
                            </div>
                        </div>
                        {
                            frameData.map((data)=>{
                                return(
                                    <div className="frame embla__slide">
                                        <img src={data.img} alt="24hr-image"/>
                                        <div className="section">
                                            <h6>
                                                {data.title}
                                            </h6>
                                            <p>{data.parah}</p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                </div>
            </div> 
        </>
        
    );
}