import React from "react";
//import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Chip } from "@material-ui/core";
import { Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";


const PerfilUser = () => {

    // const { user } = auth;
    // let misFavs = JSON.parse(localStorage.getItem("favs"));
    // let favsFromLocalStorage = misFavs ? misFavs : "No tienes Favoritos"




    // if (user) return (
    //     <div>
    //         <Chip avatar={<Avatar src="https://cloudfront-us-east-1.images.arcpublishing.com/radiomitre/7CGFXAZMJJGNFGQAFMABMXYBMU.png" alt="" />} />
    //         <div>
    //             <h1>Favoritos</h1>
    //         </div>
    //         <div>
    //             {favsFromLocalStorage.length === 0 ? " No hay Favoritos" : favsFromLocalStorage}
    //         </div>

    //         <Link to="/paquetes">
    //             <button>Volver</button>
    //         </Link>


    //     </div>
//     )
}

export default PerfilUser;