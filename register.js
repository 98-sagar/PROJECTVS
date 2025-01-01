document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get user inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    // Basic validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Check if the email is already registered
    const existingUser = JSON.parse(localStorage.getItem('user'));
    if (existingUser && existingUser.email === email) {
        alert('Email is already registered!');
        return;
    }

    // Store the user data in local storage (simulating a backend)
    const user = {
        name: name,
        email: email,
        password: password
    };
    localStorage.setItem('user', JSON.stringify(user));

    alert('Registration successful!');
    // Redirect to login page after successful registration
    window.location.href = 'login.html';
});
