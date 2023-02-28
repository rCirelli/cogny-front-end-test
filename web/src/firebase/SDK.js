// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKeIaIk8wjv48N4x_uBSBQbPbKDyn-nHI",
  authDomain: "cogny-front-end-test.firebaseapp.com",
  projectId: "cogny-front-end-test",
  storageBucket: "cogny-front-end-test.appspot.com",
  messagingSenderId: "388659094898",
  appId: "1:388659094898:web:2fbeb276451e66c67da9eb",
  measurementId: "G-ETH9KM5198"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

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
  const cartProducts = {};
  cartSnap.docs.forEach(doc => {
    const { productId, qty } = doc.data();
    cartProducts[productId] = qty;
  });

  const ids = Object.keys(cartProducts);
  if (ids.length === 0) {
    return [];
  }
  const products = (await getProducts()).filter(product => ids.includes(product.id));
  const cart = [];
  products.forEach((product) => {
    const item = {
      id: product.id,
      qty: cartProducts[product.id],
      description: product.description,
      price: product.price,
      imgUrl: product.imgUrl,
    }
    cart.push(item);
  });
  return cart;
}

export {
  getProducts,
  addToCart,
  deleteCart,
  getCart,
}