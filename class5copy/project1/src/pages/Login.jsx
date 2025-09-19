import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    email:"",
    password:""


     });

const handleChange = (e)=>{
  setformData({...formData,[e.target.name] : e.target.value})
}

  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate("/profile" , {state : formData});

  };



  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Please log in to continue</p>

     
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email" 
            name="email"
            id="email"
            placeholder="Email" 
            required 
            value={formData.email} 
            onChange={handleChange} 
          />

          <input 
            type="password" 
            name="password"
            id="password"
            placeholder="Password" 
            required 
            value={formData.password} 
            onChange={handleChange} 
          />

          <button type="submit">Login</button>
        </form>

        <p className="login-footer">
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
