import firebase from 'firebase'
//import * as firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA_12HRGZ3WaXu7uNQWM2C3SAR0Ag95y3k",
    authDomain: "comparador-b7d99.firebaseapp.com",
    projectId: "comparador-b7d99",
    storageBucket: "comparador-b7d99.appspot.com",
    messagingSenderId: "85239489872",
    appId: "1:85239489872:web:9fe32cccece923870e3855",
    measurementId: "G-574ZCY5MT8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  

  export  const database=firebase.firestore()
