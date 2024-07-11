import { Smile } from 'lucide-react';
import { styled } from 'styled-components';
import { theme } from 'theme';

const CustomP = styled.p`
  color: ${(props) => props.theme.color.mainBlue};
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
