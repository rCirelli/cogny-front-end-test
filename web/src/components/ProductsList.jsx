import { useEffect, useState } from "react";
import styled from "styled-components";
import { getProducts } from '../firebase/SDK.js'
import ProductCard from "./ProductCard";

const Container = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: repeat(auto-fit, minmax(min(100%/1, max(300px, 100%/4)), 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsList = await getProducts();
      setProducts(productsList);
    }
    fetchProducts();
  }, []);

  return (
    <Container>
      {
        products.length > 0 && products.map((product, i) => (
        <ProductCard key={i} product={product} />))
      }
    </Container>
  );
}

export default ProductsList;