// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWv_QPnAlelTAonf1S-lI5KFoAzjY7KHs",
  authDomain: "popcorn-picks-movies-portal.firebaseapp.com",
  projectId: "popcorn-picks-movies-portal",
  storageBucket: "popcorn-picks-movies-portal.firebasestorage.app",
  messagingSenderId: "984700623804",
  appId: "1:984700623804:web:cefd4fab683c7ec486e9b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);