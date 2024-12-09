import React, { useState } from "react";
import './LoginPage.css'; 
import farmImage from './images/farm.jpg.jpg'; 

const LoginPage = ({ onLogin }) => {
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const hardcodedCredentials = {
    user: { id: "user123", password: "password" },
    admin: { id: "admin123", password: "adminpass" },
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const credentials = isAdminLogin ? hardcodedCredentials.admin : hardcodedCredentials.user;
    if (userID === credentials.id && password === credentials.password) {
      onLogin(); 
      setError(""); 
    } else {
      setError("Invalid ID or Password. Please try again."); 
    }
  };

  return (
    <div className="container">
      {/* Background image with blur effect */}
      <div className="background-blur" style={{ backgroundImage: `url(${farmImage})` }}></div>

      {/* Text and content on top */}
      <div className="image-section">
        <h1>K L Farms</h1>
        <p>Welcome to our farm management system.</p>
      </div>

      <div className="login-form">
        <h2>{isAdminLogin ? "ADMIN LOGIN" : "LOGIN"}</h2>
        <div className="login-type">
          <a
            href="#"
            className={!isAdminLogin ? "active" : ""}
            onClick={() => {
              setIsAdminLogin(false);
              setError("");
              setUserID("");
              setPassword("");
            }}
          >
            User Login
          </a>
          <a
            href="#"
            className={isAdminLogin ? "active" : ""}
            onClick={() => {
              setIsAdminLogin(true);
              setError("");
              setUserID("");
              setPassword("");
            }}
          >
            Admin Login
          </a>
        </div>

        <form onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          <label htmlFor="userID">{isAdminLogin ? "Admin ID" : "User ID"}</label>
          <input
            type="text"
            id="userID"
            placeholder={`Enter your ${isAdminLogin ? "Admin" : "User"} ID`}
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="options">
            <input
              type="checkbox"
              id="showPassword"
              onChange={() => setShowPassword((prev) => !prev)}
            />
            <label htmlFor="showPassword">Show Password</label>
          </div>
          <button type="submit">{isAdminLogin ? "Login as Admin" : "Login"}</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
