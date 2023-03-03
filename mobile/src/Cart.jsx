import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import CartList from './components/CartList';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CartList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
});
