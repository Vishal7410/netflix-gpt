// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk2fwEebOFdJB_UiIWUYCYIa1EYlfd8WI",
  authDomain: "netflixgpt3-f7090.firebaseapp.com",
  projectId: "netflixgpt3-f7090",
  storageBucket: "netflixgpt3-f7090.appspot.com",
  messagingSenderId: "748571071117",
  appId: "1:748571071117:web:f9bec92dbb0baf07db48c4",
  measurementId: "G-RJ8BW9BXB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();