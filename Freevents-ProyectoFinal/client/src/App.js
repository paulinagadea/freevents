import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Landing from './components/LandingPage.jsx'



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route>
    <Route exact path='/' element= {<Landing/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
