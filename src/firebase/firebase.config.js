// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_APIKEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID

  apiKey: "AIzaSyC2xn9R6GzqsLnLB2zsFgKMMAND08y7S_k",
  authDomain: "cars-doctor-9916a.firebaseapp.com",
  projectId: "cars-doctor-9916a",
  storageBucket: "cars-doctor-9916a.appspot.com",
  messagingSenderId: "753743803723",
  appId: "1:753743803723:web:988d2e868b0f41056964ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;