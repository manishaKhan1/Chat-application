
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvbmBMdJetywokPOstlokF7V10NFQQOH8",
  authDomain: "chat-application-6ede3.firebaseapp.com",
  projectId: "chat-application-6ede3",
  storageBucket: "chat-application-6ede3.appspot.com",
  messagingSenderId: "389912097258",
  appId: "1:389912097258:web:0ff4c68a86da0e79fd0293"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();