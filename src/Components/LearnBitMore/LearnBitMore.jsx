import React, { useState } from "react";
import "../../Style/formNavbar.css";
import FormNavbar from "../../Components/FormNavbar/FormNavbar";
import emailjs from 'emailjs-com'; 
import { emailValidator } from '../../utils/emailValidator';
import FormFooter from "../../Components/FormFooter/FormFooter";
import { useNavigate } from 'react-router-dom';

export default function LearnBitMore() {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        answer1: "",
        answer2: "",
        answer3: ""
    });

    const questions = [
        { id: 1, text: "Please share a bit more?" },
        { id: 2, text: "What’s your full name?" },
        { id: 3, text: "What’s your email address?" }
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
             if (currentQuestion===3 && emailValidator(formData.answer3) !== '') {
                alert(emailValidator(formData.answer3));
                return;
            }
            if(currentQuestion===3){
                emailjs.send(
                    "service_1s1rl1u",
                    "template_1lbx6lr",
                    {
                        to_email: "Elliot@ejsequities.com",
                        to_name: "ejs-equities",
                        comment: formData.answer1,
                        from_name: formData.answer2,
                        email_id: formData.answer3,
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

    const isEmailQuestion = currentQuestion === 3;
    const isGmail = formData.answer3.toLowerCase().trim().endsWith("@gmail.com");

    const progress = Math.ceil((currentQuestion / (questions.length +1)) * 100);

    return (
        <>
            <FormNavbar path="/get-started/renter"/>
            <form onSubmit={handleSendEmail} className="getStartedContainer">
                <label htmlFor={`answer${currentQuestion}`}>
                    {questions[currentQuestion - 1].text}
                </label>
                <div className="form-section">
                    {
                        currentQuestion === 1? <textarea 
                        onChange={handleChange} 
                        name={`answer${currentQuestion}`} required
                        rows="6">{formData[`answer${currentQuestion}`]}</textarea>
                        : <input
                        type={currentQuestion === 3 ? 'email' : 'text'}
                        onChange={handleChange}
                        name={`answer${currentQuestion}`}
                        value={formData[`answer${currentQuestion}`]}
                        required
                        />
                    }
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
