// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore"
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
  const productsCollection = collection(db, 'produtos');
  const productsDocs = await getDocs(productsCollection);
  const productsList = productsDocs.docs.map(doc => doc.data());
  return productsList
}

export {
  getProducts,
}