const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("show");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("show");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });
}
