// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
import { getFirestore , collection } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoEgn8DaJLJy5Qr3lEj81CKbiPqRAqNjs",
  authDomain: "instagramreels-d1cbf.firebaseapp.com",
  projectId: "instagramreels-d1cbf",
  storageBucket: "instagramreels-d1cbf.appspot.com",
  messagingSenderId: "358856733867",
  appId: "1:358856733867:web:4ba72a42b2a7d30c3573ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
 export const fstore = firestore;
export const database ={
  users:collection(firestore ,"users"),
  posts:collection(firestore, "posts"),
  comments:collection( firestore,"comments")
}
export const storage = getStorage(app);

