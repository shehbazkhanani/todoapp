// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCk1bg3MVRIGEdvS5RKUd_5rEypXNIKZw",
  authDomain: "todoapp-1d482.firebaseapp.com",
  projectId: "todoapp-1d482",
  storageBucket: "todoapp-1d482.appspot.com",
  messagingSenderId: "727057657628",
  appId: "1:727057657628:web:5e9f42af851457f48b54d9",
  measurementId: "G-LZJK73Y42K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app