const API_URL = "https://mockapi.example.com"; // Replace with actual API URL

// Handle Login Form Submission
document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    try {
        let response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        let data = await response.json();
        
        if (response.ok) {
            document.getElementById('loginMessage').style.color = "green";
            document.getElementById('loginMessage').innerText = "Login successful! Welcome, " + data.username;
        } else {
            document.getElementById('loginMessage').innerText = "Login failed: " + data.message;
        }
    } catch (error) {
        document.getElementById('loginMessage').innerText = "An error occurred. Please try again later.";
    }
});

// Handle Signup Form Submission
document.getElementById('signupForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    let newUsername = document.getElementById('newUsername').value;
    let newPassword = document.getElementById('newPassword').value;

    try {
        let response = await fetch(`${API_URL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: newUsername,
                password: newPassword
            })
        });

        let data = await response.json();
        
        if (response.ok) {
            document.getElementById('signupMessage').style.color = "green";
            document.getElementById('signupMessage').innerText = "Signup successful! Welcome, " + data.username;
        } else {
            document.getElementById('signupMessage').innerText = "Signup failed: " + data.message;
        }
    } catch (error) {
        document.getElementById('signupMessage').innerText = "An error occurred. Please try again later.";
    }
});
