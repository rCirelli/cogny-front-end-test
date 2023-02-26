import styled from 'styled-components'

function Wrapper({children}) {
  const Container = styled.div`
    background-color: #191920;
    min-height: 100vh;
    padding: 50px 100px;
  `

  return (
    <Container>
      {children}
    </Container>
  );
}

export default Wrapper;