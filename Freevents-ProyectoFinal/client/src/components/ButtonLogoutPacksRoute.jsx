import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
    const { logout } = useAuth0();
    const Salida = () => logout({ returnTo: 'http://localhost:3000/home' })


    function handleSubmit(e) {
        e.preventDefault()
        localStorage.removeItem('providerUser')
        localStorage.removeItem('user')
        Salida()

    }



    return (
        <button onClick={e => handleSubmit(e)}>
            Logout
        </button>
    );
};
