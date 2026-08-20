import { auth, db } from "/firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  collection,
  doc,
  getDocs,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const ADMIN_EMAIL = "manav991077@gmail.com";
const table = document.getElementById("requestsTable");
const message = document.getElementById("adminMessage");

function showMessage(text, type = "") {
  if (!message) return;
  message.textContent = text;
  message.className = `form-message ${type}`.trim();
}

function appendCell(row, text) {
  const cell = document.createElement("td");
  cell.textContent = text ?? "";
  row.appendChild(cell);
  return cell;
}

function appendStatusCell(row, requestId, currentStatus) {
  const cell = document.createElement("td");
  const select = document.createElement("select");
  select.className = "status-select";
  select.dataset.id = requestId;

  for (const status of ["Pending", "Working", "Completed"]) {
    const option = document.createElement("option");
    option.value = status;
    option.textContent = status;
    option.selected = status === currentStatus;
    select.appendChild(option);
  }

  select.addEventListener("change", async () => {
    select.disabled = true;
    try {
      await updateDoc(doc(db, "service_requests", requestId), { status: select.value });
      showMessage("Status updated.", "success");
    } catch (error) {
      console.error("Status update failed:", error);
      showMessage("Could not update the status.", "error");
    } finally {
      select.disabled = false;
    }
  });

  cell.appendChild(select);
  row.appendChild(cell);
}

function appendDescriptionCell(row, description) {
  const cell = document.createElement("td");
  const button = document.createElement("button");
  button.type = "button";
  button.className = "description-button";
  const shortText = description.length > 45 ? `${description.slice(0, 45)}…` : description;
  button.textContent = shortText;
  button.title = "Open full description";
  button.addEventListener("click", () => window.alert(description));
  cell.appendChild(button);
  row.appendChild(cell);
}

async function loadRequests() {
  table.replaceChildren();
  showMessage("Loading requests…");

  try {
    const snapshot = await getDocs(collection(db, "service_requests"));

    if (snapshot.empty) {
      showMessage("No service requests yet.");
      return;
    }

    snapshot.forEach((request) => {
      const data = request.data();
      const row = document.createElement("tr");
      appendCell(row, data.name);
      appendCell(row, data.email);
      appendCell(row, data.mobile);
      appendCell(row, data.service);
      appendCell(row, data.budget || "—");
      appendStatusCell(row, request.id, data.status);
      appendCell(row, data.trackingId);
      appendDescriptionCell(row, data.description || "");
      table.appendChild(row);
    });

    showMessage(`${snapshot.size} request${snapshot.size === 1 ? "" : "s"} loaded.`);
  } catch (error) {
    console.error("Request loading failed:", error);
    showMessage("Could not load requests. Check Firestore rules and try again.", "error");
  }
}

onAuthStateChanged(auth, async (user) => {
  if (!user || !user.emailVerified || user.email !== ADMIN_EMAIL) {
    if (user) await signOut(auth);
    window.location.href = "/login/";
    return;
  }

  await loadRequests();
});
