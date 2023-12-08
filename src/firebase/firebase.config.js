// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1moVNQz6wFZp5R7DXkJO0s2zFCs1hFfo",
  authDomain: "crazy-challenge.firebaseapp.com",
  projectId: "crazy-challenge",
  storageBucket: "crazy-challenge.appspot.com",
  messagingSenderId: "706185026215",
  appId: "1:706185026215:web:9f6314628f79ffc7cbd982"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);