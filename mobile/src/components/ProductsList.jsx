import { StyleSheet, ScrollView, View } from "react-native";
import ProductCard from "./ProductCard";

export default function ProductsList() {
  return (
    <View>
      <ProductCard
        product = {{
          description: 'TÊNIS ADIDAS CAMPUS 00S MASCULINO',
          price: 549.99,
          imgUrl: 'https://artwalk.vteximg.com.br/arquivos/ids/324461-1000-1000/GY947-3-001-1.jpg?v=638060303451070000',
        }}
      />
      <ProductCard
        product = {{
          description: 'TÊNIS ADIDAS CAMPUS 00S MASCULINO',
          price: 549.99,
          imgUrl: 'https://artwalk.vteximg.com.br/arquivos/ids/324461-1000-1000/GY947-3-001-1.jpg?v=638060303451070000',
        }}
      />
      <ProductCard
        product = {{
          description: 'TÊNIS ADIDAS CAMPUS 00S MASCULINO',
          price: 549.99,
          imgUrl: 'https://artwalk.vteximg.com.br/arquivos/ids/324461-1000-1000/GY947-3-001-1.jpg?v=638060303451070000',
        }}
      />
      <ProductCard
        product = {{
          description: 'TÊNIS ADIDAS CAMPUS 00S MASCULINO',
          price: 549.99,
          imgUrl: 'https://artwalk.vteximg.com.br/arquivos/ids/324461-1000-1000/GY947-3-001-1.jpg?v=638060303451070000',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
});
