// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkmmUW_qeoHkqiTsvXIVtdBt4060cd2cE",
  authDomain: "gigcraftr.firebaseapp.com",
  projectId: "gigcraftr",
  storageBucket: "gigcraftr.appspot.com",
  messagingSenderId: "538650427898",
  appId: "1:538650427898:web:da0142a7a79bc775576443",
  measurementId: "G-TQNHQYF9QM"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

export { auth, provider , gitHubProvider };