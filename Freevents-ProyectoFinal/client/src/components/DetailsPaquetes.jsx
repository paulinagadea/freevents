import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearDetails, getDetailsPacks } from "../actions"
import { useEffect } from 'react'
import NavbarHome from "./NavbarHome.jsx";


const DetailsPaquetes = () => {
    const dispatch = useDispatch()
    let { id } = useParams()
    const detalleP = useSelector((state) => state.detailPack)

    useEffect(() => {
        dispatch(getDetailsPacks(id));
        return () => { dispatch(clearDetails()) }
    }, [dispatch, id])

    return (
        detalleP && detalleP.id
            ? (
                <div>

                    <NavbarHome />
                    {/* <div>
                        <img src={detalleP.galery_image} alt={detalleP.name} />
                    </div> */}
                    <div>
                        <h3>{detalleP.name}</h3>
                        {/* <p>{detalleP.description}</p>
                        <h3>{detalleP.price}</h3>
                        <h4>{detalleP.services.map(el => el)}</h4> */}
                    </div>
                    <Link to={'/paquetes'}>
                        <button key={id}>Volver</button>
                    </Link>
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

