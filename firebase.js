import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpnhizqPPEdBhIrcBmMjIls2PE-gs4Wws",
  authDomain: "signal-clone-ffed4.firebaseapp.com",
  projectId: "signal-clone-ffed4",
  storageBucket: "signal-clone-ffed4.appspot.com",
  messagingSenderId: "91199030810",
  appId: "1:91199030810:web:6766695b3d984b71a133a3",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
