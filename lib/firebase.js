import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD7n9PyDeXBB1SczW0_og7yVAJqdaxXJe8",
    authDomain: "nextfire-1003.firebaseapp.com",
    projectId: "nextfire-1003",
    storageBucket: "nextfire-1003.appspot.com",
    messagingSenderId: "824224697709",
    appId: "1:824224697709:web:ba2ba3136a9d556f111e64"
  };

  // needed because Next for some reason intializes it twice
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();