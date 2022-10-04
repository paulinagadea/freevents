import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import {getAllClients, buscarSiExisteClienteVerdadero} from '../actions/index'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from "react";
import { Navigate, redirect, useNavigate, useRouteError } from 'react-router-dom';



   
  const BusquedaUserClient = () =>{

    const {  user, isAuthenticated, isLoading } = useAuth0();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const clienteActual = useSelector((state) => state.clienteActual)//hacer action nueva client
    const stateClients = useSelector((state)=>state.clients)// traer estado todos los client
    console.log(user, "soy el user")
    console.log(stateClients, "ACA LOS CLIENTES")
    let storageTypeUsers = JSON.parse(localStorage.getItem("user"));
    console.log(storageTypeUsers, "SOY EL TIPO DE USUARIO")


    console.log("LLGUE HASTA LA 32")


    const  mifuncionQueBusca  = async () => {
        if(user.sub){
      
          const aux = await user.sub
          console.log(aux, "soy el user en el componente busquedaUserClient")
          dispatch(buscarSiExisteClienteVerdadero(aux))
          return
        }
      }

      useEffect(() => {
        dispatch(getAllClients())
        
      }, [dispatch, user])


      useEffect(() => {
        if (stateClients.length > 0){
          mifuncionQueBusca()
       
        }
        
      }, [stateClients])

    console.log(clienteActual, "Cliente actual")
  return (
    <div>
       Cargando..
    {/* {
      clienteActual === false && <Navigate to = "/providerregister" replace = {true}/>  
    } */}
    {/* {
      clienteActual === false && <h1>SOY FALSE, no estoy en la base</h1>  
    } */}

    {
      clienteActual === true && localStorage.setItem('providerUser', JSON.stringify(user)) 
    }
    {
      clienteActual === true &&  <Navigate to = "/home" replace = {true}/>
    }
    </div>
  )
}
export default BusquedaUserClient
