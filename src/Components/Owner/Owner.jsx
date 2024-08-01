import React, { useState } from "react";
import "../../Style/formNavbar.css";
import FormNavbar from "../../Components/FormNavbar/FormNavbar";
import emailjs from 'emailjs-com'; 
import { emailValidator } from '../../utils/emailValidator';
import FormFooter from "../../Components/FormFooter/FormFooter";
import { useNavigate } from 'react-router-dom';

export default function Owner() {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: ""
    });

    const questions = [
        { id: 1, text: "What’s your full name?" },
        { id: 2, text: "What’s your email address?" },
        { id: 3, text: "What’s your building address?" },
        { id: 4, text: "What’s your contact number?" },
        { id: 5, text: "What’s your message?" },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSendEmail = (e) => {
        e.preventDefault();
        setCurrentQuestion(currentQuestion + 1);
        console.log("click");
        try {
             if (currentQuestion===2 && emailValidator(formData.answer2) !== '') {
                alert(emailValidator(formData.answer2));
                return;
            }
            if(currentQuestion===questions.length){
                emailjs.send(
                    "service_1s1rl1u",
                    "template_1lbx6lr",
                    {
                        to_email: "Elliot@ejsequities.com",
                        to_name: "ejs-equities",
                        from_name: formData.answer1,
                        email_id: formData.answer2,
                        address: formData.answer3,
                        contactNo: formData.answer4,
                        message: formData.answer5,
                        comment:""
                    },
                    "FVOJhVeSzoim1IqjY"
                ).then((response) => {
                    if(response.status===200){
                        console.log("success");
                        navigate("/");
                    }
                    else if(response.status===408){
                        console.log("something went wrong");
                    }
                    alert("Form Submitted Successfully");
                    console.log('Email sent successfully:', response);
                    setFormData({ ...formData, answer1: "", answer2: "", answer3: "" });
                }).catch((error) => {
                    console.error('Email sending failed:', error);

                    alert("Failed to Submit form!");
                }); 
            }
            
            } catch (e) {
                console.log('Catch Error -- ', e);
            }
    };

    if (currentQuestion < 1 || currentQuestion > questions.length) {
        return null; 
    }

    const isEmailQuestion = currentQuestion === 2;
    const isGmail = formData.answer2.toLowerCase().trim().endsWith("@gmail.com");
    const progress = Math.ceil((currentQuestion / (questions.length +1)) * 100);

    return (
        <>
            <FormNavbar path="/get-started"/>
            <form onSubmit={handleSendEmail} className="getStartedContainer">
                <label htmlFor={`answer${currentQuestion}`}>
                    {questions[currentQuestion - 1].text}
                </label>
                <div className="form-section">
                    <input
                        type={currentQuestion === 2 ? 'email' : 'text'}
                        onChange={handleChange}
                        name={`answer${currentQuestion}`}
                        value={formData[`answer${currentQuestion}`]}
                        required
                    />
                     <button
                        className="nextbtn"
                        type="submit"
                        style={{
                            background: isEmailQuestion ? (isGmail ? "#74DAFF" : "#e8e8e8") : (formData[`answer${currentQuestion}`].length > 0 ? "#74DAFF" : "#e8e8e8"),
                            color: isEmailQuestion ? "black" : (formData[`answer${currentQuestion}`].length > 0 ? "black" : "#adadad")
                        }}
                    >
                        {currentQuestion === questions.length ? 'Submit' : 'Next'}
                    </button>
                </div>
            </form>
            <FormFooter progress= {progress}/>
        </>
    );              
}
