import styled from "styled-components";
import AddToCart from "./AddToCart";

const Card = styled.div`
  width: 300px;
  height: 442px;
  max-width: 100%;
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
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  /* text-overflow: ellipsis; */
  /* word-wrap: break-word; */
  overflow: hidden;
  max-height: 42px;
  line-height: 21px;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`

const Price = styled.p`
  font-size: 1.3125rem;
  font-weight: 600;
  color: #000;
`

function ProductCard({product}) {
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