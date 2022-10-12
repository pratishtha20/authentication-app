import logo from './logo.svg';
import './App.css';

import {Route,Routes} from "react-router-dom"
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Routes>
           <Route path="/login" element={<Login/>}/>
           <Route path="/dashboard" element ={<Dashboard/>}/>
           <Route path="/Profile" element={<Profile/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
