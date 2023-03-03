import styled from 'styled-components'

const Container = styled.div`
  background-color: #191920;
  min-height: 100vh;
  padding: 50px 100px;
  margin: auto;
`

const Wrap = styled.div`
  max-width: 940px;
  margin: auto;
`

function Wrapper({children}) {
  return (
    <Container>
      <Wrap>
        {children}
      </Wrap>
    </Container>
  );
}

export default Wrapper;