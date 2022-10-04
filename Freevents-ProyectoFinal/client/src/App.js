import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
// import Login from "./components/Login";
import Eventos from "./components/Eventos";
import Home from "./components/Home";
import CustomerType from "./components/CustomerType";
import Detail from './components/Details';
import FormUser from "./components/FormUser";
import FormProvider from "./components/FormularioProveedor";
import Paquetes from "./components/Paquetes";
import Proveedores from './components/Proveedores';
import CreatePack from './components/CreatePack';
import { ThemeProvider } from '@material-ui/core';
import LoginAu from './components/Auth0'
import LoginAu2 from './components/Auth02'
import DetailsPaquetes from './components/DetailsPaquetes'
import BusquedaUser from './components/BusquedaUser'
import BusquedaUserClient from './components/BusquedaUserClient'


// import { ProtectedRoute } from "./components/ProtectedRoute";
// import { AuthProvider } from "./context/AuthContext";
import { useState, useEffect } from 'react';

import Orden from './components/Orden/Orden';
import PerfilUser from "./components/PerfilUser"
import Comentarios from "./components/Comentarios"
import Orden2 from './components/Orden2'
import Dashboard from './components/DashBoard';
import Footer from "./components/Footer"
import Reviews from './components/Reviews';
//import AlertSuscribe from "./components/AlertSuscribe";
import CardReviews from './components/CardReviews';



function App() {
  let queEres = JSON.parse(localStorage.getItem("user"));
console.log(queEres, "VALOR DEL STORE")
  
  //   const [log, setLog] = useState(null)
//   const [userStatus, setUserStatus] = useState("guest")

// useEffect (()=>{
//   //cuando el usuario no esta logueado es un invitado
//   if (log === null){
//     setUserStatus ("guest") 
//   }

 //desp hacer los otros if
//cuando un usuario va a ser un invitado?
//cuando un usuario va a ser un proveedor?
//cuando un usuario va a ser un cliente?
//cuando un usuario va a ser un administrador?
// },[log, userStatus])
  return (
    <ThemeProvider>
    <BrowserRouter>
    <div>
      <div className="App">
      {/* <AuthProvider> */}
        <Routes>
            <Route exact path = '/' element= { <LandingPage/> }/>
            <Route exact path = '/home' element= { <Home/> }/>
            <Route exact path = '/eventos' element= { <Eventos/> }/>
            <Route exact path = '/detail/:id' element= { <Detail/> }/>
            {/* <Route exact path = '/providerregister' element= { queEres === "provider" ? <FormProvider/>  : <Navigate to = "/home"/>}/> */}
            {/* <Route exact path = '/busquedaUser' element= { queEres === "provider" ? <BusquedaUser/>  : <Navigate to = "/BusquedaUserClient"/>}/> */}

            <Route exact path = '/busquedaUser' element= { <BusquedaUser/> }/>
            <Route exact path = '/providerregister' element={ <FormProvider/> }/>
            <Route exact path = '/BusquedaUserClient' element={ <BusquedaUserClient/> }/>
            <Route exact path = '/userregister' element= { <FormUser/> }/>
            <Route exact path = '/paquetes' element={<Paquetes/>}/>
            <Route exact path = '/proveedores' element={<Proveedores/>}/>
            <Route exact path = '/eventos' element= { <Eventos/> }/>
            <Route exact path = '/detailPaquete/:id' element={<DetailsPaquetes/>}/>
            <Route exact path = '/loginCliente' element={<LoginAu/>}/>
            <Route exact path = '/loginProveedor' element={<LoginAu2/>}/>
            {/* <Route exact path = '/login' element={<Login/>}/> */}
            <Route exact path = '/comentarios' element={<Comentarios/>}/>
            <Route exact path = '/orden2' element={<Orden2/>}/>
            <Route exact path = '/PerfilUser' element={<PerfilUser/>}/>
            {/* <Route exact path = '/PerfilUser' element={<PerfilUser/>}/>  */}
            <Route exact path = "/orden" element={<Orden/>}/>
            <Route exact path = "/customertype" element={<CustomerType/>}/>
            <Route exact path = "/Footer" element={<Footer/>}/>
            {/* <Route exact path = "/AlertSuscribe" element={<AlertSuscribe/>}/> */}
            <Route exact path = "/Reviews" element={<Reviews/>}/>
            <Route exact path = "/CardReviews" element={<CardReviews/>}/>
            



            <Route exact path = '/createpack' element={<CreatePack />}/>

            <Route exact path = '/orden2' element={<Orden2/>}/>
            <Route exact path = '/Dashboard' element={<Dashboard/>}/>




            {/* <Route exact path = '/login' element={<Login
            setLog={setLog}
          />}/> */}
            <Route exact path = '/customertype' element={<CustomerType/>}/>
            {/* <Route
            path="/orden"
            element={
              <ProtectedRoute>
                {/* aca van todas las rutas que quiero proteger */}
               {/* <Orden/>
              </ProtectedRoute>  */}
            {/* } */}
            {/* />   */}
            {/* <Route path="/orden2" element={<ProtectedRoute><Orden2/></ProtectedRoute>}/> */}
            {/* <Route path="/PerfilUser" element={<ProtectedRoute><PerfilUser/></ProtectedRoute>}/>   */} 
  
        </Routes>
      {/* </AuthProvider> */}
        </div>
      </div>
    </BrowserRouter>
    </ThemeProvider>
  );
}
export default App; 