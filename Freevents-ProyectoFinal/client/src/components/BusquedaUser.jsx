//comparar objeto Auth0.sub === allProviders.sub
//if (Auth0.sub !== allProviders.sub){
    //navigate (formularioProveedores)
//}else
//navigate (home)
//

// dfdfdffd AllProvider.sub.find(dfdfdffd) ! navigate formProv : navigate home
import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import {getProviders, buscarSiExisteCliente} from '../actions/index'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from "react";


 const BusquedaUser = () => {

  const {  user, isAuthenticated, isLoading } = useAuth0();
    const dispatch = useDispatch();
  
    const clienteActual = useSelector((state) => state.clienteActual)
    const stateProviders = useSelector((state)=>state.allProviders)

  //aqui ponemos lo que enviamos
// const storageUser = (localStorage.setItem('userAuth0Provider', JSON.stringify(user)));


const  mifuncionQueBusca  = async () => {
  const aux = await user
  console.log(user, "soy el user en el componente busquedaUser")
  dispatch(buscarSiExisteCliente(aux))
  return 
}

  

useEffect(() => {
        
    dispatch(getProviders())
    mifuncionQueBusca()

}, [dispatch ])
    
    console.log(clienteActual, "HAY ALGO AQUI?")
    
    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    // if (){

    // }
    // const  todosLosProveedores = allProviders?.find(el =>el?.sub)
    // console.log(todosLosProveedores)
    // if (todosLosProveedores === user.sub)
  return (
    <div>
    WEA
    {
      clienteActual === true ? <h1>si existo</h1> : <h1>No existo</h1>
    }
    </div>
    
  )
}
export default BusquedaUser