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

import { red } from '@mui/material/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: '36ch',
      
      
    },
  },
  root1:{
    width: '30ch',
  
  }
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
      //  setLog(user)
       if(window.location.href === "http://localhost:3000/home"){
        navigate("/home");
      }else if(window.location.href !== "http://localhost:3000/home")
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
      // const usuario = await loginWithGoogle();
      // setLog(user)

      window.history.back()
  
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
    <div>

    <div className='container-todo'>
      <Button to="/home">Inicio</Button>
    
    <div className="container-login">

      <form className={classes.root} noValidate autoComplete="off"
        onSubmit={handleSubmit}
        >
        <div classname="botondeg" >
          <div className='hola'>
            
          </div>
          <div className='hola1'>
          <img src={google} width="40px"></img>
            <Button
            onClick={handleGoogleSignin}
            variant="contained"
            color="primary"
            size="small"
            disableElevation
            className={classes.root1}
            >
            Google login      
            </Button>
          </div>
              {error && <Alert message={error} />}
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
            className="acount"
            href="#!"
            onClick={handleResetPassword}
            >
            Forgot Password?
          </Link>
          </div>
        </div>
      
      <p className="acount">
        Don't have an account?
        <Link to="/customertype" className="#">
          Register
        </Link>
      </p>
        </Typography>
      </form>
      
    </div>
    </div>
    </div>
  );
}
