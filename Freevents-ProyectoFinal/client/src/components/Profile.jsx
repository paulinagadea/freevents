import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Profile.css';

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
    // console.log(first)
    console.log(useAuth0())
  if (isLoading) {
    return <div>Loading...</div>;
  }

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