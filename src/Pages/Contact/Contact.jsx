import React, { useState } from "react";
import "../../Style/contact.css";
import emailjs from 'emailjs-com'; 
import { emailValidator } from '../../utils/emailValidator';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import contact from "../../resources/contact.png";
import { Helmet } from 'react-helmet';

export default function BoardMember() {
    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [address, setAddress]= useState("");
    const [phoneNo, setPhoneNo]= useState("");
    const [comment, setComment]= useState("");

    const navigate = useNavigate();

    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleAddress = (e) => {
        setAddress(e.target.value);
    };
    const handlePhoneNo = (e) => {
        setPhoneNo(e.target.value);
    };
    const handleComment = (e) => {
        setComment(e.target.value);
    };

    const handleSendEmail = (e) => {
        e.preventDefault();
        console.log("click");
        try {
             if (emailValidator(email) !== '') {
                alert(emailValidator(email));
                return;
            }
            emailjs.send(
                "service_1s1rl1u",
                "template_1lbx6lr",
                {
                    to_email: "Elliot@ejsequities.com",
                    to_name: "ejs-equities",
                    from_name: name,
                    email_id: email,
                    phone_no: phoneNo,
                    address: address,
                    comment:comment
                },
                "FVOJhVeSzoim1IqjY"
            ).then((response) => {
                if(response.status===200){
                    console.log("success");
                    navigate("/contact");
                }
                else if(response.status===408){
                    console.log("something went wrong");
                }
                alert("Form Submitted Successfully");
                console.log('Email sent successfully:', response);
                setName("");
                setEmail("");
                setAddress("");
                setPhoneNo("");
                setComment("");
            }).catch((error) => {
                console.error('Email sending failed:', error);

                alert("Failed to Submit form!");
            }); 
            } catch (e) {
                console.log('Catch Error -- ', e);
            }
    };
    return (
        <>
            <Helmet>
                <meta charSet="UTF-8" />
                <title>Contact EJS Equities | Your Trusted Property Management in Bronx, Queens & New York</title>
                <meta name="description" content="Discover seamless property management with EJS Equities, your reliable partner in the Bronx, Queens, and New York City." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://ejsequities.com/contact" />
            </Helmet>
            <Navbar/>
            <div className="backgroundNavbar"></div>
            <div className="contactContainer">
                <img src={contact} alt="" />
                <form onSubmit={handleSendEmail} className="formContainer">
                    <h2>Contact Form</h2>
                    <div className="container">
                        <div className="box">
                            <div>
                                <label>Full Name</label>
                                <input type="text" value={name} onChange={handleName}
                                 placeholder="Enter your full name" required/>
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="email" value={email} onChange={handleEmail}
                                 placeholder="Enter your email address"required />
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <label>Address</label>
                                <input type="text" value={address} onChange={handleAddress}
                                 placeholder="Enter your address" required/>
                            </div>
                            <div>
                                <label>Phone Number</label>
                                <input type="text" value={phoneNo} onChange={handlePhoneNo}
                                 placeholder="Enter your phone number" required/>
                            </div> 
                        </div>
                        <div className="comment">
                            <label>Add Comments <span>(optional)</span></label>
                            <input type="text" value={comment} onChange={handleComment}
                            placeholder="Add your comment" />
                        </div>
                    </div>
                    <button className="submit">Submit</button>
                </form>
            </div>
            <Footer/>
        </>
    );
}
