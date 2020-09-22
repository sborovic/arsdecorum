import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB1tgeXrIfT-4O7nONtP1CW5Xw6351EbKA',
  authDomain: 'arsdecorum-fb.firebaseapp.com',
  databaseURL: 'https://arsdecorum-fb.firebaseio.com',
  projectId: 'arsdecorum-fb',
  storageBucket: 'arsdecorum-fb.appspot.com',
  messagingSenderId: '794551055433',
  appId: '1:794551055433:web:bce2346accf30ce9eebb98',
  measurementId: 'G-ZYX58BHVD9',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Utilities
const db = firebase.firestore();
const auth = firebase.auth();

// Collection references
const usersCollection = db.collection('users');
const productsCollection = db.collection('products');

// Export utilites and references
export {
  db,
  auth,
  usersCollection,
  productsCollection,
};

// firebase.analytics();
