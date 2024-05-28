import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA51o551FBLMCBVIS6cvLsNg7ZRQDu2eyc",
  authDomain: "data-gxmyvan.firebaseapp.com",
  projectId: "data-gxmyvan",
  storageBucket: "data-gxmyvan.appspot.com",
  messagingSenderId: "980109516529",
  appId: "1:980109516529:web:fad5141b67525ee9549350",
  measurementId: "G-SW10NCMHB6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById("submit").addEventListener("click", function (e) {
  set(ref(db, "user/" + document.getElementById("username").value), {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  });
  alert("Success");
});
