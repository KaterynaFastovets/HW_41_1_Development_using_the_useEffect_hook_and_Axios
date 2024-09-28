import logo from "./logo.svg";
import "./App.css";
import UserData from "./components/PersonList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="logotyp REACT" />
        <h1> Learn React</h1>
        <div className="div-form" >
          <UserData/>
        </div>
      </header>
    </div>
  );
}

export default App;
