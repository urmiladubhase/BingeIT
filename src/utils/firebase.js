// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6llrVPqkr2Yzprk5x3zZ3swxijTDwMg0",
  authDomain: "bingeit-a6f20.firebaseapp.com",
  projectId: "bingeit-a6f20",
  storageBucket: "bingeit-a6f20.firebasestorage.app",
  messagingSenderId: "356637279380",
  appId: "1:356637279380:web:b8f7e3aa060efa4b3f6081",
  measurementId: "G-NBYT5S7ENL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// console.log(analytics);



export const auth = getAuth();