import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBvPcowXb7C3fgN8b2xu-zZPyTTByQGIGA",
    authDomain: "recipieauth.firebaseapp.com",
    projectId: "recipieauth",
    storageBucket: "recipieauth.appspot.com",
    messagingSenderId: "173381820696",
    appId: "1:173381820696:web:d0c3e35bc0fbdc011efe6d",
    measurementId: "G-3P84B9VBT8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const user = auth.currentUser;
