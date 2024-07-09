import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_apikey,
  authDomain: "coders-41ba3.firebaseapp.com",
  projectId: "coders-41ba3",
  storageBucket: "coders-41ba3.appspot.com",
  messagingSenderId: "428940426729",
  appId: "1:428940426729:web:5ba3a63608d07764bc9f78",
  measurementId: "G-QNYQ7CF7KJ",
};
const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app);