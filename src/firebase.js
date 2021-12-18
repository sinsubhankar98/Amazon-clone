// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARJy2f8I3mXSJ_8TGKSk69-kR3ox4oC1c",
  authDomain: "clone-d257d.firebaseapp.com",
  projectId: "clone-d257d",
  storageBucket: "clone-d257d.appspot.com",
  messagingSenderId: "652419641376",
  appId: "1:652419641376:web:57693055eea9599489cc45",
  measurementId: "G-7MXJSE8N93"
};

// Initialize Firebase


const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth }
  export default db;