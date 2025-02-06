import { initializeApp } from "firebase/app";
import { getFirestore, collection, writeBatch, doc, setDoc, query, getDocs } from "firebase/firestore";
import products from './data'; 


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

export async function loadProductsOnce() {
  const batch = writeBatch(db);
  const productsCollection = collection(db, "products");
  
  try {
    console.log("Iniciando la carga de productos...");

    
    const q = query(productsCollection);
    const querySnapshot = await getDocs(q);
    
    
    if (querySnapshot.empty) {
      
      products.forEach((item) => {
        const newDocRef = doc(collection(db, "products"));
        batch.set(newDocRef, item); 
        console.log(`Agregando producto con ID ${item.id}`); 
      });

      
      await batch.commit();
      console.log("Productos cargados correctamente en Firestore");
    } else {
      console.log("Productos ya están cargados en Firestore.");
    }
  } catch (error) {
    console.error("Error cargando productos:", error);
  }
}

export async function savePurchaseData(formData) {
  try {
    const purchasesCollection = collection(db, "compras");  
    const newDocRef = doc(purchasesCollection); 
    console.log("Intentando guardar los datos:", formData); 

    await setDoc(newDocRef, formData); 

    console.log("Datos de la compra guardados correctamente en Firebase");
  } catch (error) {
    console.error("Error al guardar los datos de la compra:", error);
  }
}
