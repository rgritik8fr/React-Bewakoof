import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyASTbYDZi83vvq2vZckg0_Vz9RTwk3FgbE",
  authDomain: "ecom-8ef0e.firebaseapp.com",
  projectId: "ecom-8ef0e",
  storageBucket: "ecom-8ef0e.appspot.com",
  messagingSenderId: "327369647246",
  appId: "1:327369647246:web:353cef0a77d4c4760e95df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const SignWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
