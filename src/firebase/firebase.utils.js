import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyATTYZ3z9XVkDDMLrFUkXadV00enEVa7gY",
  authDomain: "mytsy-db.firebaseapp.com",
  databaseURL: "https://mytsy-db.firebaseio.com",
  projectId: "mytsy-db",
  storageBucket: "mytsy-db.appspot.com",
  messagingSenderId: "835089694417",
  appId: "1:835089694417:web:8ae085f5908f3a908a0ff0",
  measurementId: "G-NDBFE66CPK",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
