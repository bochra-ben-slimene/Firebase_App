// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9HVZ4cC7UZgLoS34pOBR9w_CiB_h0hTo",
    authDomain: "first-data-firebase.firebaseapp.com",
    databaeURL : "https://first-data-firebase-default-rtdb.firebaseio.com/",
    projectId: "first-data-firebase",
    storageBucket: "first-data-firebase.appspot.com",
    messagingSenderId: "333379239804",
    appId: "1:333379239804:web:edfa5027cf8ee5b18baef9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



function Login(e) {
    e.preventDefault();
    const userEmail = document.getElementById("email").value;
    const userPassword = document.getElementById("password").value;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        window.location = './dashboard.html'
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode , errorMessage);
      });


}

const formulaire = document.getElementById("formulaire")
formulaire.addEventListener('submit', (e) => Login(e))


// *  .then((x) => {})
// *  .catch((x)=>{clg(x)})