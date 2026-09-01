import { auth, db } from "/firebase.js";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { doc, serverTimestamp, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("loginBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("authMessage");

function showMessage(text, type = "") {
  if (!message) return;
  message.textContent = text;
  message.className = `auth-message ${type}`.trim();
}

if (registerBtn) {
  registerBtn.addEventListener("click", async () => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword")?.value;

    if (!name || !email || !password || !confirmPassword) {
      showMessage("Please complete all fields.", "error");
      return;
    }

    if (password.length < 8) {
      showMessage("Password must be at least 8 characters.", "error");
      return;
    }

    if (password !== confirmPassword) {
      showMessage("Passwords do not match.", "error");
      return;
    }

    registerBtn.disabled = true;
    showMessage("Creating your account…");

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(user);
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        createdAt: serverTimestamp()
      });
      await signOut(auth);
      showMessage("Account created. Check your email to verify it, then log in.", "success");
      setTimeout(() => { window.location.href = "/login/"; }, 1200);
    } catch (error) {
      console.error("Registration failed:", error);
      showMessage("Could not create the account. Please check the details and try again.", "error");
    } finally {
      registerBtn.disabled = false;
    }
  });
}

if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;

    if (!email || !password) {
      showMessage("Enter your email and password.", "error");
      return;
    }

    loginBtn.disabled = true;
    showMessage("Signing in…");

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      if (!user.emailVerified) {
        await signOut(auth);
        showMessage("Please verify your email before logging in.", "error");
        return;
      }

      window.location.href = "/dashboard/";
    } catch (error) {
      console.error("Login failed:", error);
      showMessage("Invalid email or password.", "error");
    } finally {
      loginBtn.disabled = false;
    }
  });
}

if (resetBtn) {
  resetBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value.trim().toLowerCase();

    if (!email) {
      showMessage("Enter your email first, then choose Forgot password.", "error");
      return;
    }

    resetBtn.disabled = true;
    try {
      await sendPasswordResetEmail(auth, email);
      showMessage("Password reset email sent.", "success");
    } catch (error) {
      console.error("Password reset failed:", error);
      showMessage("Could not send the reset email. Check the address and try again.", "error");
    } finally {
      resetBtn.disabled = false;
    }
  });
}
