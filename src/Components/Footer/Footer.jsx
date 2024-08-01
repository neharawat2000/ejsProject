import React from "react";
import "../../Style/footer.css";
import logo from '../../resources/companyLogo.png';
import { Link } from "react-router-dom";

export default function Footer() {
    return(
        <>
            <footer>
                <div className="FooterContainer">
                    <div className="first">
                        <div className="company">
                            <img src={logo} alt="logo" />
                        </div>
                        <ul className="links">
                            <li>Industries</li>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="second">
                        <div className="policy">
                            <p>Privacy Policy</p>
                            <p>Terms & Conditions</p>
                            <p> © Copyright 2024  | All Rights Reserved</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h6 className="text-[1rem]">Our Service Areas</h6>
                            <p className="w-[180px]">queens, staten island, new york, Bronx, Brooklyn</p>
                            <p>Local , Trusted & licensed</p>
                        </div>
                        <div className="address">
                            <span>USA</span>
                            <p>80 Maiden Ln New York NY 10038</p>
                        </div>
                    </div>
                </div>
                <div className="FooterSecondContainer">
                    <div className="first">
                        <div className="company">
                            <img src={logo} alt="logo" />
                            <Link to="/get-started">
                                <button className="letWorkBtn">
                                    LETS WORK
                                </button>
                            </Link>
                        </div>
                        <div className="connect">
                            <div className="address">
                                <span>USA</span>
                                <p>80 Maiden Ln New York NY 10038</p>
                            </div>
                            <ul className="links">
                                <li>Industries</li>
                                <li>About Us</li>
                                <li>Careers</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                    <div className="second">
                        <div className="policy">
                            <div className="flex flex-col gap-2">
                                <p>Privacy Policy</p>
                                <p>Nestshield 2023 © | All Rights Reserved</p>   
                            </div>
                            <div className="flex flex-col gap-2">
                                <h6 className="text-[1.2rem]">Our Service Areas</h6>
                                <p className="w-[180px]">queens, staten island, new york, Bronx, Brooklyn</p>
                                <p>Local , Trusted & licensed</p>
                            </div>
                            <p>Terms & Conditions</p>
                        </div>                    
                    </div>
                </div>
            </footer>
        </>
    );
}