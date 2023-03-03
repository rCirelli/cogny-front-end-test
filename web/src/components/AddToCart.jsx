import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-radius: 4px;
  padding: 0;
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

const Count = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  width: 53px;
  height: 42px;
  border-radius: 4px 0 0 4px;
  background: ${props => props.disabled ? "#464444" : "#c62749"};
`

const Text = styled.span`
  margin: 0 1.25rem 0 1.25rem;
  font-weight: 600;
  padding: 0;
  white-space: nowrap;
`

function AddToCart({onClick, isDisabled}) {
  return (
    <Button onClick={onClick} disabled={isDisabled}>
      <Count disabled={isDisabled}>1</Count>
      <Text>Adicionar ao Carrinho</Text>
    </Button>
  );
}

export default AddToCart;