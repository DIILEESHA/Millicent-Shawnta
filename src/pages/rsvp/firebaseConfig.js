// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBR8t4sT1RpaNRjdCQPNgrxo-_hiBza-7I",
  authDomain: "albya-5b0fe.firebaseapp.com",
  projectId: "albya-5b0fe",
  storageBucket: "albya-5b0fe.appspot.com",
  messagingSenderId: "666205613205",
  appId: "1:666205613205:web:0aebf263a60c1e95a37f9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };