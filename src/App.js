import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Team from "./components/Team";
import Mint from "./components/Mint";

function App() {
  return (
    <div className="overlay">
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/mint" element={<Mint />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
