import React from "react";

export default function FormFooter(props){
    return(
        <>
            <footer className="footerForm">
            <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${props.progress}%` , backgroundColor: `${props.background}` }}></div>
            </div>
                <p>
                Let's dive in, this will just take a minute.
                </p>                
            </footer>
        </>
    );
}