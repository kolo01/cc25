// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC44N6PsbaBEica4WYf1yarrJ7hscgLmMo",
  authDomain: "appchapfinal.firebaseapp.com",
  databaseURL: "https://appchapfinal-default-rtdb.firebaseio.com",
  projectId: "appchapfinal",
  storageBucket: "appchapfinal.appspot.com",
  messagingSenderId: "991388025559",
  appId: "1:991388025559:web:7778779d2400f23bf22692",
  measurementId: "G-RFSVQTGJ87"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db2 = getDatabase()
const db = getFirestore(app)
const authentic= getAuth(app)
export {app,db,db2,authentic}