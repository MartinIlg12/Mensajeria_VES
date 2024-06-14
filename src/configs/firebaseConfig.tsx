// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI2-z8Jxm2MqhcfCkyCAiB96f3X_elUQk",
  authDomain: "prueba-a115d.firebaseapp.com",
  projectId: "prueba-a115d",
  storageBucket: "prueba-a115d.appspot.com",
  messagingSenderId: "839505184409",
  appId: "1:839505184409:web:b1c240cf3aefe3fe735a08",
  databaseURL: "https://prueba-a115d-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
//export const auth = getAuth(firebase);
export const auth = initializeAuth(firebase, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

//Referencia al servicio de BDD
export const dbRealTime = getDatabase(firebase);