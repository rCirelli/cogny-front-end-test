import { useContext } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import appContext from "../context/appContext";
import CartItem from "./CartItem";
import CheckoutBtn from "./CheckoutBtn";

export default function CartList() {
  const { cart, resetCart } = useContext(appContext);

  function handleCheckout() {
    Alert.alert('Pedido Finalizado', 'Sua compra foi realizada com sucesso!', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }
  
  return (
    <View style={styles.container}>
      {
        cart.items?.length > 0 ? cart.items.map(
          (item, i) => <CartItem key={ i } product={ item }/>
          // (item, i) => (<Text>{item.description}</Text>)
        ) : null //<EmptyCart>Carrinho Vazio</EmptyCart>
      }
      <View>
        {/* <CheckoutButton
          onClick={handleCheckout}
          isDisabled={isDisabled()}
        /> */}
        <View style={styles.totalWrapper}>
          <Text style={styles.labelTotal}>Total</Text>
          <Text style={styles.total}>R$ {cart.totalPrice}</Text>
        </View>
        <CheckoutBtn onPress={handleCheckout} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 10,
    alignItems: 'center',
  },

  priceWrapper: {
  },

  labelTotal: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '800',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#999',
  },

  totalWrapper: {
    marginTop: 23,
    marginBottom: 30,
  },

  total: {
    fontSize: 30,
    fontFamily: 'Roboto',
    fontWeight: '800',
    textAlign: 'center',
  }
});
