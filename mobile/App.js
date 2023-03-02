import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './src/components/Header.jsx';
import Home from './src/Home'
import Cart from './src/Cart.jsx'
import ContextProvider from './src/context/ContextProvider';

const Stack = createNativeStackNavigator()

export default function App() {
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
    backgroundColor: '#191920',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
