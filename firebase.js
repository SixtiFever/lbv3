// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMND47dQa1JTimub9EG3OScTQzzXRFj_M",
  authDomain: "loyalbeanv2.firebaseapp.com",
  projectId: "loyalbeanv2",
  storageBucket: "loyalbeanv2.appspot.com",
  messagingSenderId: "965669480920",
  appId: "1:965669480920:web:74912c31286896bd3deaad"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);