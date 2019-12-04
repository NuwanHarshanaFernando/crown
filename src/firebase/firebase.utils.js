import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'; 

const config = {
    apiKey: "AIzaSyCuvLF41FxUZvtqaiQCD3F7DifyLcwqC28",
    authDomain: "crwn-db-2e267.firebaseapp.com",
    databaseURL: "https://crwn-db-2e267.firebaseio.com",
    projectId: "crwn-db-2e267",
    storageBucket: "crwn-db-2e267.appspot.com",
    messagingSenderId: "900767901493",
    appId: "1:900767901493:web:d803d5493ce7e1822ece7c",
    measurementId: "G-VD9CPC5TZX"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

  