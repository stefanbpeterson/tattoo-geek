import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCjxfizKu-Khifosk53aJeuLvdSiaVVtjo",
    authDomain: "tattoo-geek.firebaseapp.com",
    projectId: "tattoo-geek",
    storageBucket: "tattoo-geek.appspot.com",
    messagingSenderId: "837757489782",
    appId: "1:837757489782:web:d14077496f2bc71cc08557",
    measurementId: "G-Q0JBWQFDQ6"
  }

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export {firebase}
  