import firebase from 'firebase/app';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyAL_PZ-McJRzTkDAWTa_lbwrfuP6ai5bRo",
    authDomain: "sistema-218de.firebaseapp.com",
    projectId: "sistema-218de",
    storageBucket: "sistema-218de.appspot.com",
    messagingSenderId: "496142847107",
    appId: "1:496142847107:web:fd9e3ac49e8d26322b1fb6",
    measurementId: "G-PS1N4BDFC8"
  };
  
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

export default firebase;
