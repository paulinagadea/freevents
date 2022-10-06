import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector, } from "react-redux";//useSelector
import { Link } from "react-router-dom";
import { getOrder } from '../actions';


export default function PerfilUser() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOrder())
    }, [dispatch])

    const { provider, isAuthenticated, isLoading } = useAuth0();

    console.log(useAuth0())
    if (isLoading) {
        return <div>Loading...</div>;
    }

    const p = JSON.parse(localStorage.getItem("providerUser"));

    return (
        <div>
            <div className="info">
                <h3>Mis datos</h3>
                <div className="datos">
                    <p>Nombre: {p.name}</p>
                    <p>Numero de Telefono: {p.phone_number}</p>
                    <p>Locacion: {p.location}</p>
                    <p>CP: {p.postal_code}</p>
                    <p>CUIT: {p.cuit}</p>
                    <p>Email: {p.email}</p>
                </div>
            </div>




            <Link to="/loginProveedor">
                <button>Crear Paquete</button>
            </Link>
            <Link to="/home">
                <button>Volver</button>
            </Link>
        </div>
    )


}



                    
   
