import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAM6YdiZkeiR1Bi7eq88U5zPe0QJSlbK3o",
  authDomain: "gcl333-1f1bd.firebaseapp.com",
  projectId: "gcl333-1f1bd",
  storageBucket: "gcl333-1f1bd.appspot.com",
  messagingSenderId: "897733804638",
  appId: "1:897733804638:web:440f54758c009105092acf",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
