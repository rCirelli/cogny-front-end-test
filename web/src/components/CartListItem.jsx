import { useContext, useState } from "react";
import styled from "styled-components";
import context from "../context";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 55rem;
  height: 8.125rem;
  box-shadow: 0 1px 0 #EEE;
`

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-right: 30px;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
`

const InfoWrapper = styled.div`
  max-width: 550px;
  display: flex;
  align-items: center;
  align-self: center;
`

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 179px;
  margin-right: 54px;
`

const Description = styled.p`
  line-height: 1.2rem;
  font-size: .875rem;
  font-weight: 600;
  color: #333;
  text-transform: capitalize;
`

const Qty = styled.input`
  width: 3.1875rem;
  height: 1.875rem;
  border-radius: 4px;
  font-size: .875rem;
  border: 1px solid #DDD;
  text-align: center;
`

const Price = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  color: #000;
`

function CartListItem({ item }) {
  const { setCartItemQty } = useContext(context);
  const [qtyValue, setQtyValue] = useState(item.qty);

  function handleOnChange({value}) {
    setCartItemQty(item, value);
    setQtyValue(value);
  }

  return (
    <Container>
      <InfoWrapper>
        <Image src={item.imgUrl} alt={item.description} />
        <Wrapper>
          <Description>{item.description}</Description>
          <Price>R$ {item.price}</Price>
        </Wrapper>
      </InfoWrapper>

      <PriceWrapper>
        <Qty value={qtyValue} onChange={(e) => handleOnChange(e.target)} />
        <Price>R$ {(item.price * item.qty).toFixed(2)}</Price>
      </PriceWrapper>
    </Container>
  );
}

export default CartListItem;