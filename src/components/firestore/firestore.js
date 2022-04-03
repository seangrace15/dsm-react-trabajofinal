import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCDkrS-0fi3HKqgDb_1IFBKqPatA0wuZ-Q",
  authDomain: "dsm-trabajofinal-sgp.firebaseapp.com",
  projectId: "dsm-trabajofinal-sgp",
  storageBucket: "dsm-trabajofinal-sgp.appspot.com",
  messagingSenderId: "418005548043",
  appId: "1:418005548043:web:e81e72759a19b24d759b0e",
  measurementId: "G-LKPJLF0FK6"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;