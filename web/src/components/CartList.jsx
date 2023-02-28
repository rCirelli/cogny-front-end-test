import { useContext } from "react";
import styled from "styled-components";
import context from "../context";
import CartListItem from "./CartListItem";
import CheckoutButton from "./CheckoutButton"

const Wrapper = styled.div`
  background: #fff;
  border-radius: 4px;
  width: 58.75rem;
  padding: 1.875rem;
`

const ListHeaders = styled.span`
  margin-left: 130px;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  color: #999;
  font-weight: 600;
`

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4.625rem;
  align-items: flex-end;
`

const PriceLabel = styled.span`
  display: flex;
  gap: .4375rem;
  align-items: baseline;
  font-size: 1.125rem;
  color: #999;
  font-weight: 600;
  text-transform: uppercase;
`

const Price = styled.p`
  font-size: 1.875rem;
  font-weight: 600;
  font-stretch: condensed;
  color: #000;
`

const EmptyCart = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  width: 100%;
  height: 130px;
  color: #99999960;
  box-shadow: 0 1px 0 #EEE;
`

const Group = styled.span`
  display: flex;
  justify-content: space-between;
  width: 155px;
  margin-right: 70px;
`

function CartList() {
  const { localCart, resetCart } = useContext(context);

  function handleCheckout() {
    console.log('teste');
    resetCart();
    alert("Pedido Finalizado!")
  }
  
  function isDisabled() {
    if(localCart.items?.length === 0) {
      return true;
    }
    return false;
  }  

  return (
    <Wrapper>
      <ListHeaders>
        <p>Produto</p>
        <Group>
          <p>Qtd</p>
          <p>Preço</p>
        </Group>
      </ListHeaders>
      {
        localCart.items?.length > 0 ? localCart.items.map(
          (item, i) => <CartListItem key={ i } item={ item }/>
        ) : <EmptyCart>Carrinho Vazio</EmptyCart>
      }
      <Footer>
        <CheckoutButton
          onClick={handleCheckout}
          isDisabled={isDisabled()}
        />
        <PriceLabel>
          Total
          <Price>R$ {localCart.totalPrice}</Price>
        </PriceLabel>
      </Footer>
    </Wrapper>
  );
}

export default CartList;