import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
require('dotenv').config();
const { API_KEY } = process.env;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "freevents-dd55a.firebaseapp.com",
  projectId: "freevents-dd55a",
  storageBucket: "freevents-dd55a.appspot.com",
  messagingSenderId: "133988359780",
  appId: "1:133988359780:web:062474a7aa1c525945c971"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
