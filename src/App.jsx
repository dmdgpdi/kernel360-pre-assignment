import logo from './logo.svg';
import './App.css';
import { Smile } from 'lucide-react';
import { styled } from 'styled-components';

const CustomP = styled.p`
  color: red;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Smile></Smile>
        <CustomP>
          Edit <code>src/App.js</code> and save to reload.
        </CustomP>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
