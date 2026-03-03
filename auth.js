import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("loginBtn");

// REGISTER
if (registerBtn) {
  registerBtn.addEventListener("click", async () => {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 🔐 Save user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
        createdAt: new Date()
      });

      alert("Account created successfully!");
      window.location.href = "dashboard.html";

    } catch (error) {
      alert(error.message);
    }
  });
}

// LOGIN
if (loginBtn) {
  loginBtn.addEventListener("click", async () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "dashboard.html";
    } catch (error) {
      alert(error.message);
    }
  });
}
