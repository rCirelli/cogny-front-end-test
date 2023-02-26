import styled from 'styled-components'

const Container = styled.div`
background-color: #191920;
min-height: 100vh;
padding: 50px 100px;
`

function Wrapper({children}) {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Wrapper;