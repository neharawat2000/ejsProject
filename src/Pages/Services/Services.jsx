import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "../../Style/services.css";

import { AnimationOnScroll } from 'react-animation-on-scroll';

import Footer from "../../Components/Footer/Footer"
import relation from "../../resources/relation.jfif";
import leasing from "../../resources/leasing.jfif";
import repair from "../../resources/repair.png";
import financial from "../../resources/financial.jfif";
import complains from "../../resources/complains.jfif";
import guide from "../../resources/guide.jfif";
import { Helmet } from 'react-helmet';

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
            <Helmet>
                <meta charSet="UTF-8" />
                <title>Comprehensive Property Management Services | EJS Equities</title>
                <meta name="description" content="Get comprehensive services for property management, tenant relations, maintenance and repairs, financial management, legal compliance, and marketing and leasing with EJS Equities. " />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://ejsequities.com/services" />
            </Helmet>
            <Navbar/>
            <div className="navBackGround flex items-center">
                <div className="flex flex-col pl-[4rem] gap-8 mt-[4rem]">
                        <h1 className="flex flex-col gap-2 leading-[35px] text-[2rem] text-white">Property Management Excellence: 
                            <span className="text-[#C2EAFF]">Tailored Services for Optimal Efficiency</span>
                        </h1>
                        <p className="text-[#EAF5FF]">We provide a full suite of customised property management services designed to meet the unique needs of each property owner, ensuring smooth and efficient operations.</p>
                </div>
            </div>
            <div className="serviceConatiner">
                <div className="flex flex-col items-center gap-4">
                    <h3>Services</h3>
                </div>
                <AnimationOnScroll 
                animatePreScroll={false}
                duration={1.5} 
                initiallyVisible={false}
                animateIn="animate__fadeInUp">
                    <div className="boxes">
                        {
                            services.map((service, index)=>{
                                return(
                                <AnimationOnScroll 
                                duration={3}
                                animateIn='animate__flipInY'
                                initiallyVisible={false}
                                key={index} className="box">
                                    <div className="about">
                                        <img src={service.img} alt="" />
                                        <h6>{service.title}</h6>
                                        <p>
                                            {service.parah}
                                        </p>
                                    </div>
                                </AnimationOnScroll >
                                )
                            })
                        }
                    </div>
                </AnimationOnScroll>
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