// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGH8vM3A4hEnfKjtWrdEwzvaafdYiSH4w",
  authDomain: "avanti-633a0.firebaseapp.com",
  projectId: "avanti-633a0",
  storageBucket: "avanti-633a0.appspot.com",
  messagingSenderId: "653762390579",
  appId: "1:653762390579:web:74ddddc6ce60d128abd146",
  measurementId: "G-XWMHN4J8PB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
