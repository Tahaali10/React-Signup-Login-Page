import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginSignup.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginSignup = () => {
    const [action, setAction] = useState("Login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (action === "Sign Up") {
            // Handle sign up logic here
            // For example, call an API to create a new user
            console.log("Signing up with:", { name, email, password });
            setAction("Login"); // Switch to Login after sign up
        } else {
            // Handle login logic here
            // For example, call an API to authenticate the user
            console.log("Logging in with:", { email, password });
            navigate("/pdfUpload");
        }
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? null : (
                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input 
                            type="text" 
                            placeholder="Name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </div>
                )}
                
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
            </div>
            {action === "Sign Up" ? null : (
                <div className="forgot-password">
                    Haven't Created an Account? <span onClick={() => setAction("Sign Up")}>Click Here for Signup!</span>
                </div>
            )}
            
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Login</div>
            </div>
            <div className="submit-button" onClick={handleSubmit}>Submit</div>
        </div>
    );
};

export default LoginSignup;
