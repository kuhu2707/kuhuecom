// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAOiOqeFfvWnPPVQNl8XsDl5OK8tumiTyc",
    authDomain: "pahanavva.firebaseapp.com",
    projectId: "pahanavva",
    //storageBucket: "pahanavva.firebasestorage.app",
    storageBucket: "pahanavva.appspot.com",
    messagingSenderId: "863901078117",
    appId: "1:863901078117:web:35368ef4c94a87b323ec8c",
    measurementId: "G-289V5CVTLE"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode="en";

export { auth, RecaptchaVerifier, signInWithPhoneNumber };
