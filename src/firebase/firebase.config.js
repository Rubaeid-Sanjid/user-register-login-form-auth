// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbS_4-7MUa5sXnOniGmQIhZcAAnBZxgJ4",
  authDomain: "user-register-login-form.firebaseapp.com",
  projectId: "user-register-login-form",
  storageBucket: "user-register-login-form.appspot.com",
  messagingSenderId: "809129496181",
  appId: "1:809129496181:web:ed4f15be403e26a005f23c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;