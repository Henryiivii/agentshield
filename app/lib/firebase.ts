// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLCbcwaTOWHgZnd2qXyqtXc_YhHBwE8pg",
  authDomain: "agentshield-iv.firebaseapp.com",
  projectId: "agentshield-iv",
  storageBucket: "agentshield-iv.firebasestorage.app",
  messagingSenderId: "1067515142956",
  appId: "1:1067515142956:web:627e3097275d8b57e38289",
  measurementId: "G-N1KHQ7VNNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
