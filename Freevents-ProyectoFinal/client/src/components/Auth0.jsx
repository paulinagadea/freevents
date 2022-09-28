import React from 'react'
import {LoginButton} from './LoginButton'
import { LogoutButton } from './LogoutButton'
import {Profile} from './Profile'

 const Auth0 = () => {
  return (
    <div>
        <LoginButton/>
        <LogoutButton/>
        <Profile/>
    </div>
    
  )
}
export default Auth0
