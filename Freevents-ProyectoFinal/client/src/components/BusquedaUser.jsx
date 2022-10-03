//comparar objeto Auth0.sub === allProviders.sub
//if (Auth0.sub !== allProviders.sub){
    //navigate (formularioProveedores)
//}else
//navigate (home)
//

//NOTA, LOGRAR QUE LA WEA DEPENDIENDO DE SI EXISTE O NO ME LLEVE YA SEA AL HOME, O AL FORMULARIO DE PROVIDER
import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import {getProviders, buscarSiExisteCliente} from '../actions/index'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


 const BusquedaUser = () => {

  const {  user, isAuthenticated, isLoading } = useAuth0();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const clienteActual = useSelector((state) => state.clienteActual)
    const stateProviders = useSelector((state)=>state.allProviders)
    // const userr = user.sub
    // console.log(userr, )
  //aqui ponemos lo que enviamos
// const storageUser = (localStorage.setItem('userAuth0Provider', JSON.stringify(user)));


const  mifuncionQueBusca  = async () => {
  const aux = await user
  console.log(aux, "soy el user en el componente busquedaUser")
  dispatch(buscarSiExisteCliente(aux))
  return 
}



useEffect(() => {
        
    dispatch(getProviders())
    mifuncionQueBusca()
    // clienteActual ? true 
    // if (clienteActual !== true){
    //   window.location.assign("http://localhost:3000/home")
    // }else {
    //   window.location.assign("http://localhost:3000/providerregister")
    // }
    //LOGICA EXPLICADA: si el clienteActual (true/false) tiene como estado false quiero que me redirija
    //a el formulario de proveedores porque significa que mi usuario no esta en la base de datos y
    //debo registrarme. Else si ya estoy registrado llevame al home.
    //PD2: MIRAR REDUCER. el includes del reducer no va a servier. El reducer mira dos objetos.
    // pregunta si en el estado all providers ([{array de objetos con sus respectivas propiedades}])
    // esta incluido el action payload. El action payload es el objeto user que contiene muchas propiedades.
    //el problema es que nunca va a estar incluido todo el objeto user dentro del array de objetos allProviders
    //es por eso que lo que en realidad hay que ver que este incluido es el USER.SUB(valor) => como action payload y compararlo
    //con la propiedad SUB dentro de los objetos del array allProviders.
    //recien ahi el resultado true o false del includes dara una respuesta correcta.
    //AHORA ANDA MAL POR ESA RAZON CREO.

}, [dispatch ])
    
    // console.log(clienteActual, "HAY ALGO AQUI?")
    // if (clienteActual === true){
    //   navigate("/home")
    // }else {
    //   navigate("./providerregister")
    // }
    
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