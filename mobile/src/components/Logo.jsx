import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>COGNYSHOES</Text>
      <Image
        style={styles.logo}
        resizeMode='contain'
        source={require("../assets/cognyshoes_logo.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 18,
    backgroundColor: '#141419',
    flex: 0,
    gap: 20,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  text: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 22,
    color: '#fff',
    marginRight: 10,
  },

  logo: {
    width: 45,
    height: 35,
  }

});
