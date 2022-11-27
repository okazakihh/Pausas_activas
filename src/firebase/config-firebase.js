import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/auth"


//***conexion a entorno de pruebas */
/*const firebaseConfig = {
  apiKey: "AIzaSyCzj4SI-HeaBTLzSSSi8TkOgk4XjIEmXVE",
  authDomain: "pausas-activa-fb21d.firebaseapp.com",
  projectId: "pausas-activa-fb21d",
  storageBucket: "pausas-activa-fb21d.appspot.com",
  messagingSenderId: "586665140277",
  appId: "1:586665140277:web:c2c1db6344a002b4cfd17c",
  measurementId: "G-M5GZXRD8VF"
};*/

//**conexion a entorno de produccion */

const firebaseConfig = {
  apiKey: "AIzaSyC31cek25nwEHvRs6zqIeI_lxHxEG-znb4",
  authDomain: "pausasactivasprd.firebaseapp.com",
  projectId: "pausasactivasprd",
  storageBucket: "pausasactivasprd.appspot.com",
  messagingSenderId: "410164065362",
  appId: "1:410164065362:web:2ed74881b777c2c3709b8b",
  measurementId: "G-VF7X9STGSE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


 export {firebase, db, googleAuthProvider}
