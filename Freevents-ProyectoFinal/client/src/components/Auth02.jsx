import React from 'react'
// import {LoginButton} from './LoginButton'
import { LogoutButton } from './LogoutButton'
import {Profile} from './Profile'
import { useAuth0 } from "@auth0/auth0-react";
// import {Test} from '../actions/index'
// import { useDispatch } from 'react-redux'


 const Auth02 = () => {
  //  const dispatch = useDispatch()
   const { loginWithRedirect } = useAuth0();
  const usardo = "provider"
  const soyUnUser = () => (localStorage.setItem('user', JSON.stringify(usardo)));
  // let agarrarItem = JSON.parse(localStorage.getItem("user"));

  
  const functionRedirect = () => loginWithRedirect()
 

  const handleTest = (e) => {
   e.preventDefault()
    soyUnUser()
   functionRedirect()

  }
  

  return (
    <div>
    <button onClick={e => {handleTest(e)}} >Login</button>
    {/* {e => { handleClick(e) }} */}
        {/* <LoginButton/> */}
        
        <LogoutButton/>
        <Profile/>
    </div>
    
  )
}
export default Auth02
