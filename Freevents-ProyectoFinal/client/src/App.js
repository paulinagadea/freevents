import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
    <div>
      <div className="App">
      <Routes>
            <Route exact path = '/' element= { <LandingPage/> }/>
            <Route exact path = '/' element= { <Home/> }/>
      </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

