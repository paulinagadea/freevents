import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// import Navigate from 'react-router-dom'


export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  // const {email, name, }
    // console.log(first)
    console.log(useAuth0())
    // const navigate = Navigate();
  if (isLoading) {
    return <div>Loading...</div>;

  }


  // useEffect((
  //   navigate("/home")
  // )=>{},[navigate])

  return (
    isAuthenticated && (
      <div>

        <div><h1 className="portada">Portada</h1></div>

        <img className="foto-perfil" src={user.picture} alt={user.name} />
        <h2> Bienvenido {user.name}</h2>
        <p>Email: {user.email}</p>
      </div>
    )
  );
};