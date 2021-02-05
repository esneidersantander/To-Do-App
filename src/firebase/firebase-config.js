 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';
 
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCbU6yfSoTEUHUC5Hx9ePcaJ8H9YHZ8TvE",
    authDomain: "to-do-app-react-bae00.firebaseapp.com",
    projectId: "to-do-app-react-bae00",
    storageBucket: "to-do-app-react-bae00.appspot.com",
    messagingSenderId: "377805345926",
    appId: "1:377805345926:web:30507196bfbe14f46ced07"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const db = firebase.firestore();
  const googleAuthProvider =  new firebase.auth.GoogleAuthProvider();

  export{
      db,
      googleAuthProvider,
      firebase
  }