import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaUser,
  FaPhone,
  FaBuilding,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";


import logo from "/favicon-logo.png";

export default function SignupDetails() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Full Name validation
    if (!fullName.trim()) {
      alert("Please enter your full name");
      return;
    }

    // Company validation
    if (!company.trim()) {
      alert("Please enter your company name");
      return;
    }

    // Password validation
    if (password && password.length < 8) {
      alert("Password must contain at least 8 characters");
      return;
    }

    // Confirm password validation
    if (password && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Save signup details
    const signupData = {
      fullName,
      phone,
      company,
      password,
    };

    console.log("Signup Data:", signupData);

    // Go to Checkout page
    navigate("/pricing");
  };

  return (
    <div className="setup-page">

      {/* LOGO */}
      <div className="setup-logo-row">
        <img
          src={logo}
          alt="Sbros Tech Logo"
          className="setup-logo"
        />

        <span className="setup-logo-text">
          Sbros Tech Pvt.Ltd.
        </span>
      </div>

      {/* CARD */}
      <div className="setup-card">

        <h1 className="setup-title">
          Finish setting up
        </h1>

        <p className="setup-subtitle">
          Just a few more details and you're ready to pick a plan.
        </p>

        <form onSubmit={handleSubmit} autoComplete="off">

          {/* FULL NAME */}
          <div className="setup-field">
            <label htmlFor="fullName">
              Full Name
            </label>

            <div className="setup-input-wrapper">
              <FaUser className="setup-field-icon" />

              <input
                id="fullName"
                name="signup-fullname"
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                autoComplete="off"
              />
            </div>
          </div>

          {/* PHONE */}
          <div className="setup-field">
            <label htmlFor="phone">
              Phone Number
              <span className="optional">
                (optional)
              </span>
            </label>

            <div className="setup-input-wrapper">
              <FaPhone className="setup-field-icon" />

              <input
                id="phone"
                name="signup-phone"
                type="tel"
                placeholder="9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="off"
              />
            </div>
          </div>

          {/* COMPANY */}
          <div className="setup-field">
            <label htmlFor="company">
              Company / Organization Name
            </label>

            <div className="setup-input-wrapper">
              <FaBuilding className="setup-field-icon" />

              <input
                id="company"
                name="signup-company"
                type="text"
                placeholder="ABC Technologies"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                autoComplete="off"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="setup-field">
            <label htmlFor="password">
              Password
              <span className="optional">
                (optional)
              </span>
            </label>

            <p className="password-info">
              Set a password to also be able to log in
              with email + password, not just Google.
            </p>

            <div className="setup-input-wrapper">
              <FaLock className="setup-field-icon" />

              <input
                id="password"
                name="signup-password"
                type={showPassword ? "text" : "password"}
                placeholder="At least 8 characters, 1 letter + 1 number"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
              />

              <button
                type="button"
                className="password-eye"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>
            </div>
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="setup-field">
            <label htmlFor="confirmPassword">
              Confirm Password
            </label>

            <div className="setup-input-wrapper">
              <FaLock className="setup-field-icon" />

              <input
                id="confirmPassword"
                name="signup-confirm-password"
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                autoComplete="new-password"
              />

              <button
                type="button"
                className="password-eye"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
              >
                {showConfirmPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>
            </div>
          </div>

          {/* CONTINUE */}
          <button
            type="submit"
            className="continue-button"
          >
            Continue
          </button>

        </form>
      </div>

      {/* FOOTER */}
      <p className="setup-footer">
        © 2026 Enterprise Software Solutions.
        All rights reserved.
      </p>

    </div>
  );
}