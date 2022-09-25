import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Chip } from "@material-ui/core";
import { Avatar } from "@mui/material";

const PerfilUser = () => {

    const { favs } = useSelector((state) => state.favs)

    // let y = JSON.parse(localStorage.getItem(favs));
    // let favsFromLocalStorage = y ? y : "No hay Favoritos"

    return (
        <div>
            <Chip avatar={<Avatar src="https://cloudfront-us-east-1.images.arcpublishing.com/radiomitre/7CGFXAZMJJGNFGQAFMABMXYBMU.png" alt="" />} />

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