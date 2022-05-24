import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  query,
  where,
  collection,
  Timestamp,
  getDocs,
  setDoc,
  addDoc
} from "firebase/firestore/lite";
import swal from "sweetalert";
import { products } from "./data";

const firebaseConfig = {
  apiKey: "AIzaSyB3JkGomds5GEvgvHoV8irx8PDtIXU9kO8",
  authDomain: "coder-agusvalinoti.firebaseapp.com",
  projectId: "coder-agusvalinoti",
  storageBucket: "coder-agusvalinoti.appspot.com",
  messagingSenderId: "120265223245",
  appId: "1:120265223245:web:5bc6e0155ccca1be96c004",
};

const app = initializeApp(firebaseConfig);
const fireStoreDB = getFirestore(app);

export default fireStoreDB;

//OBTENER ITEMS DE BASE DE DATOS
export async function getAllItems() {
  const myCollection = collection(fireStoreDB, "products");

  const productSnap = await getDocs(myCollection);

  return productSnap.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
}

export async function getItemByCategory(categoryId) {
  const myCollection = collection(fireStoreDB, "products");
  const queryProduct = query(myCollection, where("category", "==", categoryId));

  const productSnap = await getDocs(queryProduct);

  return productSnap.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
}

export async function getItem(id) {
  const myCollection = collection(fireStoreDB, "products");
  const productRef = doc(myCollection, id);
  const productSnap = await getDoc(productRef);

  return {
    ...productSnap.data(),
    id: productSnap.id,
  };
}

export async function dataToFirebase() {
    const PRODUCTS = products
    PRODUCTS.forEach((item) => {
    const newItem = doc(collection(fireStoreDB, "products"));

    setDoc(newItem, item)
      .then(() => {
        console.log("Document written with ID: ", newItem.id);
      })
      .catch((err) => {
        console.error("Error adding document: ", err);
      });
  });
}

export async function createBuyOrder(orderData){
    const buyDate = Timestamp.now()
    const orderWithDate = {
        ...orderData,
        date: buyDate    
    }

    const myCollection = collection (fireStoreDB, "finishOrders")
    const orderDoc = await addDoc(myCollection, orderWithDate) 

    return swal(`¡Muchas gracias por la confianza! Su orden de compra es:  ${orderDoc.id}`); 
}
