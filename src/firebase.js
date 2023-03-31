// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQJkLk60-o2CgGmZjSJEu6oFk6oLi53cU",
  authDomain: "ankuran-9e96f.firebaseapp.com",
  projectId: "ankuran-9e96f",
  storageBucket: "ankuran-9e96f.appspot.com",
  messagingSenderId: "906769738496",
  appId: "1:906769738496:web:82346f0bf508b3bfc4e1e5",
  measurementId: "G-2VC7Q77F1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
// const analytics = getAnalytics(app);
export {app, auth};
