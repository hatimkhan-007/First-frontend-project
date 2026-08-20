const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".h-nav");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});