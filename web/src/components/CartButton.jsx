import styled from "styled-components";
import context from '../context'
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 3px;
`

const MyCart = styled.span`
  font-weight: 600;
  font-size: .875rem;
`

const Items = styled.span`
  font-weight: 300;
  font-size: .75rem;
`

function CartButton() {
  const { localCart: { totalQty } } = useContext(context);

  return (
    <NavLink to="/cart" style={{textDecoration: "none"}}>
      <Container>
        <MyCart>Meu carrinho</MyCart>
        <Items>{ totalQty === 1 ? '1 item' : `${totalQty} itens`}</Items>
      </Container>
    </NavLink>
  );
}

export default CartButton;