import styled from "styled-components";
import context from '../context'
import { useContext } from "react";

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
  const { localCart: { totalQty } } = useContext(context);

  return (
    <Container>
      <MyCart>Meu carrinho</MyCart>
      <Items>{ totalQty === 1 ? '1 item' : `${totalQty} itens`}</Items>
    </Container>
  );
}

export default CartButton;