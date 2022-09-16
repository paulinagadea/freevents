import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import Detail from './components/Details'
import FormUser from "./components/FormUser"
import FormProvider from "./components/FormProvider"

function App() {
  return (
    <BrowserRouter>
    <div>
      <div className="App">
      <Routes>
            <Route exact path = '/' element= { <LandingPage/> }/>
            <Route exact path = '/home' element= { <Home/> }/>
            <Route exact path = '/home/details' element= { <Detail/> }/>
            <Route exact path = '/userregister' element= { <FormUser/> }/>
            <Route exact path = '/providerregister' element= { <FormProvider/> }/>

      </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App; 