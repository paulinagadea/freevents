import React from 'react';
import Button from "@material-ui/core/Button"

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "./Alert";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };
  
  // recuperar contraseña
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError('We sent you an email. Check your inbox')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="#">
      {error && <Alert message={error} />}

      <form
        onSubmit={handleSubmit}
        className="#"
      >
        <div className="#">
          <label
            htmlFor="email"
            className="#"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            className="#"
            placeholder="youremail@company.tld"
          />
        </div>
        <div className="#">
          <label
            htmlFor="password"
            className="#"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className="#"
            placeholder="*************"
          />
        </div>

        <div className="#">
          <button
            className="#"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="#"
            href="#!"
            onClick={handleResetPassword}
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <button
        onClick={handleGoogleSignin}
        className="#"
      >
        Google login
      </button>
      <p className="#">
        Don't have an account?
        <Link to="/userregister" className="#">
          Register
        </Link>
      </p>
    </div>
  );
}
