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
import { Navigate, redirect, useNavigate, useRouteError } from 'react-router-dom';
import FormularioProveedor from './FormularioProveedor';
import { Redirect } from 'react-router-dom';


 const BusquedaUser = () => {
  console.log("ENTRE AL BUSQUEDA USER")
  let storageTypeUsers = JSON.parse(localStorage.getItem("user"));
  console.log(storageTypeUsers, "SOY EL TIPO DE USUARIO")

 
    
  
    const {  user, isAuthenticated, isLoading } = useAuth0();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const clienteActual = useSelector((state) => state.clienteActual)
    const stateProviders = useSelector((state)=>state.allProviders)
    
    console.log(stateProviders, "ACA LOS PROVIDERS")
    // const userr = user.sub

  //aqui ponemos lo que enviamos
// const storageUser = (localStorage.setItem('userAuth0Provider', JSON.stringify(user)));


console.log("LLGUE HASTA LA 32")//SE RENDERIZA 4 VECES Q ONDA

if (storageTypeUsers === 'client'){
  navigate('/BusquedaUserClient')
  
}
const  mifuncionQueBusca  = async () => {
  if(user.sub){

    const aux = await user.sub
    console.log(aux, "soy el user en el componente busquedaUser")
    dispatch(buscarSiExisteCliente(aux))
    return
  }
}



useEffect(() => {
    dispatch(getProviders())
    
  }, [dispatch, user])

  useEffect(() => {
    if (stateProviders.length > 0){
      mifuncionQueBusca()
      // if (clienteActual === true){
      //   localStorage.setItem('prueba', JSON.stringify(user));
      // }
    }
    
  }, [stateProviders])


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

  // if (clienteActual !== true){
  //     window.location.assign("http://localhost:3000/providerregister")
  //   }else{
  //     window.location.assign("http://localhost:3000/home")
  //   }


    // else {
    //   window.location.assign("http://localhost:3000/providerregister")
    // }
    
    // console.log(clienteActual, "HAY ALGO AQUI?")
    // if (clienteActual === false){
    //   navigate("http://localhost:3000/userregister")
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
    Cargando..
    {/* {storageTypeUsers === 'provider' ?} */}
    {
      clienteActual === false && <Navigate to = "/providerregister" replace = {true}/>  
    }
    {

      clienteActual === true && localStorage.setItem('providerUser', JSON.stringify(user)) 

    }
    {
      clienteActual === true &&  <Navigate to = "/home" replace = {true}/>
    }
    
    </div>
    
  )
}
export default BusquedaUser