import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 3px;
`

const MyCart = styled.span`
  font-weight: 600;
`

const Items = styled.span`
  font-weight: 300;
`

function CartButton() {
  return (
    <Container>
      <MyCart>Meu carrinho</MyCart>
      <Items>3 itens</Items>
    </Container>
  );
}

export default CartButton;