// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAovK8BuAUayK5HwAJGzjqcCn-C5ZSw7rA",
  authDomain: "gignooks.firebaseapp.com",
  projectId: "gignooks",
  storageBucket: "gignooks.appspot.com",
  messagingSenderId: "520148796948",
  appId: "1:520148796948:web:276ccbc40f682041b74901",
  measurementId: "G-C37GR9MQQ2",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

export { auth, provider, gitHubProvider };
