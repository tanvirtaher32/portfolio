import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyChA5D54N2Zrj20olgEuspwolm0M34aGE4",
  authDomain: "portfolio-258a4.firebaseapp.com",
  projectId: "portfolio-258a4",
  storageBucket: "portfolio-258a4.appspot.com",
  messagingSenderId: "101665087296",
  appId: "1:101665087296:web:8257d464d3b569a4bb64a5"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
