import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Team from "./components/Team";
import Mint from "./components/Mint";
import {useState} from "react";

function App() {

  const [accounts, setAccounts] = useState([]);

  return (
    <div className="overlay">
      <div className="App">
        <NavBar accounts = {accounts} setAccounts = {setAccounts}/>
        <Routes>
          <Route path="/" element={<Home accounts = {accounts}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/mint" element={<Mint accounts = {accounts} setAccounts = {setAccounts}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
