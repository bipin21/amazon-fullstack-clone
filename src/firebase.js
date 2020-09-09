import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCX-GAbhEE03hUVYhGJ5WXh_AMQ29BW0Ug",
    authDomain: "fullstack-clone-5f0cd.firebaseapp.com",
    databaseURL: "https://fullstack-clone-5f0cd.firebaseio.com",
    projectId: "fullstack-clone-5f0cd",
    storageBucket: "fullstack-clone-5f0cd.appspot.com",
    messagingSenderId: "434153614067",
    appId: "1:434153614067:web:acf2cd15bab5f539ad2586",
    measurementId: "G-LWS7CP1CG3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };