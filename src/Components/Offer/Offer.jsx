import React from "react";
import "../../Style/offer.css";

import service from "../../resources/service.png";
import support from "../../resources/support.png";
import maintenance from "../../resources/maintenance.png";
import satisfaction from "../../resources/satisfaction.png";

export default function Offer() {

    const offers=[
        {
            title:"Personalized Service",
            subTitle:"Tailored Property Solutions",
            parah:"Rent Collection & Financial Reporting, Legal Compliance and Violation Removal Services. All solutions are tailored based on your requirements.",
            img:service
        },
        {
            title:"24/7 Support",
            subTitle:"Around-the-Clock Assistance",
            parah:"We are always available to address any emergencies or concerns, ensuring your tenants are taken care of day and night.",
            img:support
        },
        {
            title:"Expert Maintenance",
            subTitle:"Professional Maintenance",
            parah:"Our proactive maintenance services and prompt response to emergencies keep your property in top condition, ensuring tenant satisfaction.",
            img:maintenance
        },
        {
            title:"Tenant Satisfaction",
            subTitle:"Enhanced Tenant Experience",
            parah:"Careful Tenant Screening: We meticulously screen potential tenants to ensure they are reliable and responsible, giving you peace of mind.",
            img:satisfaction
        }
    ];

    return(
        <>
            <div className="offerContainer">
                <div className="titleSection">
                    <h2>What we <span>offer</span></h2>
                </div>
                <div className="boxSection">
                    {
                        offers.map((offer, index)=>{
                            return(
                                <div className="box">
                                    <img src={offer.img} alt="" />
                                    <div className="content">
                                            <div className="heading">
                                                <div className="title">
                                                {offer.title}
                                            </div>
                                            <div className="sub_title">
                                                {offer.subTitle}
                                            </div>
                                        </div>
                                        <p>
                                            {offer.parah}
                                        </p>
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