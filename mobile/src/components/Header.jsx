import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from '../components/Logo';
import appContext from '../context/appContext'
import CartBtn from './CartBtn';

export default function App() {
  const { cart } = useContext(appContext);

  return (
    <View style={styles.container}>
      <Logo />
      <CartBtn qty={cart.totalQty}/>
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
