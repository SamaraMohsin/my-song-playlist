import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBYONZtDt0PPj70VvG0Zc8Q9gBRQ2CIbw4",
    authDomain: "song-playlist-app-afa2f.firebaseapp.com",
    projectId: "song-playlist-app-afa2f",
    storageBucket: "song-playlist-app-afa2f.appspot.com",
    messagingSenderId: "1053682299817",
    appId: "1:1053682299817:web:42ad9ee8a3e9305b054ab8"
  };

  // init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()


// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth,projectStorage,timestamp }