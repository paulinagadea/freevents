import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export const IngresarAuth0 = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <div>
          <img
            alt="img not found"
            src="https://imgs.search.brave.com/YoaXWrA6MHXu0NYY-W7oWOrfJ87CVRMphSnCQNMaWx0/rs:fit:800:800:1/g:ce/aHR0cHM6Ly9naWZp/bWFnZS5uZXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMTgvMDQv/bG9hZGVyLWdpZi10/cmFuc3BhcmVudC1h/bmltYXRlZC03Lmdp/Zg.gif"
            width="200px"
          />
        </div>;
    }
      
  return (
    (
        isAuthenticated && (
          <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
          </div>
        )
    )
  )
}
