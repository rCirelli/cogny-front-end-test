import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header.jsx';
import Home from './src/Home'
import Cart from './src/Cart.jsx'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';
import ContextProvider from './src/context/ContextProvider';
// import Loading from './src/components/Loading.jsx';

export default function App() {
  const [fontsLoaded, err] = useFonts({
    useFonts,
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black,
  });

  // if (!fontsLoaded) {
  //   return <Loading />
  // }

  return (
    <ContextProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Header />
        {/* <Home /> */}
        <Cart />
      </View>
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Roboto',
    flex: 1,
    backgroundColor: '#191920',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  text: {
    color: '#fff',
  }

});
