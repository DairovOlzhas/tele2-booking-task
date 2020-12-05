import firebase from "firebase/app";
// import "firebase/auth";
import "firebase/database";


var firebaseConfig = {
    apiKey: "AIzaSyBKT4PPi6JkjC5w5o4a3s6qjgFvtad2-5I",
    authDomain: "tele2-booking-task-647d1.firebaseapp.com",
    databaseURL: "https://tele2-booking-task-647d1-default-rtdb.firebaseio.com",
    projectId: "tele2-booking-task-647d1",
    storageBucket: "tele2-booking-task-647d1.appspot.com",
    messagingSenderId: "812505457668",
    appId: "1:812505457668:web:ee486e4d1e5e957dff8151",
    measurementId: "G-KV25SHJYPZ"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;

export const db = firebase.firestore();
export const auth = firebase.auth;
