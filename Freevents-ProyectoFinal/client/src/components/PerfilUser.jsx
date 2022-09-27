import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Chip } from "@material-ui/core";
import { Avatar } from "@mui/material";
import './PerfilUser.css'
import { useAuth } from "../context/AuthContext";
import { auth  } from "../firebase";


const PerfilUser = () => {

    const { favs } = useSelector((state) => state.favs)

    // let y = JSON.parse(localStorage.getItem(favs));
    // let favsFromLocalStorage = y ? y : "No hay Favoritos"
    const data = auth.currentUser.providerData[0];

    return (
        <div>
            <Chip avatar={<Avatar src="https://cloudfront-us-east-1.images.arcpublishing.com/radiomitre/7CGFXAZMJJGNFGQAFMABMXYBMU.png" alt="" />} />
            <div><h1 className="portada">Portada</h1></div>

            <div className="titulo">
                <h1>Bienvenido {data.displayName}</h1>
            </div>

            

            <div>
                {favs?.map((f) => {
                    return (
                        <div>
                            {f.name}
                        </div>
                    )
                })}

            </div>

            <Link to="/paquetes">
                <button>Volver</button>
            </Link>


        </div>
    )
}

export default PerfilUser;