const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you, " + name + "! Your message has been submitted.");

    form.reset();
});
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
