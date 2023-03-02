import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ProductsList from './components/ProductsList';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProductsList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});
