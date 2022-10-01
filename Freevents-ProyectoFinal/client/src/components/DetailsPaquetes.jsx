import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearDetails, getDetailsPacks, addToOrder } from "../actions"
import { useEffect } from 'react'
import NavbarHome from "./NavbarHome.jsx";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { Button } from '@material-ui/core'
import { useNavigate } from "react-router-dom";


const DetailsPaquetes = () => {
    const dispatch = useDispatch()
    let { id } = useParams()
    const detalleP = useSelector((state) => state.detailPack)
    console.log(detalleP, "DETAIL PACK")




    useEffect(() => {
        dispatch(getDetailsPacks(id));
        return () => { dispatch(clearDetails()) }
    }, [dispatch, id])

    const handleAddOrder = () => {
        console.log(detalleP, "detalle P")
        dispatch(addToOrder(detalleP))
      }

    return (
        detalleP && detalleP.id
            ? (
                <div>

                    <NavbarHome />
                    <div>
                        <img src={detalleP.galery_image} alt={detalleP.name} />
                    </div>
                    <div>
                        <h1>{detalleP.name}</h1>
                        <p>{detalleP.description}</p>
                        <h1>${detalleP.price}</h1>
                        <h1>Servicios que incluye:</h1>
                        <h4>{detalleP.services.map(el => el.name + ",")}</h4>
                        <h1>Eventos:</h1>
                        <h4>{detalleP.events.map(el => el.name)}</h4>
                        <Link to = {auth.currentUser == null ? "/login" : "/orden"}>
                        <Button onClick={handleAddOrder}>Adquirir producto</Button>
                        </Link>
                        {/* <Button>Adquirit producto</Button> */}
                        {/* onClick={handleAddOrder} */}
                    </div>
                    {/* <Link to={'/paquetes'}>
                        <button key={id}>Volver</button>
                    </Link> */}
                </div>
            ) :
            <div>
                <p>Loading...</p>
                <img
                    className="imgloading"
                    alt="img not found"
                    src="https://pa1.narvii.com/6707/510b0daee67fbc091f14b9d8ef40aeb6c0d4dc7d_hq.gif"
                />
            </div>
    )
}
export default DetailsPaquetes

