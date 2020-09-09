import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCoCDq5XQCKXL2gC5VgypFfoEAel8xwTS0",
    authDomain: "clone-4bddb.firebaseapp.com",
    databaseURL: "https://clone-4bddb.firebaseio.com",
    projectId: "clone-4bddb",
    storageBucket: "clone-4bddb.appspot.com",
    messagingSenderId: "617873530948",
    appId: "1:617873530948:web:85629d6745298d48f25c11",
    measurementId: "G-Z4J147HHNM"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };