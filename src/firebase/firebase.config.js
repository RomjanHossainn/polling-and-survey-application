// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2iBG6CJkVbDkF9gC0UYIuYjGf39okqkY",
  authDomain: "polling-and-survey-6cd6e.firebaseapp.com",
  projectId: "polling-and-survey-6cd6e",
  storageBucket: "polling-and-survey-6cd6e.appspot.com",
  messagingSenderId: "124694246791",
  appId: "1:124694246791:web:740d200e54d48663b10f22",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)