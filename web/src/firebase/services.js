import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";
import { buildCart, getIdsQty } from "./helpers";

async function getProducts() {
  const productsCollection = collection(db, 'products');
  const productsSnap = await getDocs(productsCollection);
  const productsList = productsSnap.docs.map(doc => {
    const product = doc.data();
    return {
      id: doc.id,
      description: product.description,
      price: product.price,
      imgUrl: product.imgUrl,
    };
  });

  return productsList;
}

async function addToCart({ id, qty }) {
  const cartCollection = collection(db, 'cart');
  addDoc(cartCollection, { productId: id, qty })
    .then((docRef) => console.log("Adicionado com sucesso"))
    .catch((e) => console.log(e));
}

async function deleteCart() {
  const cartCollection = collection(db, 'cart');
  const cartSnap = await getDocs(cartCollection);
  const asyncDelete = cartSnap.docs.map(({ id }) => {
    const docRef = doc(db, 'cart', id);
    return deleteDoc(docRef);
  });

  await Promise.all(asyncDelete)
}

async function getCart() {
  const cartCollection = collection(db, 'cart');
  const cartSnap = await getDocs(cartCollection);

  if (cartSnap.docs.length === 0) {
    return [];
  }

  const idsAndQty = getIdsQty(cartSnap);
  const ids = Object.keys(idsAndQty);
  const products = (await getProducts()).filter(product => ids.includes(product.id));
  const cart = buildCart(products, idsAndQty);
  return cart;
}

export {
  getProducts,
  addToCart,
  deleteCart,
  getCart,
}