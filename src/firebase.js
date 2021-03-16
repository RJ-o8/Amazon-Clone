

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAX-UrlIYAjSH4v3rBCkRSrqtIwAK-WJs4",
    authDomain: "azclone-byritik.firebaseapp.com",
    projectId: "azclone-byritik",
    storageBucket: "azclone-byritik.appspot.com",
    messagingSenderId: "760808973280",
    appId: "1:760808973280:web:1f5dc2a884448371c0c185",
    measurementId: "G-HCS2B68G77"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};