import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  setDoc
} from "firebase/firestore";
import { db } from "./firebase";

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
  const docRef = doc(db, 'cart', id);
  setDoc(docRef, { qty })
    .then(() => console.log('Adicionado com sucesso'))
    .catch((e) => console.log(e));
}

async function updateItemQty({ id, qty }) {
  const docRef = doc(db, 'cart', id);
  updateDoc(docRef, { qty })
    .then(() => true)
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
  const [cartSnap, productsSnap] = await Promise.all([
    getDocs(cartCollection),
    getProducts(),
  ]);

  if (cartSnap.docs.length === 0) {
    return [];
  }

  const idsAndQty = {}
  cartSnap.docs.forEach((doc) => idsAndQty[doc.id] = doc.data().qty);

  const filteredProducts = productsSnap.filter(product => idsAndQty[product.id]);
  const cart = filteredProducts.map((product) => ({ ...product, qty: idsAndQty[product.id]}));

  return cart;
}

export {
  getProducts,
  addToCart,
  deleteCart,
  getCart,
  updateItemQty,
}
