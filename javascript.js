// Prevent form from submitting normally
document.getElementById('usernameForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


// Get the username from the input field
const username =
document.getElementById('username').value;

// Store the username in localStorage for use throughout the quiz
localStorage.setItem('username',username);

// Display a greeting message with the username..
// document.getElementById('greeting').innerText = 'Hello, ${username}! Let's start the quiz.';});

// Redirect to questions page
window.location.href = 'questions.html';
});