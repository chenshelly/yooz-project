// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDNHcCyM3wS7TYQsYneAsXIzJ2Lhz3Cr88",
  authDomain: "yooz-angular-prog.firebaseapp.com",
  projectId: "yooz-angular-prog",
  storageBucket: "yooz-angular-prog.appspot.com",
  messagingSenderId: "450103234093",
  appId: "1:450103234093:web:2937ee6763638e8660f2a4",
  measurementId: "G-QVHR869NEY"
};


export const environment ={
  production: false,
   firebase:{
    apiKey: "AIzaSyDNHcCyM3wS7TYQsYneAsXIzJ2Lhz3Cr88",
    authDomain: "yooz-angular-prog.firebaseapp.com",
    projectId: "yooz-angular-prog",
    storageBucket: "yooz-angular-prog.appspot.com",
    messagingSenderId: "450103234093",
    appId: "1:450103234093:web:2937ee6763638e8660f2a4",
    measurementId: "G-QVHR869NEY"
  } 
}
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics=getAnalytics(app);