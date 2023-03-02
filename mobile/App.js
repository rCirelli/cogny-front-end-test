import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, nativeStackNavigator } from '@react-navigation/native-stack';
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

const Stack = createNativeStackNavigator()

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
    <>
      <ContextProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <Header />
        <Stack.Navigator initialRouteName="Home" screenOptions={{contentStyle: styles.container}}>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} sty/>
          <Stack.Screen name="Cart" component={Cart} options={{headerShown: false}} sty/>
        </Stack.Navigator>
      </NavigationContainer>
      </ContextProvider>
    </>
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
});
