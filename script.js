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

document.getElementById("serviceForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const service = document.getElementById("service").value;
    const budget = document.getElementById("budget").value;
    const description = document.getElementById("description").value;

    alert("Request submitted successfully!");

    console.log({
        name,
        email,
        mobile,
        service,
        budget,
        description
    });

});
