import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpC9SuJWGpNBKbwaVqVlAV57NlHN82oKo",
  authDomain: "switter-27052.firebaseapp.com",
  projectId: "switter-27052",
  storageBucket: "switter-27052.appspot.com",
  messagingSenderId: "787566049995",
  appId: "1:787566049995:web:7f5723bff20d2a237ff94e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const AuthService = getAuth();