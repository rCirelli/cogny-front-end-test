import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-radius: 4px;
  padding: 1rem 1.3125rem;
  text-decoration: none;
  background: #F8375D;
  color: #ffffff;
  font-size: 0.875rem;
  text-transform: uppercase;
  line-height: 1;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  &:disabled{
    background: #6d686a;
  }
`

const Text = styled.span`
  font-weight: 600;
  font-size: .875rem;
  padding: 0;
  white-space: nowrap;
`

function AddToCart({ onClick, isDisabled }) {
  return (
    <Button onClick={onClick} disabled={isDisabled}>
      <Text>Finalizar Pedido</Text>
    </Button>
  );
}

export default AddToCart;