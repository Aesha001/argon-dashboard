// app.js

// Function to switch between sign-in and sign-up forms
function toggleForms() {
    var signInForm = document.getElementById('sign-in-form');
    var signUpForm = document.getElementById('sign-up-form');

    // Toggle the display property
    signInForm.style.display = signInForm.style.display === 'none' ? 'block' : 'none';
    signUpForm.style.display = signUpForm.style.display === 'none' ? 'block' : 'none';
}

// Event listeners
document.getElementById('toggle-btn').addEventListener('click', toggleForms);


document.getElementById('sign-up-form').addEventListener('submit', function (event) {
    // Perform sign-up logic (e.g., send data to server, handle response)

    // After successful sign-up, redirect to sign-in page
    window.location.href = '../pages/sign-in.html';

    // Prevent the form from submitting in the traditional way
    event.preventDefault();
});
document.getElementById('sign-in-form').addEventListener('submit', function (event) {
    // Prevent the form from submitting in the traditional way
    event.preventDefault();

    // Get user inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Construct the request payload
    const data = {
        email: email,
        password: password
    };

    // Make a POST request to the server
    fetch('your-server-endpoint-for-signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Authentication failed');
        }
        // Handle a successful sign-in response (you might want to handle tokens or session on the client)
        window.location.href = '../path-to-home-page.html';
    })
    .catch(error => {
        console.error('Error during sign-in:', error);
        // Handle the error (e.g., show an error message to the user)
    });
});















// // script.js
// document.addEventListener("DOMContentLoaded", function () {
//     // Get the "Sign up" link by its ID
//     var signUpLink = document.getElementById("showSignUp");

//     // Add a click event listener to the "Sign up" link
//     signUpLink.addEventListener("click", function () {
//         // Redirect to the sign-up page
//         window.location.href = "../pages/sign-up.html";
//     });
// });
