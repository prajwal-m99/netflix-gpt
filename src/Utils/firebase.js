// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD60vvKC85d9aLuW_0zCPR7zzkHb2M0IZk",
  authDomain: "netflixgpt-896a4.firebaseapp.com",
  projectId: "netflixgpt-896a4",
  storageBucket: "netflixgpt-896a4.firebasestorage.app",
  messagingSenderId: "248018939130",
  appId: "1:248018939130:web:7a4b04346d259dd380ad43",
  measurementId: "G-46S5SFN3GE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();