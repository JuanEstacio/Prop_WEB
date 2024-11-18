// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC27Nj2N3OQ_F9mBKMKbQsKsvKIybY0kRQ",
  authDomain: "project-webv.firebaseapp.com",
  projectId: "project-webv",
  storageBucket: "project-webv.firebasestorage.app",
  messagingSenderId: "37090753649",
  appId: "1:37090753649:web:5aaee35ffb90783384afd0"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);

export const db = getFirestore(fb);

