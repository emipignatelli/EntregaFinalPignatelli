import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore"; // Añadir 'doc' y 'getDoc'

import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDzp0rF4jOOTAX5XtZSbe3U_WyEHhTmVTQ",
  authDomain: "miprimeraappreact-6bca1.firebaseapp.com",
  projectId: "miprimeraappreact-6bca1",
  storageBucket: "miprimeraappreact-6bca1.firebasestorage.app",
  messagingSenderId: "184853262999",
  appId: "1:184853262999:web:bcf8088119d073d7356fd2",
  measurementId: "G-BWBCDYRVXF"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export async function getAsyncData() {
  console.log("Solicitando datos desde Firestore...");

  const productsCollection = collection(db, "products");
  const productSnapshot = await getDocs(productsCollection);

  
  const productList = productSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  console.log("Productos obtenidos:", productList);
  return productList;
}

export async function getAsyncItemById(itemID) {
  console.log("Solicitando producto con ID...", itemID);

  const products = await getAsyncData(); 

 
  const requestedProduct = products.find((item) => item.id === parseInt(itemID, 10)); 

  return requestedProduct;
}



export function getAsyncItemsByCategory(catID) {
  console.log("Solicitando productos para... ", catID);

  return getAsyncData().then((products) => {
    const requestedProducts = products.filter((item) => item.category.toLowerCase() === catID.toLowerCase());
    return requestedProducts;
  });
}
