import { Pressable, StyleSheet, Text, View } from "react-native";
import React from 'react';

export default function CheckoutBtn({ onPress, disabled }) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, disabled && styles.buttonDisabled]}
      disabled={disabled}
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

  buttonDisabled: {
    backgroundColor: '#6d686a',
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
