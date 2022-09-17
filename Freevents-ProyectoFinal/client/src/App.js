import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Eventos from "./components/Eventos";
import Home from "./components/Home";
import Detail from './components/Details';
import FormUser from "./components/FormUser";
import FormProvider from "./components/FormProvider";
import Paquetes from "./components/Paquetes";
import Proveedores from './components/Proveedores'


function App() {
  return (
    <BrowserRouter>
    <div>
      <div className="App">
      <Routes>
            <Route exact path = '/' element= { <LandingPage/> }/>
            <Route exact path = '/home' element= { <Home/> }/>
            <Route exact path = '/eventos' element= { <Eventos/> }/>
            <Route exact path = '/details' element= { <Detail/> }/>
            <Route exact path = '/userregister' element= { <FormUser/> }/>
            <Route exact path = '/providerregister' element= { <FormProvider/> }/>
            <Route exact path = '/paquetes' element={<Paquetes/>}/>
            <Route exact path = '/proveedores' element={<Proveedores/>}/>
      </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App; 