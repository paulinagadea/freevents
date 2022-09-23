import React from 'react';
import "./LandingPage.css"
import Button from "@material-ui/core/Button"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "./Alert";
import Typography from '@material-ui/core/Typography';
import google from "../imagenes/google.png"

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: '25ch',
      
    },
  },
}));

export default function Login() {
  //export default function Login({setLog}) {
  const classes = useStyles();
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
       // setLog(user)
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
      // setLog(user)
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
    <div className='container-todo'>

    
    <div className="container-login">
      {error && <Alert message={error} />}

      <form className={classes.root} noValidate autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div classname="google-8" >
          <div>
            <img src={google} width="40px"></img>
          </div>
          <div>
            <Button
            onClick={handleGoogleSignin}
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            >
            Google login
            </Button>
          </div>
        </div>

        <div className="#">
          <TextField
            required
            label="Email"
            type="email"
            name="email"
            id="outlined-required"
            onChange={handleChange}
            variant="outlined"
            placeholder="youremail@company.tld"
          />
        </div>


        <div className="#">
        <TextField
            autoComplete="current-password"
            htmlFor="password"
            type="password"
            name="password"
            id="outlined-password-input"
            label="Password"
            variant="outlined"
            onChange={handleChange}
            
          />
        </div>
        <Typography className={classes.root}>
        <div className="boton">
          <div className="boton-sign">
          <Button
            
            variant="outlined" 
            color="primary"
            type="submit"
          >
            Sign In
          </Button>
          </div>
          <div className="boton-sign">
          <Link
            className="#"
            href="#!"
            onClick={handleResetPassword}
            >
            Forgot Password?
          </Link>
          </div>
        </div>
      
      <p className="#">
        Don't have an account?
        <Link to="/userregister" className="#">
          Register
        </Link>
      </p>
        </Typography>
      </form>
      
    </div>
    </div>
  );
}
