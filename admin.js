import { db } from "./firebase.js";

import { 
collection,
getDocs,
updateDoc,
doc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

import { auth } from "./firebase.js";
import { onAuthStateChanged } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

onAuthStateChanged(auth,(user)=>{

if(!user){
location.href="/login";
return;
}

if(user.email !== "manav991077@gmail.com"){
alert("Access Denied");
location.href="/";
}

});


const table = document.getElementById("requestsTable");

async function loadRequests(){

const snapshot = await getDocs(collection(db,"service_requests"));

snapshot.forEach((request)=>{

const data = request.data();

const row = document.createElement("tr");

row.innerHTML = `

<td>${data.name}</td>
<td>${data.email}</td>
<td>${data.service}</td>
<td>₹${data.budget}</td>

<td>

<select data-id="${request.id}" class="statusSelect">

<option ${data.status=="Pending"?"selected":""}>Pending</option>
<option ${data.status=="Working"?"selected":""}>Working</option>
<option ${data.status=="Completed"?"selected":""}>Completed</option>

</select>

</td>

<td>${data.trackingId}</td>

<td class="desc-cell" data-desc="${data.description}">
${data.description.slice(0,40)}...
</td>

`;

table.appendChild(row);

});

listenStatusChange();

}

function listenStatusChange(){

const selects = document.querySelectorAll(".statusSelect");

selects.forEach(select=>{

select.addEventListener("change", async ()=>{

const id = select.dataset.id;

const newStatus = select.value;

await updateDoc(doc(db,"service_requests",id),{
status:newStatus
});

alert("Status updated");

});

});

}


// 🔥 DESCRIPTION CLICK EVENT (GLOBAL)
document.addEventListener("click",(e)=>{

if(e.target.classList.contains("desc-cell")){

const desc = e.target.getAttribute("data-desc");

alert(desc);

}

});


loadRequests();
