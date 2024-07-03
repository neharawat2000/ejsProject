import React, { useState } from "react";
import "../../Style/formNavbar.css";
import { Link } from "react-router-dom";
import FormNavbar from "../../Components/FormNavbar/FormNavbar";
import emailjs from 'emailjs-com'; 
import { emailValidator } from '../../utils/emailValidator';
import FormFooter from "../../Components/FormFooter/FormFooter";
import logo from "../../resources/companyLogo.png";
import find from "../../resources/find.png";

export default function Renter() {
    // const [currentQuestion, setCurrentQuestion] = useState(1);
    // const [formData, setFormData] = useState({
    //     answer1: "",
    //     answer2: "",
    //     answer3: ""
    // });

    // const questions = [
    //     { id: 1, text: "What’s your full name?" },
    //     { id: 2, text: "What’s your email address?" },
    //     { id: 3, text: "What’s your building address?" }
    // ];

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleSendEmail = (e) => {
    //     e.preventDefault();
    //     setCurrentQuestion(currentQuestion + 1);
    //     console.log("click");
    //     try {
    //         // setIsLoading(true);
    //         if (formData.answer1 === "" || formData.answer2 === "" || formData.answer3 === "") {
    //             // alert("All Fields are required!");
    //             return;
    //         } else if (emailValidator(formData.answer2) !== '') {
    //             alert(emailValidator(formData.answer2));
    //             return;
    //         }
    //         console.log("helo");
    //         emailjs.send(
    //             "service_1s1rl1u",
    //             "template_1lbx6lr",
    //             {
    //                 to_email: "prafullchauhan49@gmail.com",
    //                 to_name: "prafull chauhan",
    //                 from_name: formData.answer1,
    //                 email_id: formData.answer2,
    //                 address: formData.answer3,
    //             },
    //             "FVOJhVeSzoim1IqjY"
    //         ).then((response) => {
    //             if(response.status===200){
    //                 console.log("success");
    //             }
    //             else if(response.status===408){
    //                 console.log("something went wrong");
    //             }
    //             alert("Form Submitted Successfully");
    //             console.log('Email sent successfully:', response);
    //             setFormData({ ...formData, answer1: "", answer2: "", answer3: "" });
    //         }).catch((error) => {
    //             console.error('Email sending failed:', error);

    //             alert("Failed to Submit form!");
    //         });            ;
    //     } catch (e) {
    //         console.log('Catch Error -- ', e);
    //     }
    // };

    // if (currentQuestion < 1 || currentQuestion > questions.length) {
    //     return null; 
    // }

    // const isEmailQuestion = currentQuestion === 2;
    // const isGmail = formData.answer2.toLowerCase().trim().endsWith("@gmail.com");

    return (
        <>
            <FormNavbar />
            <form className="getStartedContainer">
                <h1>What brings you to Daisy?</h1>
                <div className="section">
                    <div className="square">
                    <img src={find} alt="" style={{height:"100px", width:"100px"}}/>
                        <p>I’d like to learn a bit more</p>
                    </div>
                    <div className="square">
                        <img src={logo} alt="" style={{background: "#00162f"}}/>
                        <p>I live in a EJS-Eqities building</p>
                    </div>
                </div>
            </form>
            <FormFooter/>
        </>
    );
}
