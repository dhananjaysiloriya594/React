import React, { useState } from "react";
import "./Signup.css";

function Signup() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();


    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);

  
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create Account</h2>
        <p className="signup-subtitle">Join us and start your journey</p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Full Name" 
            required 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)}
          />

          <input 
            type="email" 
            placeholder="Email" 
            required 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />

          <input 
            type="password" 
            placeholder="Password" 
            required 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />

          <input 
            type="password" 
            placeholder="Confirm Password" 
            required 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit">Sign Up</button>
        </form>

        <p className="signup-footer">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
