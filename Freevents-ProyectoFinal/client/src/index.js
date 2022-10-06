import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./store";
import dotenv from "dotenv";
import axios from "axios";
import { Auth0Provider } from "@auth0/auth0-react";
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";
//window origin, o windows location bakc?

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
  <Auth0Provider 
  domain="dev-npb1i0xc.us.auth0.com" 
  clientId="vpQToaI04NOeyLgK4Fy3hxCZr18o0GXw" 
  redirectUri= 'https://freevents.vercel.app/busquedaUser'>
      
    <App />
    </Auth0Provider>
  </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
