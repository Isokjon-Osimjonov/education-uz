import * as firebase from 'firebase'
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBiBVivHse3k7B9NaRgeWeK7bEqFuTBGxw",
    authDomain: "edu-uz-c9db2.firebaseapp.com",
    projectId: "edu-uz-c9db2",
    storageBucket: "edu-uz-c9db2.appspot.com",
    messagingSenderId: "433698808692",
    appId: "1:433698808692:web:2b208e06ab2a422a774221",
    measurementId: "G-0XBB3YHGJ8"
  }

  const app = firebase.initializeApp(firebaseConfig)
  const auth = app.auth()


  export { auth }