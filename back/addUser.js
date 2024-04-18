// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
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

function addUser(e) {
    e.preventDefault();

    const Name = document.getElementById('new_user_name').value;
    const Email = document.getElementById('new_user_email').value;
    const Adress = document.getElementById('new_user_adress').value;
    const Town = document.getElementById('new_user_town').value;
    const zipCode = document.getElementById('new_user_zip').value;

    console.log(Name, Email, Adress, Town, zipCode);

    WriteUserData(Name, Email, Adress, Town, zipCode);

}

function WriteUserData(name, email, adress, town, zipCode) {
    const db = getDatabase();
    let userId = email.slice(0, 6) +
        Math.floor(Math.random() * 100) +
        town.slice(0, 2);

    set(ref(db, 'users/' + userId), {
        Firstname_Lastname: name,
        Email_adress: email,
        Home_adress: adress,
        Town: town,
        ZIP_CODE: zipCode,
    });
}

const form = document.getElementById('Formulaire');
form.addEventListener('submit', (e) => addUser(e))