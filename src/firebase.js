// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQEbDClJCvxoJsETBZCnJNtIjs8vDDTFY",
    authDomain: "reactoapp-e629e.firebaseapp.com",
    projectId: "reactoapp-e629e",
    storageBucket: "reactoapp-e629e.appspot.com",
    messagingSenderId: "560774623149",
    appId: "1:560774623149:web:7c17465111292dcec2bb24",
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
