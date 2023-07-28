// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhPzhxx4Exri3mfXLA-OWAL-GeY1uacUQ",
  authDomain: "nextauth-9155b.firebaseapp.com",
  projectId: "nextauth-9155b",
  storageBucket: "nextauth-9155b.appspot.com",
  messagingSenderId: "1013019451582",
  appId: "1:1013019451582:web:dda30d222c964c58b8beef",
  measurementId: "G-RSKTW5K95H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;