import { Pressable, StyleSheet, Text, View } from "react-native";
import React from 'react';

export default function CheckoutBtn({ onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={styles.button}
    >
      <Text style={styles.text}>Finalizar Pedido</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F8375D',
    width: '100%',
    height: 42,
    borderRadius: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  text: {
    flex: 2,
    fontFamily: 'Roboto',
    fontWeight: '800',
    fontSize: 14,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#fff',
  },
});
