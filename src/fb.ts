// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import apiKey from "../secret"

// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${apiKey}`,
  authDomain: "todo-jack-30b16.firebaseapp.com",
  projectId: "todo-jack-30b16",
  storageBucket: "todo-jack-30b16.appspot.com",
  messagingSenderId: "432750132706",
  appId: "1:432750132706:web:74fde03310b9d009c28dbb"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
// db.settings({timestampsInSnapshots: true});
export default db;
