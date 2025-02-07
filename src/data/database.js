import { initializeApp, getApps } from "firebase/app";  // Asegúrate de importar getApps desde firebase/app
import { getFirestore, collection, writeBatch, doc, setDoc, query, getDocs } from "firebase/firestore";
import products from './data'; 

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRESTORE_APIKEY,
  appId: import.meta.env.VITE_FIRESTORE_APPID,
  authDomain: "miprimeraappreact-6bca1.firebaseapp.com",
  projectId: "miprimeraappreact-6bca1",
  storageBucket: "miprimeraappreact-6bca1.firebasestorage.app",
  messagingSenderId: "184853262999",
};

// Verificamos si Firebase ya está inicializado
if (getApps().length === 0) {
  initializeApp(firebaseConfig);  // Solo inicializamos si no hay aplicaciones Firebase
}
const db = getFirestore();  // Ahora utilizamos Firestore

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

export async function savePurchaseData(formData, cartItems) {
  try {
    const purchasesCollection = collection(db, "compras");  
    const newDocRef = doc(purchasesCollection); 
    console.log("Intentando guardar los datos:", formData);

    const purchaseData = {
      ...formData,
      cart: cartItems,  
      totalPrice: cartItems.reduce((total, item) => total + item.price * item.count, 0), 
    };

    await setDoc(newDocRef, purchaseData);  
    console.log("Datos de la compra guardados correctamente en Firebase");

    console.log("ID generado por Firebase:", newDocRef.id); 
    return newDocRef.id;  
  } catch (error) {
    console.error("Error al guardar los datos de la compra:", error);
  }
}
