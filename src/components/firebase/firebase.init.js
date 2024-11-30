// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf2EgkyxgB3RYeAxRQQTPfRy16T9IKD3k",
  authDomain: "simple-firebase-4ca3a.firebaseapp.com",
  projectId: "simple-firebase-4ca3a",
  storageBucket: "simple-firebase-4ca3a.firebasestorage.app",
  messagingSenderId: "483338592821",
  appId: "1:483338592821:web:9a5c7fd72768ca4b94077c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
