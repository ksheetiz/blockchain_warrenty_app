import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Gallery from "./components/Gallery";
import Team from "./components/Team";
import Mint from "./components/Mint";
import {useState} from "react";
import Steps from "./components/Steps";
import Repairs from "./components/Repairs";

function App() {

  const [accounts, setAccounts] = useState([]);
  const [token, setToken] = useState("");

  return (
    <div className="overlay">
      <div className="App">
        <NavBar accounts = {accounts} setAccounts = {setAccounts}/>
        <Routes>
          <Route path="/" element={<Home accounts = {accounts}/>} />
          <Route path="/gallery" element={<Gallery accounts = {accounts} setToken = {setToken}/>} />
          <Route path="/team" element={<Team />} />
          <Route path="/mint" element={<Mint accounts = {accounts} setAccounts = {setAccounts} token = {token} setToken = {setToken}/>} />
          <Route path="/steps" element={<Steps/>}/>
          <Route path="/repairs" element={<Repairs accounts = {accounts} token = {token} setToken = {setToken}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
