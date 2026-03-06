import { db } from "./firebase.js";
import { collection, addDoc, serverTimestamp, query, where, getDocs }
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Smooth scroll to contact
function scrollContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
});


// =============================
// SERVICE REQUEST SUBMIT
// =============================

const form = document.getElementById("serviceForm");

if (form) {
form.addEventListener("submit", async (e) => {

e.preventDefault();

try {

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const mobile = document.getElementById("mobile").value;
const service = document.getElementById("service").value;
const budget = document.getElementById("budget").value;
const description = document.getElementById("description").value;

const trackingId = "MS-" + Math.floor(10000 + Math.random() * 90000);

await addDoc(collection(db, "service_requests"), {
trackingId,
name,
email,
mobile,
service,
budget,
description,
status: "Pending",
timestamp: serverTimestamp()
});

alert("✅ Request submitted successfully!\nTracking ID: " + trackingId);

form.reset();

} catch (error) {

console.error("Error submitting request:", error);
alert("❌ Error submitting request");

}

});
}


// =============================
// TRACK REQUEST
// =============================

async function trackRequest() {

const trackingId = document.getElementById("trackId").value.trim();
const email = document.getElementById("trackEmail").value.trim();

const resultDiv = document.getElementById("trackResult");

resultDiv.innerHTML = "Checking...";

try {

const q = query(
collection(db, "service_requests"),
where("trackingId", "==", trackingId),
where("email", "==", email)
);

const querySnapshot = await getDocs(q);

if (querySnapshot.empty) {

resultDiv.innerHTML = "❌ No request found.";

return;

}

querySnapshot.forEach((doc) => {

const data = doc.data();

resultDiv.innerHTML = `
<div class="track-card">
<h3>Request Status</h3>
<p><strong>Service:</strong> ${data.service}</p>
<p><strong>Status:</strong> ${data.status}</p>
<p><strong>Budget:</strong> ₹${data.budget}</p>
<p><strong>Description:</strong> ${data.description}</p>
</div>
`;

});

} catch (error) {

console.error("Tracking error:", error);
resultDiv.innerHTML = "❌ Error fetching request.";

}

}


// =============================
// TRACK BUTTON EVENT
// =============================

const trackBtn = document.getElementById("trackBtn");

if (trackBtn) {
trackBtn.addEventListener("click", trackRequest);
}
