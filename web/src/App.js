import Wrapper from './components/Wrapper';
import Home from './pages/Home';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  body::-webkit-scrollbar {
    width: 8px;
  }
  
  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #191920;
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: #101017;
    border-radius: 8px;
  }
`
function App() {

  return (
    <main>
      <GlobalStyle />
      <Wrapper>
        <Home />
      </Wrapper>
    </main>
  );
}

export default App;
