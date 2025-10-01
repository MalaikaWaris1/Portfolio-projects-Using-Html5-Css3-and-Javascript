document.addEventListener('DOMContentLoaded', function () {
            const form = document.getElementById('signup-form');

            form.addEventListener('submit', function (event) {
                event.preventDefault();

                const fullName = document.getElementById('fullname').value.trim();
                const email = document.getElementById('email').value.trim();
                const password = document.getElementById('password').value.trim();
                const confirmPassword = document.getElementById('confirm-password').value.trim();
                const gender = document.querySelector('input[name="gender"]:checked');
                const country = document.getElementById('country').value;

                if (!fullName || !email || !password || !confirmPassword) {
                    alert('Please fill out all fields.');
                    return;
                }

                if (password !== confirmPassword) {
                    alert('Passwords do not match.');
                    return;
                }

                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    alert('Please enter a valid email address.');
                    return;
                }

                if (password.length < 8) {
                    alert('Password must be at least 8 characters long.');
                    return;
                }

                if (!gender) {
                    alert('Please select a gender.');
                    return;
                }

                if (!country) {
                    alert('Please select a country.');
                    return;
                }

                alert(`Account created successfully!\nWelcome, ${fullName}!`);
                form.reset();
            });
        });