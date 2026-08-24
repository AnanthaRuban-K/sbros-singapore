import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";


import logo from "/favicon-logo.png";

export default function LoginPage() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    console.log({
      email,
      password,
    });

    // Login API logic can be added here

    navigate("/pricing");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="login-page">

      {/* Logo */}
      <div className="logo-row">
        <img
          src={logo}
          alt="Sbros Tech Logo"
          className="logo-icon"
        />

        <span className="logo-text">
          Sbros Tech Pvt.Ltd.
        </span>
      </div>


      {/* Login Card */}
      <div className="login-card">

        <h1 className="login-title">
          Welcome back
        </h1>

        <p className="login-subtitle">
          Log in to your company dashboard.
        </p>


        {/* Google Login */}
        <button
          type="button"
          className="google-button"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            className="google-icon"
          >
            <path
              fill="#4285F4"
              d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9c1.7-1.57 2.7-3.88 2.7-6.62z"
            />

            <path
              fill="#34A853"
              d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.54-1.84.86-3.06.86-2.35 0-4.34-1.59-5.05-3.72H.9v2.33A9 9 0 0 0 9 18z"
            />

            <path
              fill="#FBBC05"
              d="M3.95 10.7A5.4 5.4 0 0 1 3.67 9c0-.59.1-1.17.28-1.7V4.97H.9A9 9 0 0 0 0 9c0 1.45.35 2.83.9 4.03l3.05-2.33z"
            />

            <path
              fill="#EA4335"
              d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .9 4.97l3.05 2.33C4.66 5.17 6.65 3.58 9 3.58z"
            />
          </svg>

          Sign in with Google
        </button>


        {/* Divider */}
        <div className="divider-row">
          <span className="divider-line" />

          <span className="divider-text">
            OR
          </span>

          <span className="divider-line" />
        </div>


        {/* Login Form */}
        <form onSubmit={handleSubmit} autoComplete="off">

          {/* Email */}
          <label
            className="field-label"
            htmlFor="email"
          >
            Email
          </label>

          <div className="input-wrapper">

            <FaEnvelope
              className="field-icon"
              size={14}
              color="#9CA3AF"
            />

            <input
              id="email"
              name="login-email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="field-input"
              autoComplete="off"
            />

          </div>


          {/* Password */}
          <div className="password-row">

            <label
              className="field-label"
              htmlFor="password"
            >
              Password
            </label>

            <a
              href="#forgot"
              className="forgot-link"
            >
              Forgot password?
            </a>

          </div>


          <div className="input-wrapper">

            <FaLock
              className="field-icon"
              size={14}
              color="#9CA3AF"
            />

            <input
              id="password"
              name="login-password"
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="field-input"
              autoComplete="new-password"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  (s) => !s
                )
              }
              className="eye-button"
              aria-label={
                showPassword
                  ? "Hide password"
                  : "Show password"
              }
            >
              {showPassword ? (
                <FaEyeSlash
                  size={16}
                  color="#9CA3AF"
                />
              ) : (
                <FaEye
                  size={16}
                  color="#9CA3AF"
                />
              )}
            </button>

          </div>


          {/* Login */}
          <button
            type="submit"
            className="login-button"
          >
            Log In
          </button>

        </form>


        {/* Signup */}
        <div className="signup-link-row">

          <span>
            Don't have an account?
          </span>

          <button
            type="button"
            className="signup-link"
            onClick={handleSignup}
          >
            Sign up
          </button>

        </div>

      </div>


      {/* Footer */}
      <p className="login-footer">
        © 2026 Enterprise Software Solutions.
        All rights reserved.
      </p>

    </div>
  );
}