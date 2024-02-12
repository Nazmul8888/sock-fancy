// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEEcgIBQZhBQt_OCh1wOTFLTomIZDy-7A",
  authDomain: "sock-fancy.firebaseapp.com",
  projectId: "sock-fancy",
  storageBucket: "sock-fancy.appspot.com",
  messagingSenderId: "913667007727",
  appId: "1:913667007727:web:c9200534fd41dca3a7271a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;