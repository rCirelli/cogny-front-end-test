import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {
  Roboto_400Regular,
} from '@expo-google-fonts/roboto';

export default function CartBtn({ qty }) {
  return (
    <View style={styles.container}>
      { qty > 0
        ? <View style={styles.dot}>
            <Text style={styles.text}>{ qty }</Text>
          </View>
        : null
      }      
      <Image
        style={styles.bag}
        resizeMode='contain'
        source={require("../assets/bag_icon.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    right: 20,
    alignSelf: 'center',
    width: 29,
    height: 20,
    paddingRight: 37,
  },

  dot: {
    top: -4,
    right: 6,
    backgroundColor: '#F8375D',
    borderRadius: 100,
    width: 16,
    height: 16,
    position: 'absolute',
    alignSelf: 'flex-end',
    alignContent: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },

  text: {
    top: -1,
    fontFamily: 'Roboto',
    fontSize: 12,
    color: 'white',
    alignSelf: 'center',
  },

  bag: {
    width: 24,
    height: 24,
  }

});
