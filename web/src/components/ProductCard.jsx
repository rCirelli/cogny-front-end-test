import styled from "styled-components";
import AddToCart from "./AddToCart";

function ProductCard({product}) {
  const Card = styled.div`
    width: 300px;
    height: 442px;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 4px;
  `

  const Image = styled.img`
    width: 260px;
    height: 260px;
    object-fit: contain;
  `

  const Description = styled.p`
    font-size: 1rem;
    font-weight: 600;
    color: #333;
  `

  const Price = styled.p`
    font-size: 1.3125rem;
    font-weight: 600;
    color: #000;
  `

  return (
    <Card>
      <Image src={product.img_url} alt={product.description} width/>
      <Description>{product.description}</Description>
      <Price>R$ {product.price}</Price>
      <AddToCart>Adicionar ao Carrinho</AddToCart>
    </Card>
  );
}

export default ProductCard;