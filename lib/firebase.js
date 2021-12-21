import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
// import 'firbase/compat/googleAuthProvider'
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
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();

/// Helper functions

/**
 * Gets a users/{uid} document with username
 * @param {string} username
 */
export async function getUserWithUsername(username) {
 const usersRef = firestore.collection('users');
 const query = usersRef.where('username', '==', username).limit(1);
 const userDoc = (await query.get()).docs[0];
 return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}

export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
