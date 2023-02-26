import Wrapper from './components/Wrapper';
import Home from './pages/Home';
import { createGlobalStyle } from 'styled-components'

function App() {
  const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Roboto', sans-serif;
    }
  `

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
