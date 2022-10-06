import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import {getAllClients, buscarSiExisteClienteVerdadero, objetoClienteUnico} from '../actions/index'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from "react";
import { Navigate, redirect, useNavigate, useRouteError } from 'react-router-dom';



   
  const BusquedaUserClient = () =>{

    const {  user, isAuthenticated, isLoading } = useAuth0();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const clienteActual2 = useSelector((state) => state.clienteActual2)//hacer action nueva client
    const stateClients = useSelector((state)=>state.clients)// traer estado todos los client
    const estadoClienteUnico = useSelector((state)=>state.clienteUnico)
    // console.log(user, "soy el user")
    // console.log(stateClients, "ACA LOS CLIENTES")
    // let storageTypeUsers = JSON.parse(localStorage.getItem("user"));
    // console.log(storageTypeUsers, "SOY EL TIPO DE USUARIO")


    // console.log("LLGUE HASTA LA 32")


    const  mifuncionQueBusca2  = async () => {
        if(user.sub){
      
          const aux = await user.sub
          // console.log(aux, "soy el user en el componente busquedaUserClient")
          dispatch(buscarSiExisteClienteVerdadero(aux))
          dispatch(objetoClienteUnico(aux))
          return
        }
      }
    

      useEffect(() => {
        dispatch(getAllClients())
        
      }, [dispatch, user])


      useEffect(() => {
        if (stateClients.length > 0){
          // (async()=> await mifuncionQueBusca())()
          // console.log(clienteActual2)
          mifuncionQueBusca2()
          localStorageProvider()
          // console.log(clienteActual2)
          // if(clienteActual2 === false){
          //   console.log("AHORA SI LLEGUE AL POST")
          //   dispatch(postClient({
          //     name:user.name,
          //     email: user.email,
          //     sub:user.sub
          //   }))
          //   // alert("Proveedor creada")
          // }
        }
        
      }, [stateClients, estadoClienteUnico])

      const  localStorageProvider  = async () => {
   
        if (clienteActual2 === true){
    
          localStorage.setItem('providerUser', JSON.stringify(estadoClienteUnico))
          navigate("/home") 
        }else if(clienteActual2 === false) {
        navigate("/formularioCliente")
        }
       
        }

    
      // const funcionPost = async () =>{
      //   const Profile = await {
      //     name:user.name,
      //     email: user.email,
      //     sub:user.sub}
      //     dispatch(postClient(Profile))
      //     return
      // }
//       useEffect(() => {
// // console.log(clienteActual,"soy el cliente actual")
//         // if (clienteActual === false){
//         //   // console.log(funcionPost(),  "funcion del post")
//         //   funcionPost()
//         // }
//         // console.log("toy adentro del ultimo useffect")
//         if (clienteActual === false){
//         //   console.log(stateClients, "estado del cliente dentro del if")
//         //   console.log(user.name, user.email, user.sub, "todos los user y sus PROP")
//         //   // const profile = {user.name, user.email, user.sub}
//           dispatch(postClient({
//             name:user.name,
//             email: user.email,
//             sub:user.sub}))
//           }
//       }, [ dispatch])

    // console.log(clienteActual, "Cliente actual")
  return (
    <div>
       {/* Loading.. */}
   {/* Loading.. */}
    <img
        className="imgloading"
        alt="img not found"
        src="https://imgs.search.brave.com/YoaXWrA6MHXu0NYY-W7oWOrfJ87CVRMphSnCQNMaWx0/rs:fit:800:800:1/g:ce/aHR0cHM6Ly9naWZp/bWFnZS5uZXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMTgvMDQv/bG9hZGVyLWdpZi10/cmFuc3BhcmVudC1h/bmltYXRlZC03Lmdp/Zg.gif"
      />
    {/* {
      clienteActual2 === false && <Navigate to = "/formularioCliente" replace = {true}/>  
    } */}
    {/* {
      clienteActual === false && <h1>SOY FALSE, no estoy en la base</h1>  
    } */}

    {/* {
      clienteActual2 === true && localStorage.setItem('providerUser', JSON.stringify(user)) 
    }
    {
      clienteActual2 === true &&  <Navigate to = "/home" replace = {true}/>
    } */}
    </div>
  )
}
export default BusquedaUserClient