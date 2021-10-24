// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKhmaYdVRKgyEN3tat8TgYlRdjODQ64IY",
  authDomain: "specialist-social-network.firebaseapp.com",
  projectId: "specialist-social-network",
  storageBucket: "specialist-social-network.appspot.com",
  messagingSenderId: "211143605611",
  appId: "1:211143605611:web:0e00e3ee00a1295d6d202e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default app;