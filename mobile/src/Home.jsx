import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ProductCard from './components/ProductCard';

export default function App() {
  return (
    <View style={styles.container}>
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#fff',
  }

});
