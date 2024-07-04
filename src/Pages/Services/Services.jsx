import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "../../Style/services.css";

import Footer from "../../Components/Footer/Footer"
import relation from "../../resources/relation.jfif";
import leasing from "../../resources/leasing.jfif";
import repair from "../../resources/repair.png";
import financial from "../../resources/financial.jfif";
import complains from "../../resources/complains.jfif";
import guide from "../../resources/guide.jfif";

export default function Services() {
    const services=[
        {   img:guide,
            title:"Comprehensive Property Management",
            parah:"We offer a full suite of property management services tailored to meet the unique needs of each property owner. Our comprehensive approach ensures that your property operates smoothly and efficiently."
        },
        {   img:relation,
            title:"Tenant Relations",
            parah:"We handle all aspects of tenant relations, including screening, lease management, and conflict resolution. Our goal is to foster positive relationships with tenants, ensuring long-term occupancy and satisfaction."
        },
        {   img:repair,
            title:"Maintenance and Repairs",
            parah:"Our team coordinates all necessary maintenance and repairs, ensuring that your property remains in excellent condition. We work with trusted contractors to provide prompt and reliable service."
        },
        {   img:financial,
            title:"Financial Management",
            parah:"We provide detailed financial reporting and management services, including rent collection, expense tracking, and budget planning. Our transparent approach keeps you informed and in control of your investment."
        },
        {   img:complains,
            title:"Legal Compliance",
            parah:"Navigating property regulations can be complex. We ensure that your property complies with all local, state, and federal laws, including handling inspections, permits, and legal documentation."
        },
        {   img:leasing,
            title:"Marketing and Leasing",
            parah:"We use targeted marketing strategies to attract and retain high-quality tenants. Our leasing services include property showings, lease negotiations, and contract execution."
        }
    ]

    return(
        <>
            <Navbar/>
            <div className="navBackGround"></div>
            <div className="serviceConatiner">
                <h3>Services</h3>
                <div className="boxes">
                    {
                        services.map((service, index)=>{
                            return(
                            <div key={index} className="box">
                                <div className="about">
                                    <img src={service.img} alt="" />
                                    <h6>{service.title}</h6>
                                    <p>
                                        {service.parah}
                                    </p>
                                </div>
                            </div >
                            )
                        })
                    }
                    
                </div>
                <div className="belowContainer">
                    <p>
                        <span>#### Emergency Response</span>
                    Our team is available 24/7 to handle emergencies and urgent issues, providing peace of mind that your property is always protected and managed effectively.
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    );
}