import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from '../components/Logo';
import Cart from '../components/Cart';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <Cart qty={2}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    width: '100%',
    height: 84,
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#141419',
  },
});
