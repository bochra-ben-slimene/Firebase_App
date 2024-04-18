// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
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

function getAllUsers() {
    const db = getDatabase();
    const UseresReference = ref(db, 'users/');
    onValue(UseresReference, (DB_data) => {
        const data = DB_data.val();
        console.log("-------------data------------------------------")
        console.log(data)

        // updateStarCount(postElement, data);
        let keys = Object.keys(data);
        console.log("-------------keys------------------------------")
        console.log(keys)

        // *  total users
        let TotalUsers = keys.length;
        let totalUsersHTML = document.createElement("div");
        totalUsersHTML.innerHTML = `<div> total user in database : <b> ${TotalUsers} </b></div>`
        document.getElementById("dashboard").appendChild(totalUsersHTML);

        console.log("-------------TotalUsers------------------------------")
        console.log(TotalUsers)


        for (let i = 0; i < TotalUsers; i++) {
            let current_user = keys[i];
            let current_user_data = [current_user];

            console.log("-------------data current_user------------------------------")
            console.log(current_user_data)
            console.log(keys[i]);

            let email = data[current_user].Email_adress;
            console.log("EMAIL :", email);

            let nameLastName = data[current_user].Firstname_Lastname; // * data : object el kbir
            console.log("Name : ", nameLastName);

            let Home = data[current_user].Home_adress;
            console.log("home :", Home);

            let zipCode = data[current_user].ZIP_CODE; // * data : object el kbir
            console.log("Towns : ", zipCode);

            let town = data[current_user].Town; // * data : object el kbir
            console.log("Towns : ", town);


            let userHtml = document.createElement("div");
            userHtml.innerHTML =
                `<div> id : <b> ${current_user} </b> </div>
                <div><h4>Name and last name : </h4> <h5> ${nameLastName}</h5></div>
            <div> <h4> email : </h4> <h5> ${Home}</h5> </div>
            <div> <h4> email : </h4> <h5> ${town}</h5> </div>
            <div> <h4> email : </h4> <h5> ${zipCode}</h5> </div>
            <hr/>
            `;
            document.getElementById("dashboard").appendChild(userHtml);

        }
    });
}

getAllUsers();
// * onValue ( /users , (data) => {})