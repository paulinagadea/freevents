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


function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
    <div>
      <div className="App">
      <Routes>
            <Route exact path = '/' element= { <LandingPage/> }/>
            <Route exact path = '/home' element= { <Home/> }/>
            <Route exact path = '/eventos' element= { <Eventos/> }/>
            <Route exact path = '/detail/:id' element= { <Detail/> }/>
            <Route exact path = '/userregister' element= { <FormUser/> }/>
            <Route exact path = '/providerregister' element= { <FormProvider/> }/>
            <Route exact path = '/paquetes' element={<Paquetes/>}/>
            <Route exact path = '/proveedores' element={<Proveedores/>}/>
            <Route exact path = '/login' element={<Login/>}/>
            <Route exact path = '/detailPaquete/:id' element={<DetailsPaquetes/>}/>
            <Route exact path = '/customertype' element={<CustomerType/>}/>

      </Routes>
        </div>
      </div>
    </BrowserRouter>
    </ThemeProvider>
  );
}
export default App; 