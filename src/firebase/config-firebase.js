import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCzj4SI-HeaBTLzSSSi8TkOgk4XjIEmXVE",
  authDomain: "pausas-activa-fb21d.firebaseapp.com",
  projectId: "pausas-activa-fb21d",
  storageBucket: "pausas-activa-fb21d.appspot.com",
  messagingSenderId: "586665140277",
  appId: "1:586665140277:web:c2c1db6344a002b4cfd17c",
  measurementId: "G-M5GZXRD8VF"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 const db = firebase.firestore();
 const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

 export {firebase, db, googleAuthProvider}
