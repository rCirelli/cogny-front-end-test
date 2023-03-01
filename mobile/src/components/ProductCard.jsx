import { Image, StyleSheet, Text, View } from "react-native";
import AddToCartBtn from "./AddToCartBtn";

export default function ProductCard({ product: { description, price, imgUrl } }) {
  function onPressHandler() {
    console.log('added to cart');
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode='cover'
        source={{uri: imgUrl}}
      />
      <View style={styles.wrapper}>
        <Text style={styles.text}>{description}</Text>
        <Text style={styles.price}>R$ {price}</Text>
      </View>
      <AddToCartBtn disabled={false} onPress={ onPressHandler } />
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
    justifyContent: 'space-evenly',
    flex: 2,
  },

  price: {
    fontSize: 21,
    fontWeight: '600',
    alignSelf: 'flex-start',
  },

  text: {
    color: '#333',
    fontSize: 16,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
});
