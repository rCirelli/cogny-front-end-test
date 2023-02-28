import styled from "styled-components";

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

function CartListItem({ item: { description, img_url, price, qty } }) {
  return (
    <Container>
      <InfoWrapper>
        <Image src={img_url} alt={description} />
        <Wrapper>
          <Description>{description}</Description>
          <Price>R$ {price}</Price>
        </Wrapper>
      </InfoWrapper>

      <PriceWrapper>
        <Qty value={qty}/>
        <Price>R$ {price * qty}</Price>
      </PriceWrapper>
    </Container>
  );
}

export default CartListItem;