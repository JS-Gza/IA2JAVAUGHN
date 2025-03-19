document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (!loginForm) {
        console.log('Login form not found.');
        return; // Stop if form isn't found
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Predefined credentials
        const correctUsername = 'admin';
        const correctPassword = 'YAMCHO';

        if (username === correctUsername && password === correctPassword) {
            alert('Login successful! Redirecting...');
            window.location.href = 'index.html'; // Redirect to the home page on success
        } else {
            alert('Incorrect username or password.'); // Inform the user about wrong credentials
        }
    });
});
