import firebase from 'firebase'
import { getAnalytics } from "firebase/analytics";


const analytics = getAnalytics(app);


const firebase = firebase.initializeApp({
    apiKey: "AIzaSyDsLJZzkDRIy2sTrv3hn9e8298o7GbhwzA",
    authDomain: "portfolio2022-maly-a2fb4.firebaseapp.com",
    projectId: "portfolio2022-maly-a2fb4",
    storageBucket: "portfolio2022-maly-a2fb4.appspot.com",
    messagingSenderId: "167635444705",
    appId: "1:167635444705:web:60919c59fb1cec96a228a0",
    measurementId: "G-FDZ03FNBEL"
      
})


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDsLJZzkDRIy2sTrv3hn9e8298o7GbhwzA",
//   authDomain: "portfolio2022-maly-a2fb4.firebaseapp.com",
//   projectId: "portfolio2022-maly-a2fb4",
//   storageBucket: "portfolio2022-maly-a2fb4.appspot.com",
//   messagingSenderId: "167635444705",
//   appId: "1:167635444705:web:60919c59fb1cec96a228a0",
//   measurementId: "G-FDZ03FNBEL"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);