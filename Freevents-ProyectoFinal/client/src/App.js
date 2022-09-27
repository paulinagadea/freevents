import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Eventos from "./components/Eventos";
import Home from "./components/Home";
import CustomerType from "./components/CustomerType";
import Detail from './components/Details';
import FormUser from "./components/FormUser";
import FormProvider from "./components/FormProvider";
import Paquetes from "./components/Paquetes";
import Proveedores from './components/Proveedores';
import { ThemeProvider } from '@material-ui/core';
import DetailsPaquetes from './components/DetailsPaquetes'
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { useState, useEffect } from 'react';
import Orden from './components/Orden';
import PerfilUser from "./components/PerfilUser"
import Comentarios from "./components/Comentarios"
import Orden2 from './components/Orden2'


function App() {

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
      <AuthProvider>
        <Routes>
            <Route exact path = '/' element= { <LandingPage/> }/>
            <Route exact path = '/home' element= { <Home/> }/>
            <Route exact path = '/eventos' element= { <Eventos/> }/>
            <Route exact path = '/detail/:id' element= { <Detail/> }/>
            <Route exact path = '/userregister' element= { <FormUser/> }/>
            <Route exact path = '/providerregister' element= { <FormProvider/> }/>
            <Route exact path = '/paquetes' element={<Paquetes/>}/>
            <Route exact path = '/proveedores' element={<Proveedores/>}/>
            <Route exact path = '/eventos' element= { <Eventos/> }/>
            <Route exact path = '/detailPaquete/:id' element={<DetailsPaquetes/>}/>
            <Route exact path = '/login' element={<Login/>}/>
            <Route exact path = '/comentarios' element={<Comentarios/>}/>
            <Route exact path = '/PerfilUser' element={<PerfilUser/>}/>
            <Route exact path = '/orden' element={<Orden/>}/>
            <Route exact path = '/orden2' element={<Orden2/>}/>

            {/* <Route exact path = '/login' element={<Login
            setLog={setLog}
          />}/> */}
            <Route exact path = '/customertype' element={<CustomerType/>}/>
            <Route
            path="/"
            element={
              <ProtectedRoute>
                {/* aca van todas las rutas que quiero proteger */}

              </ProtectedRoute> 
            }
          />
        </Routes>
      </AuthProvider>
        </div>
      </div>
    </BrowserRouter>
    </ThemeProvider>
  );
}
export default App; 