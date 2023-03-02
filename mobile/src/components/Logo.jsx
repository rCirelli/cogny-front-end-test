import React from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('Home')}
    >
      <Text style={styles.text}>COGNYSHOES</Text>
      <Image
        style={styles.logo}
        resizeMode='contain'
        source={require("../assets/cognyshoes_logo.png")}
      />
    </Pressable>
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
    fontFamily: 'Roboto',
    fontWeight: '800',
    fontSize: 22,
    color: '#fff',
    marginRight: 10,
  },

  logo: {
    width: 45,
    height: 35,
  }

});
