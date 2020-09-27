import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDFOaEhnlym_v0-ZIJjnbO-Yuw2z13e3mg",
  authDomain: "todoapp-cd4ff.firebaseapp.com",
  databaseURL: "https://todoapp-cd4ff.firebaseio.com",
  projectId: "todoapp-cd4ff",
  storageBucket: "todoapp-cd4ff.appspot.com",
  messagingSenderId: "374876345260",
  appId: "1:374876345260:web:1d55f542fec898954fa009",
  measurementId: "G-2HFZS7ZW7N",
});
const db = firebaseApp.firestore();
export default db;
