import { db } from "./firebase.js";
import { collection, addDoc, serverTimestamp } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

document.getElementById("serviceForm").addEventListener("submit", async (e) => {

e.preventDefault();

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

alert("Request submitted successfully!\nTracking ID: " + trackingId);

});
