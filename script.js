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
