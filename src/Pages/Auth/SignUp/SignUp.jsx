import React, { useState } from "react";
import './SignUp.css';  // Import the CSS file
import axios from "axios";
const SignUp = () => {
    // State for form fields
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Clear previous error
        setError("");
        
        // Validate email
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        // Check for empty fields
        if (email === "" || password === "" || confirmPassword === "") {
            setError("All fields are required.");
            return;
        }
        axios
            .post("http://localhost:5050/login", { email, password })
            .then((response) => {
                console.log(response.data); // handle success
                setError("Account Created Successfully");
            })
            .catch((error) => {
                console.error("There was an error!", error); // handle error
            });
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form">
                <h2 className="heading">Sign Up</h2>
                <div className="inputGroup">
                    <label htmlFor="Email" className="label">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="input"
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="Password" className="label">Create Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="Password" className="label">Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="input"
                    />
                </div>
                    {error && <p>{error}</p>}
                <div>
                    <button type="submit" className="button">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;




