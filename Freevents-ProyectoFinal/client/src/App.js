import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './components/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>AGUANTE FREEVENTS</h1>
        <Routes>
          <Route exact path="/" component={LandingPage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
