// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRQmkFLeIQzHehmFu0-vj4TJLLpj87sEI",
  authDomain: "ema-john-simple-fe0bd.firebaseapp.com",
  projectId: "ema-john-simple-fe0bd",
  storageBucket: "ema-john-simple-fe0bd.appspot.com",
  messagingSenderId: "99688798789",
  appId: "1:99688798789:web:571f50fc13223d5c89e12c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;