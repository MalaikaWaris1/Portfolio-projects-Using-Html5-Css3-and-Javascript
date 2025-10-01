const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById('navbar');
const feedbackForm = document.getElementById("feedbackForm");
const form = document.querySelector('.form');
const input = form.querySelector('input');

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    });
}
if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    });
}
// email section
document.addEventListener('DOMContentLoaded', function () {

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        const email = input.value.trim();

        // Simple validation
        if (!email) {
            alert('Please enter your email.');
            return;
        }

        // Basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Success message
        alert(`Account created successfully!\nWelcome, ${email}!`);

        // Clear form
        form.reset();
    });
});

// Feedback popup handling

feedbackForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Your Feedback Submitted")
    feedbackForm.reset();
});

