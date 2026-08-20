import { db } from "/firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const form = document.getElementById("trackForm");
const result = document.getElementById("trackResult");
const trackButton = document.getElementById("trackBtn");

function setResult(node, text, type = "") {
  node.replaceChildren();
  if (!text) return;
  const message = document.createElement("p");
  message.className = type;
  message.textContent = text;
  node.appendChild(message);
}

async function createPublicKey(trackingId, email) {
  const input = `${trackingId.trim().toUpperCase()}|${email.trim().toLowerCase()}`;
  const data = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function renderRequest(data) {
  result.replaceChildren();

  const card = document.createElement("div");
  card.className = "track-result-card";

  const title = document.createElement("h2");
  title.textContent = "Request Status";
  card.appendChild(title);

  const fields = [
    ["Tracking ID", data.trackingId],
    ["Service", data.service],
    ["Status", data.status],
    ["Budget", data.budget || "Not provided"]
  ];

  for (const [label, value] of fields) {
    const line = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = `${label}: `;
    line.append(strong, document.createTextNode(value));
    card.appendChild(line);
  }

  result.appendChild(card);
}

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    trackButton.disabled = true;
    setResult(result, "Checking request…");

    try {
      const trackingId = document.getElementById("trackId").value.trim();
      const email = document.getElementById("trackEmail").value.trim().toLowerCase();
      const requestId = await createPublicKey(trackingId, email);
      const snapshot = await getDoc(doc(db, "service_requests", requestId));

      if (!snapshot.exists()) {
        setResult(result, "No matching request was found.", "error");
        return;
      }

      const data = snapshot.data();
      renderRequest(data);
    } catch (error) {
      console.error("Tracking request failed:", error);
      setResult(result, "We could not check the request right now. Please try again.", "error");
    } finally {
      trackButton.disabled = false;
    }
  });
}
