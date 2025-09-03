import logo from './logo.svg';
import './App.css';
import MasterPage from './MasterPage';
import Componente from './Componente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Componente />
      </header>
    </div>
  );
}

export default App;
