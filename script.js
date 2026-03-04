import { db } from "./firebase.js";
import { collection, addDoc, serverTimestamp } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { collection, query, where, getDocs }
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

async function trackRequest() {

const trackingId = document.getElementById("trackId").value;
const email = document.getElementById("trackEmail").value;

const q = query(
collection(db, "service_requests"),
where("trackingId", "==", trackingId),
where("email", "==", email)
);

const querySnapshot = await getDocs(q);

const resultDiv = document.getElementById("trackResult");

if(querySnapshot.empty){

resultDiv.innerHTML = "❌ No request found.";

return;

}

querySnapshot.forEach((doc) => {

const data = doc.data();

resultDiv.innerHTML = `
<h3>Request Status</h3>
<p><strong>Service:</strong> ${data.service}</p>
<p><strong>Status:</strong> ${data.status}</p>
<p><strong>Budget:</strong> ₹${data.budget}</p>
<p><strong>Description:</strong> ${data.description}</p>
`;

});

}
