import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyADhN1j8vyU20xQ20pyrG4hxX6oXekpWwY",
  authDomain: "react-firebase-auth-d6e5e.firebaseapp.com",
  projectId: "react-firebase-auth-d6e5e",
  storageBucket: "react-firebase-auth-d6e5e.firebasestorage.app",
  messagingSenderId: "1099312797492",
  appId: "1:1099312797492:web:18718a68824e88017ab761",
  measurementId: "G-7S1NNBEY0R",
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default auth;