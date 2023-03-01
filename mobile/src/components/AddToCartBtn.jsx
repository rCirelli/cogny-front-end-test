import { Pressable, StyleSheet, Text, View } from "react-native";
import React from 'react';

export default function AddToCartBtn({ disabled, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, disabled && styles.disabled]}
      disabled={disabled}
    >
      <View style={[styles.label, disabled && styles.labelDisabled]}>
        <Text style={{fontSize: 14, fontFamily: 'Roboto', color: '#fff'}}>1</Text>
      </View>
      <Text style={styles.text}>Adicionar</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  disabled: {
    backgroundColor: '#6d686a',
  },

  button: {
    backgroundColor: '#F8375D',
    width: 307,
    height: 42,
    borderRadius: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  text: {
    flex: 2,
    fontFamily: 'Roboto_700Bold',
    fontSize: 14,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#fff',
  },

  label: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    height: '100%',
    width: 81,
    backgroundColor: '#c62749',
    justifyContent: 'center',
    alignItems: 'center',
  },

  labelDisabled: {
    backgroundColor: '#464444',
  },
});
