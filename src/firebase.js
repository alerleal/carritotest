import firebase from 'firebase/app';


import "firebase/firestore";



const miConfiguracion = {
    apiKey: "AIzaSyC-dUD2efNLXRf041JvK7BK9BcKWUFmQS4",
    authDomain: "carritoweb-e6573.firebaseapp.com",
    projectId: "carritoweb-e6573",
    storageBucket: "carritoweb-e6573.appspot.com",
    messagingSenderId: "48282857941",
    appId: "1:48282857941:web:5073ad0160b3e13a45cd5c"
};

const app = firebase.initializeApp(miConfiguracion);

export const firestore = firebase.firestore(app);