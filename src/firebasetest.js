import { initializeApp, getApps } from "firebase/app";  // Asegúrate de importar getApps desde firebase/app
import { getFirestore, collection, writeBatch, doc, getDocs } from "firebase/firestore";
import products from './data'; 

const firebaseConfig = {
  apiKey: "AIzaSyDzp0rF4jOOTAX5XtZSbe3U_WyEHhTmVTQ",
  authDomain: "miprimeraappreact-6bca1.firebaseapp.com",
  projectId: "miprimeraappreact-6bca1",
  storageBucket: "miprimeraappreact-6bca1.firebasestorage.app",
  messagingSenderId: "184853262999",
  appId: "1:184853262999:web:bcf8088119d073d7356fd2",
};

// Verificamos si Firebase ya está inicializado
if (getApps().length === 0) {
  initializeApp(firebaseConfig);  // Solo inicializamos si no hay aplicaciones Firebase
}
const db = getFirestore();  // Ahora utilizamos Firestore

export async function loadProductsOnce() {
  const batch = writeBatch(db);
  const productsCollection = collection(db, "products");
  
  const productSnapshot = await getDocs(productsCollection);
  const existingProducts = productSnapshot.docs.map(doc => doc.id);

  console.log("Productos existentes en Firestore:", existingProducts);

  products.forEach((item) => {
    if (!existingProducts.includes(item.id.toString())) {
      const newDocRef = doc(collection(db, "products"));
      batch.set(newDocRef, item);
    }
  });

  await batch.commit();
  console.log("Productos cargados correctamente en Firestore");
}
