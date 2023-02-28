function getIdsQty(cartSnap) {
  const cartProducts = {};
  cartSnap.docs.forEach(doc => {
    const { productId, qty } = doc.data();
    cartProducts[productId] = qty;
  });
  return cartProducts;
}

function buildCart(products, idsAndQty) {
  const cart = [];
  products.forEach((product) => {
    const item = {
      id: product.id,
      qty: idsAndQty[product.id],
      description: product.description,
      price: product.price,
      imgUrl: product.imgUrl,
    }
    cart.push(item);
  });
  return cart;
}

export {
  getIdsQty,
  buildCart,
}