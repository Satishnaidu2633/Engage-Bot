document.addEventListener('DOMContentLoaded', function() {
            const loginForm = document.getElementById('loginForm');
            if (loginForm) {
                loginForm.addEventListener('submit', function(event) {
                    event.preventDefault();
                    const username = document.getElementById('username').value;
                    const password = document.getElementById('password').value;
                    console.log(`Username: ${username}, Password: ${password}`);
                    alert(`Logged in as: ${username}`);
                });
            }
        });
        