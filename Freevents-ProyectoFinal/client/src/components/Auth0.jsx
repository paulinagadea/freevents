import React from 'react'
import {LoginButton} from './LoginButton'
import { LogoutButton } from './LogoutButton'
import {IngresarAuth0} from './IngresarAuth0'
import { useAuth0 } from "@auth0/auth0-react";
// import {Test} from '../actions/index'
import { useDispatch } from 'react-redux'

 const Auth0 = () => {

  const { loginWithRedirect, isLoading } = useAuth0();
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
        {isLoading !== true ? <LogoutButton/> : null }
        <IngresarAuth0/>
    </div>
    
  )
}
export default Auth0
