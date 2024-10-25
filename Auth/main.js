  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-analytics.js";
  import { getAuth ,GoogleAuthProvider ,signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBvPcowXb7C3fgN8b2xu-zZPyTTByQGIGA",
    authDomain: "recipieauth.firebaseapp.com",
    projectId: "recipieauth",
    storageBucket: "recipieauth.appspot.com",
    messagingSenderId: "173381820696",
    appId: "1:173381820696:web:d0c3e35bc0fbdc011efe6d",
    measurementId: "G-3P84B9VBT8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  auth.LanguageCode = 'en'

  const provider = new GoogleAuthProvider();
  const googleLogin = document.getElementById("googleLogin");
  googleLogin.addEventListener("click", function() {
    const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    window.location.href = "logged.html";
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  })
  })
