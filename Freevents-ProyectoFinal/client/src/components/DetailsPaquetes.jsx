import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailsPacks } from "../actions"
import { useEffect } from 'react'
import NavbarNuevo from "./NavbarNuevo";

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
            <NavbarNuevo/>
            <h1>{detalle?.name}</h1>
            

       </div>
    )
}
export default DetailsPaquetes
//<Link style={{textDecoration:"none"}} to= {`/detail/${provider.id}`}>
