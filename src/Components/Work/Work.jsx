import React from "react";
import "../../Style/work.css"
import proposal from "../../resources/proposal.png";
import time from "../../resources/time.png";
import maintain from "../../resources/maintain.png";
 
export default function Work(){
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

    return(
        <>
            <div className="workContainer">
                <div className="title_section">
                    <h3>How we <span>work</span></h3>
                </div>
                <div className="second">
                    <div className="boxes">
                        <div className="box">
                            <h2>Apply Online</h2>
                            <div className="section">
                                <p>
                                    Get started with our quick and easy application portal for seamless property management services.
                                </p>
                                <button className="letWorkBtn">
                                    LETS WORK
                                </button>
                            </div>
                        </div>
                        <div className="box proposal">
                            <img src={proposal} alt="proposal-img" />
                            <h2>Review Proposals</h2>
                            <button className="letWorkBtn">
                                VIEW MORE
                            </button>
                        </div>
                        <div className="box">
                            <h2>Get Started</h2>
                            <div className="section">
                                <p>
                                    Choose your package and begin experiencing our
                                    premium property management services.
                                </p>
                                <button className="letWorkBtn">
                                    LETS WORK
                                </button>
                            </div>
                        </div>
                        <div className="frameContainer">
                            {
                                frameData.map((data)=>{
                                    return(
                                        <div className="frame">
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
                </div>
            </div>
        </>
    );
}