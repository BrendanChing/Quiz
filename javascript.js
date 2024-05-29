
//Sian's
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

let arrayquestionImages = ["assets/images/cirrus6_big.jpg", "assets/images/cirrocumulus1_big.jpg", "assets/images/cirrostratus1_big.jpg", "assets/images/altocumulus1_big.jpg",
"assets/images/altostratus3_big.jpg", "assets/images/stratus2_big.jpg", "assets/images/stratocumulus1_big.jpg", "assets/images/nimbostratus1_big.jpg", "assets/images/cumulus3_big.jpg",
"assets/images/cumulonimbus3_big.jpg"]

let correctAnswers = ["Cirrus", "Cirrocumulus", "Cirrostrattus", "Altcomulus", "Altostratus", "Stratus", "Stratocumulus", "Nimbostratus", "Cumulus", "Cumulonimbus"];

let optionsArray = ["option0", "option1", "option2", "option3"];


//This function counts how many times the next question button is pressed and therefore the question the user is on 
// and it changes the HTML of the next-question button when the user is on the last question
let i = 0;
function questionCounter() {
    i = i + 1;
    if (i === 9){
    document.getElementById('next-question').innerHTML = '<a href="finishing-page.html">Finish Quiz!</a>';
    };
    return i;
}

//this function loads the images in order after each click on the next-question button
function whichQuestion(){
    // where i is the count of clicks on next question button
    document.getElementById("image-question").src = arrayquestionImages[i];
}

document.getElementById("startQuiz").addEventListener('click', whichQuestion);
document.getElementById("startQuiz").addEventListener('click', correctAnswerPosition);
document.getElementById("startQuiz").addEventListener('click', randomAnswers0);
document.getElementById("startQuiz").addEventListener('click', randomAnswers1);
document.getElementById("startQuiz").addEventListener('click', randomAnswers2);
document.getElementById("startQuiz").addEventListener('click', randomAnswers3);

document.getElementById("next-question").addEventListener('click', whichQuestion);
document.getElementById("next-question").addEventListener('click', correctAnswerPosition);
document.getElementById("next-question").addEventListener('click', randomAnswers0);
document.getElementById("next-question").addEventListener('click', randomAnswers1);
document.getElementById("next-question").addEventListener('click', randomAnswers2);
document.getElementById("next-question").addEventListener('click', randomAnswers3);
document.getElementById("next-question").addEventListener('click', questionCounter);

//this function puts the correct answer in one of the options boxes

function correctAnswerPosition(){
    let randomPosition = Math.floor(Math.random()*4);
    if (randomPosition === 0){
        document.getElementById("option0").innerText = correctAnswers[i];
    } else if (randomPosition === 1){
        document.getElementById("option1").innerText = correctAnswers[i];
    } else if (randomPosition === 2){
        document.getElementById("option2").innerText = correctAnswers[i];
    } else if (randomPosition === 3){
        document.getElementById("option3").innerText = correctAnswers[i];
    }
}

//functions for randomising the positions of incorrect answers
function randomAnswers0() {
        if (document.getElementById("option0").innerText === ""){
            document.getElementById("option0").innerText = correctAnswers[Math.floor(Math.random()*10)];
            
        } 
}

function randomAnswers1() {
    k = Math.floor(Math.random()*9);
    if (document.getElementById("option1").innerHTML === ""){
        document.getElementById("option1").innerHTML = correctAnswers[k];
        correctAnswers.splice(k, 1);
    } 

}

function randomAnswers2() {
    k = Math.floor(Math.random()*8)
    if (document.getElementById("option2").innerHTML === ""){
        document.getElementById("option2").innerHTML = correctAnswers[k];
        correctAnswers.splice(k, 1);
    } 
}

function randomAnswers3() {
    k = Math.floor(Math.random()*7)
    if (document.getElementById("option3").innerHTML === ""){
        document.getElementById("option3").innerHTML = correctAnswers[k];
}
}
function resetArray() {
    correctAnswers = ["Cirrus", "Cirrocumulus", "Cirrostrattus", "Altcomulus", "Altostratus", "Stratus", "Stratocumulus", "Nimbostratus", "Cumulus", "Cumulonimbus"];
}

//this function resets the eventlisteners after the next-question button is clicked
document.getElementById("next-question").addEventListener("click", resetEventListeners);
function resetEventListeners() {
document.getElementById("next-question").addEventListener("click", randomAnswers0);
document.getElementById("next-question").addEventListener("click", randomAnswers1);
document.getElementById("next-question").addEventListener("click", randomAnswers2);
document.getElementById("next-question").addEventListener("click", randomAnswers3);
}

//These functions check each option for correctness and add to either the correct or incorrect answers tally
let correctlyAnswered = 0;
let incorrectlyAnswered = 0;
function checkAnswer0(){
    document.getElementById("option0").removeEventListener("click", checkAnswer3);
    if (document.getElementById("option0").innerText === correctAnswers[i]){
        correctlyAnswered = correctlyAnswered + 1;

        return correctlyAnswered;
    } else {
        incorrectlyAnswered = incorrectlyAnswered + 1;
        return incorrectlyAnswered;
    }
}

function checkAnswer1(){
    document.getElementById("option1").removeEventListener("click", checkAnswer3);
    if (document.getElementById("option1").innerText === correctAnswers[i]){
        correctlyAnswered = correctlyAnswered + 1;
        return correctlyAnswered;
    } else {
        incorrectlyAnswered = incorrectlyAnswered + 1;
        return incorrectlyAnswered;
    }
}

function checkAnswer2(){
    document.getElementById("option2").removeEventListener("click", checkAnswer3);
    if (document.getElementById("option2").innerText === correctAnswers[i]){
        correctlyAnswered = correctlyAnswered + 1;
        return correctlyAnswered;
    } else {
        incorrectlyAnswered = incorrectlyAnswered + 1;
        return incorrectlyAnswered;
    }
}

function checkAnswer3(){
    document.getElementById("option3").removeEventListener("click", checkAnswer3)
    if (document.getElementById("option3").innerText === correctAnswers[i]){
        correctlyAnswered = correctlyAnswered + 1;
        return correctlyAnswered;
    } else {
        incorrectlyAnswered = incorrectlyAnswered + 1;
        return incorrectlyAnswered;
    }
}

document.getElementById("next-question").addEventListener("click", resetArray);

function scoreTally(){
    
}


