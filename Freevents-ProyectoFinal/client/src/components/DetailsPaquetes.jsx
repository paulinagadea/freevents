import React from 'react'
import { Link, /*useNavigate,*/ useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailsPacks } from "../actions"
import { useEffect } from 'react'
import NavbarHome from "./NavbarHome.jsx";

const DetailsPaquetes = () =>{
    let {id} = useParams()
    // const navigate = useNavigate()
    const dispatch = useDispatch()
    const detalle = useSelector((state) => state.detail)

    useEffect(()=>{
        dispatch(getDetailsPacks(id));
    },[dispatch, id])

    return (
       <div>
            <NavbarHome/>
            <h1>{detalle?.name}</h1>
            <p>{detalle?.description}</p>
            <h3>{detalle?.price}</h3>
            <h3>{detalle?.events?.map(el=>el?.name)}</h3>
            <h4>{detalle?.services.map(el=>el)}</h4>
            <img src={detalle?.galery_image} alt={detalle?.name} />
            <Link to={'/paquetes'}>
                <button key={id}>Volver</button>
            </Link>

       </div>
    )
}
export default DetailsPaquetes
//<Link style={{textDecoration:"none"}} to= {`/detail/${provider.id}`}>
