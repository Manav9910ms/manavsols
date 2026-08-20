import { auth, db } from "/firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const userInfo = document.getElementById("userInfo");
const logoutBtn = document.getElementById("logoutBtn");

function showLoading() {
  if (userInfo) userInfo.textContent = "Loading your account…";
}

function renderUser(data) {
  userInfo.replaceChildren();

  const card = document.createElement("div");
  card.className = "dashboard-card";

  const title = document.createElement("h2");
  title.textContent = `Welcome, ${data.name || "Member"}`;
  card.appendChild(title);

  const email = document.createElement("p");
  email.textContent = `Email: ${data.email || "Not available"}`;
  card.appendChild(email);

  const memberSince = document.createElement("p");
  const createdAt = data.createdAt?.toDate?.();
  memberSince.textContent = `Member Since: ${createdAt ? createdAt.toLocaleDateString() : "Not available"}`;
  card.appendChild(memberSince);

  userInfo.appendChild(card);
}

showLoading();

onAuthStateChanged(auth, async (user) => {
  if (!user || !user.emailVerified) {
    if (user) await signOut(auth);
    window.location.href = "/login/";
    return;
  }

  try {
    const snapshot = await getDoc(doc(db, "users", user.uid));
    if (!snapshot.exists()) {
      userInfo.textContent = "Account profile not found.";
      return;
    }
    renderUser(snapshot.data());
  } catch (error) {
    console.error("Dashboard load failed:", error);
    userInfo.textContent = "Could not load your account. Please refresh and try again.";
  }
});

logoutBtn?.addEventListener("click", async (event) => {
  event.preventDefault();
  await signOut(auth);
  window.location.href = "/login/";
});
