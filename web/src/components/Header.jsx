import styled from "styled-components"
import CartButton from "./CartButton";
import CognyshoesLogo from "./CognyshoesLogo";

function Header() {
  const Container = styled.header`
    margin: 0 auto 3.125rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  `

  return (
    <Container>
      <CognyshoesLogo />
      <CartButton />
    </Container>
  );
}

export default Header;