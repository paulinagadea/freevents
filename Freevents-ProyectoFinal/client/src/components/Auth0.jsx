import React from 'react'
import {LoginButton} from './LoginButton'
import { LogoutButton } from './LogoutButton'
import {IngresarAuth0} from './IngresarAuth0'
import { useAuth0 } from "@auth0/auth0-react";
// import {Test} from '../actions/index'
import { useDispatch } from 'react-redux'
import "./Auth.css";

 const Auth0 = () => {

  const { loginWithRedirect, isLoading, isAuthenticated } = useAuth0();
  const usardo = "client"
  const soyUnUser = () => (localStorage.setItem('user', JSON.stringify(usardo)));


  
  const functionRedirect = () => loginWithRedirect()
 

  const handleTest = (e) => {
   e.preventDefault()
    soyUnUser()
   functionRedirect()

  }

  return (
    <div className="background2">
      <div className="container2">
        <div className="imglogin">
          <img src="https://i.pinimg.com/564x/b2/4b/a6/b24ba6f4b92554b071283ebcf7ff2c92.jpg" alt="img"/>
          <div>
          
            <button onClick={e => {handleTest(e)}} >Login</button>
            {/* <LoginButton/> */}
            {isLoading !== true ? <LogoutButton/> : null }
            <IngresarAuth0/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Auth0
