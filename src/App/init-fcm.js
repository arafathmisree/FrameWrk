import * as firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAUIyuvVemjBia0hxhLYIiXkfxUQ6OOXlU",
    authDomain: "framework-72feb.firebaseapp.com",
    databaseURL: "https://framework-72feb.firebaseio.com",
    projectId: "framework-72feb",
    storageBucket: "framework-72feb.appspot.com",
    messagingSenderId: "1073313556942",
    appId: "1:1073313556942:web:8ec636d034838fd9b8239f",
    measurementId: "G-LGJLEBJSSF"
  });

const messaging = initializedFirebaseApp.messaging();
export { messaging };