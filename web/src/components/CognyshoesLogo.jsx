import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
display: flex;
align-items: baseline;
gap: 10px;
color: white;
`


const Title = styled.h1`
text-transform: uppercase;
font-weight: bold;
color: white;
`

function CognyshoesLogo() {
  return (
    <NavLink to="/" style={{textDecoration: "none"}}>
      <Container>
        <Title>Cognyshoes</Title>
        <img src="cognyshoes_logo.svg" alt="cognyshoes logo" width="50rem" />
      </Container>
    </NavLink>
  );
}

export default CognyshoesLogo;