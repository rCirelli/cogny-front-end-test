import styled from 'styled-components'

function Wrapper({children}) {
  const Container = styled.div`
    background-color: #191920;
    min-height: 100vh;
  `

  return (
    <Container>
      {children}
    </Container>
  );
}

export default Wrapper;