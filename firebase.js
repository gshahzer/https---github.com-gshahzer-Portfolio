import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDydD9uurSzEaHnOgDd7uBmEpKk6MPi_0k",
  authDomain: "portfolio-fa437.firebaseapp.com",
  projectId: "portfolio-fa437",
  storageBucket: "portfolio-fa437.appspot.com",
  messagingSenderId: "433433592171",
  appId: "1:433433592171:web:5cc249c3a4511928758c2e",
  measurementId: "G-ZJ1DTKMVRC"
};
export const Firebase= firebase.initializeApp(firebaseConfig)//named export
export const storage = getStorage();
