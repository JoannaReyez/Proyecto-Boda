import logo from './logo.svg';
import './App.css';
import Componente from './Componente';
import MasterPage from './MasterPage';

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
        <MasterPage>
          <Componente />
        </MasterPage>
      </header>
    </div>
  );
}

export default App;
