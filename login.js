document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get user inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Get user data from local storage (simulating a database)
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Validate email and password
    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert('Login successful!');
        // Redirect to dashboard or other page after successful login
        window.location.href = 'index.html'; // Modify as needed
    } else {
        alert('Invalid email or password!');
    }
});
