import Wrapper from './components/Wrapper';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { createGlobalStyle } from 'styled-components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
]);

function App() {

  return (
    <main>
      <GlobalStyle />
      <Wrapper>
        <RouterProvider router={router} />
      </Wrapper>
    </main>
  );
}

export default App;
