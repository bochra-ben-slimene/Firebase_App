// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, ref, remove , get } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9HVZ4cC7UZgLoS34pOBR9w_CiB_h0hTo",
    authDomain: "first-data-firebase.firebaseapp.com",
    databaseURL: "https://first-data-firebase-default-rtdb.firebaseio.com/",
    projectId: "first-data-firebase",
    storageBucket: "first-data-firebase.appspot.com",
    messagingSenderId: "333379239804",
    appId: "1:333379239804:web:edfa5027cf8ee5b18baef9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getDatabase();

// * Function Get input data (ID)
function getInput(e){
 e.preventDefault();
 const input = document.getElementById("user_id").value;
 return input;

}

function RemoveUser(id) { 
    if(id === null || id.length === 0){
        alert("input empty...")
    }
    else{
        const removeUser = ref(db, `users/${id}`);
        get(removeUser)
        .then(() =>{
        remove(removeUser);
        document.getElementById("forme").reset();
        window.location = './dashboard.html'
        })
        .catch(e => alert(e.message))
    }
 }

 //* remove global function

 document.getElementById("forme").addEventListener("submit" , 
 (e) =>{
    let id = getInput(e);
    RemoveUser(id);
 })