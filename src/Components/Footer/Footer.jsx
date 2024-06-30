import React from "react";
import "../../Style/footer.css";
import logo from '../../resources/companyLogo.png';

export default function Footer() {
    return(
        <>
            <footer>
                <div className="container">
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
                        <div className="address">
                            <span>USA</span>
                            <p>Suite # 1105, 38 Dan Leckie Way Toronto M5V 2V6, Canada</p>
                        </div>
                    </div>
                </div>
                <div className="secondContainer">
                    <div className="first">
                        <div className="company">
                            <img src={logo} alt="logo" />
                            <button className="letWorkBtn">
                                LETS WORK
                            </button>
                        </div>
                        <div className="connect">
                            <div className="address">
                                <span>USA</span>
                                <p>Suite # 1105, 38 Dan Leckie Way Toronto M5V 2V6, Canada</p>
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
                            <p>Privacy Policy</p>
                            <p>Terms & Conditions</p>
                        </div>
                        <p>Nestshield 2023 © | All Rights Reserved</p>                       
                    </div>
                </div>
            </footer>
        </>
    );
}