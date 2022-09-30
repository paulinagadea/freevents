import React from 'react'
import {LoginButton} from './LoginButton'
import { LogoutButton } from './LogoutButton'
import {Profile} from './Profile'
import { useAuth0 } from "@auth0/auth0-react";
// import {Test} from '../actions/index'
import { useDispatch } from 'react-redux'

 const Auth0 = () => {

  const { loginWithRedirect } = useAuth0();
  const usardo = "client"
  const soyUnUser = () => (localStorage.setItem('user', JSON.stringify(usardo)));


  
  const functionRedirect = () => loginWithRedirect()
 

  const handleTest = (e) => {
   e.preventDefault()
    soyUnUser()
   functionRedirect()

  }

  return (
    <div>
    <button onClick={e => {handleTest(e)}} >Login</button>
        {/* <LoginButton/> */}
        <LogoutButton/>
        <Profile/>
    </div>
    
  )
}
export default Auth0
