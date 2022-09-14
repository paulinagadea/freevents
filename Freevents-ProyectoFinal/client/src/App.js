import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";  

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="App">
          <Switch>
            <Route exact path= '/' component= { LandingPage }/>
          </Switch>
        <h1>AGUANTE FREEVENTS</h1>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
