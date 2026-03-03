// Firebase SDK imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// 🔥 YOUR FIREBASE CONFIG (paste yours exactly)
const firebaseConfig = {
  apiKey: "AIzaSyCC4yjCGb_BiXRiNZDIssSTn-hsKAJtQwI",
  authDomain: "manavsols-auth.firebaseapp.com",
  projectId: "manavsols-auth",
  storageBucket: "manavsols-auth.firebasestorage.app",
  messagingSenderId: "366607653097",
  appId: "1:366607653097:web:8cdfc2a76055005b623878"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
