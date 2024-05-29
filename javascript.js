



























































let questionImages = {
    Cirrus: "assets/images/cirrus6_big.jpg",
    Cirrocumulus: "assets/images/cirrocumulus1_big.jpg",
    Cirrostrattus: "assets/images/cirrostratus1_big.jpg",
    Altcomulus: "assets/images/altocumulus1_big.jpg",
    Altostratus: "assets/images/altostratus3_big.jpg",
    Stratus: "assets/images/stratus2_big.jpg",
    Stratocumulus: "assets/images/stratocumulus1_big.jpg",
    Nimbostratus: "assets/images/nimbostratus1_big.jpg",
    Cumulus: "assets/images/cumulus3_big.jpg",
    Cumulonimbus: "assets/images/cumulonimbus3_big.jpg"
};

let arrayquestionImages = questionImages.entries();

let correctAnswers = ["Cirrus", "Cirrocumulus", "Cirrostrattus", "Altcomulus", "Altostratus", "Stratus", "Stratocumulus", "Nimbostratus", "Cumulus", "Cumulonimbus"];

let optionsArray = ["option0", "option1", "option2", "option3"];


//This function counts how many times the next question button is pressed and therefore the question the user is on 
// and it changes the HTML of the next-question button when the user is on the last question
let i = 0;
function questionCounter() {
    let i = i + 1;
    if (i === 9){
    next-question.innerHTML = '<a href="finishing-page.html">Finish Quiz!</a>'
    };
    return i;
}

//this function loads the images in order after each click on the next-question button
function whichQuestion(){
    // where i is the count of clicks on next question button
    document.getElementById("image-question").src = arrayquestionImages[i];
}


let randomPosition = Math.floor(Math.random()*4);

//this function puts the correct answer in one of the options boxes
function correctAnswerPosition(){
    if (randomPosition === 0){
        getElementById("option0").innerText = correctAnswers[i];
    } else if (randomPosition === 1){
        getElementById("option1").innerText = correctAnswers[i];
    } else if (randomPosition === 2){
        getElementById("option2").innerText = correctAnswers[i];
    } else if (randomPosition === 3){
        getElementById("option3").innerText = correctAnswers[i];
    }
}

//functions for randomising the positions of incorrect answers
function randomAnswers0() {
        if (getElementById("option0").innerText === ""){
            getElementById("option0").innerText = correctAnswers[Math.floor(Math.random()*10)];
        } 
}

function randomAnswers1() {
    k = Math.floor(Math.random()*9);
    if (getElementById("option1").innerHTML === ""){
        getElementById("option1").innerHTML = correctAnswers[k];
        correctAnswers.splice(k, 1);
    } 

}

function randomAnswers2() {
    k = Math.floor(Math.random()*8)
    if (getElementById("option2").innerHTML === ""){
        getElementById("option2").innerHTML = correctAnswers[k];
        correctAnswers.splice(k, 1);
    } 
}

function randomAnswers3() {
    k = Math.floor(Math.random()*7)
    if (getElementById("option3").innerHTML === ""){
        getElementById("option3").innerHTML = correctAnswers[k];
}
}
function resetArray() {
    correctAnswers = ["Cirrus", "Cirrocumulus", "Cirrostrattus", "Altcomulus", "Altostratus", "Stratus", "Stratocumulus", "Nimbostratus", "Cumulus", "Cumulonimbus"];
}

//this function resets the eventlisteners after the next-question button is clicked
getElementById("next-question").addEventListener("click", resetEventListeners);
function resetEventListeners {
getElementById("next-question").addEventListener("click", randomAnswers0);
getElementById("next-question").addEventListener("click", randomAnswers1);
getElementById("next-question").addEventListener("click", randomAnswers2);
getElementById("next-question").addEventListener("click", randomAnswers3);
}

//These functions check each option for correctness and add to either the correct or incorrect answers tally
let correctlyAnswered = 0;
let incorrectlyAnswered = 0;
function checkAnswer0(){
    getElementById("option0").removeEventListener("click", checkAnswer3)
    if (getElementById("option0").innerText === correctAnswers[i]){
        correctlyAnswered = correctlyAnswered + 1;
        return correctlyAnswered;
    } else {
        incorrectlyAnswered = incorrectlyAnswered + 1;
        return incorrectlyAnswered;
    }
}

function checkAnswer1(){
    getElementById("option1").removeEventListener("click", checkAnswer3)
    if (getElementById("option1").innerText === correctAnswers[i]){
        correctlyAnswered = correctlyAnswered + 1;
        return correctlyAnswered;
    } else {
        incorrectlyAnswered = incorrectlyAnswered + 1;
        return incorrectlyAnswered;
    }
}

function checkAnswer2(){
    getElementById("option2").removeEventListener("click", checkAnswer3)
    if (getElementById("option2").innerText === correctAnswers[i]){
        correctlyAnswered = correctlyAnswered + 1;
        return correctlyAnswered;
    } else {
        incorrectlyAnswered = incorrectlyAnswered + 1;
        return incorrectlyAnswered;
    }
}

function checkAnswer3(){
    getElementById("option3").removeEventListener("click", checkAnswer3)
    if (getElementById("option3").innerText === correctAnswers[i]){
        correctlyAnswered = correctlyAnswered + 1;
        return correctlyAnswered;
    } else {
        incorrectlyAnswered = incorrectlyAnswered + 1;
        return incorrectlyAnswered;
    }
}


next-question.addEventListener("click", resetArray);
