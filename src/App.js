import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="overlay">
      <div className="App">
        <NavBar />
        <Home />
      </div>
      <div className="moving-background"></div>
    </div>
  );
}

export default App;
