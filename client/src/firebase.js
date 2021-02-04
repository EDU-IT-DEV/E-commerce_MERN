import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM7b1L9TS7x_GUf2GqD0BXNxxxR8fwZcA",
  authDomain: "ecommerce-56068.firebaseapp.com",
  projectId: "ecommerce-56068",
  storageBucket: "ecommerce-56068.appspot.com",
  messagingSenderId: "938929772230",
  appId: "1:938929772230:web:be02aaefac70ac4370a9c7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
