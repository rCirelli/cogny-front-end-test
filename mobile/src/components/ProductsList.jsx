import { useEffect, useState } from "react";
import { View } from "react-native";
import ProductCard from "./ProductCard";
import { getProducts } from '../firebase/services'
import Loading from "./Loading";

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsList = await getProducts();
      setProducts(productsList);
      setIsLoading(false);
    }
    fetchProducts();
  }, []);

  return (
    <View>
      {
        isLoading 
        ? <Loading />
        : products.map(product => <ProductCard key={product.id} product={product} />)
      }
    </View>
  );
}
