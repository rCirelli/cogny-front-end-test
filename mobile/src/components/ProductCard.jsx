import { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AddToCartBtn from "./AddToCartBtn";
import appContext from "../context/appContext";

export default function ProductCard({ product }) {
  const { handleAddToCart, cart } = useContext(appContext);

  function onPressHandler() {
    handleAddToCart(product);
  }

  function isDisabled() {
    if(cart.items.find(item => item.id === product.id)) {
      return true;
    }
    return false;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode='cover'
        source={{uri: product.imgUrl}}
      />
      <View style={styles.wrapper}>
        <Text style={styles.text}>{product.description}</Text>
        <Text style={styles.price}>R$ {product.price}</Text>
      </View>
      <AddToCartBtn disabled={isDisabled()} onPress={ onPressHandler } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: '#fff',
    width: 338,
    height: 358,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  image: {
    width: 217,
    height: 200,
  },

  wrapper: {
    width: 285,
    justifyContent: 'space-evenly',
    flex: 2,
  },

  price: {
    fontSize: 21,
    fontFamily: 'Roboto',
    fontWeight: '800',
    alignSelf: 'flex-start',
  },

  text: {
    fontFamily: 'Roboto',
    color: '#333',
    fontSize: 16,
    textTransform: 'capitalize',
    textAlign: 'justify',
  },
});
