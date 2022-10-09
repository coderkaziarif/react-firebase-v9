import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCQspvnf7VAnZtwgI0GuR4c_SOmz0KJLGc",
  authDomain: "react-login-resister.firebaseapp.com",
  projectId: "react-login-resister",
  storageBucket: "react-login-resister.appspot.com",
  messagingSenderId: "46246223895",
  appId: "1:46246223895:web:8bea83215a1da8bfcf7c52"
};


export const app = initializeApp(firebaseConfig);