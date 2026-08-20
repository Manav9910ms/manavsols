import { db } from "/firebase.js";
import {
  doc,
  serverTimestamp,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const form = document.getElementById("serviceForm");
const message = document.getElementById("formMessage");
const submitButton = document.getElementById("submitRequestBtn");

function setMessage(text, type = "") {
  if (!message) return;
  message.textContent = text;
  message.className = `form-message ${type}`.trim();
}

function generateTrackingId() {
  const bytes = new Uint8Array(9);
  crypto.getRandomValues(bytes);
  const value = Array.from(bytes, (byte) => byte.toString(36).padStart(2, "0")).join("");
  return `MS-${value.slice(0, 12).toUpperCase()}`;
}

async function createPublicKey(trackingId, email) {
  const input = `${trackingId.toUpperCase()}|${email.trim().toLowerCase()}`;
  const data = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    submitButton.disabled = true;
    setMessage("Submitting request…");

    try {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim().toLowerCase();
      const mobile = document.getElementById("mobile").value.trim();
      const service = document.getElementById("service").value;
      const budget = document.getElementById("budget").value.trim();
      const description = document.getElementById("description").value.trim();
      const trackingId = generateTrackingId();
      const requestId = await createPublicKey(trackingId, email);

      await setDoc(doc(db, "service_requests", requestId), {
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

      form.reset();
      setMessage(`Request submitted successfully. Your tracking ID is ${trackingId}.`, "success");
    } catch (error) {
      console.error("Request submission failed:", error);
      setMessage("We could not submit your request. Please try again.", "error");
    } finally {
      submitButton.disabled = false;
    }
  });
}
