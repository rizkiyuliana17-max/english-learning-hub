import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, child } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFTQolJ8GqTT9UZ2gY4JLghBY7ovDkQe8",
  authDomain: "english-f0116.firebaseapp.com",
  databaseURL: "https://english-f0116-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "english-f0116",
  storageBucket: "english-f0116.firebasestorage.app",
  messagingSenderId: "722221500657",
  appId: "1:722221500657:web:62727d6aa6749fde7e0150",
  measurementId: "G-3FJN4MK7C0"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, get, set, child };
