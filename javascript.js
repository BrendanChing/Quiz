document.addEventListener("DOMContentLoaded", function() {
    const page = document.body.getAttribute('data-page');
    alert(`Hello your page is ${page}`)

    if (page === 'index') {
        console.log(`This is Page 1: ${page}`);
        // Prevent form from submitting normally
        document.getElementById('usernameForm').addEventListener('submit', function(event) {
            event.preventDefault();


            // Get the username from the input field
            const username = document.getElementById('username').value;

            // Store the username in localStorage for use throughout the quiz
            localStorage.setItem('username',username);

            // Display a greeting message with the username..
            // document.getElementById('greeting').innerText = 'Hello,${username}! Let's start the quiz.';});

            // Redirect to questions page
            window.location.href = 'questions.html';
            });
        }
    else if (page === 'questions') {
        runQuestionsPage()
        console.log('This is Page 2');
    }
});

function runQuestionsPage() {
    document.getElementById("option0").innerHTML = "Hello Sian!";
    let random_cloud = getRandomCloud()
    console.log("random cloud: "+  random_cloud);
    document.getElementById("image-question").src =
questionImages[random_cloud];
    let answers = generateAnswersArray(random_cloud, 4);
    console.log("current cloud is "+ random_cloud);
    console.log("answers: "+ answers);

    //update answer sections. (This could be done with a for loop, but as we always want four answers, this is fine
    document.getElementById("option0").innerHTML = answers[0];
    document.getElementById("option1").innerHTML = answers[1];
    document.getElementById("option2").innerHTML = answers[2];
    document.getElementById("option3").innerHTML = answers[3];
}

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
  Cumulonimbus: "assets/images/cumulonimbus3_big.jpg",
};

let optionsArray = ["option0", "option1", "option2", "option3"];

function getRandomCloud(){
    let cloud_types = Object.keys(questionImages);
    console.log(cloud_types);
    let cloud_num = Math.floor(Math.random()*cloud_types.length);
    let cloud_type = cloud_types[cloud_num];
    return cloud_type;
}

function generateAnswersArray(correct_answer, number_of_answers) {
    let answer_array = [correct_answer];
    console.log("the current answer array is: " + answer_array);
    copied_questionImages = {...questionImages};
    console.log("copied_questions array: "+copied_questionImages);
    delete copied_questionImages[correct_answer];
    console.log("copied_questions array minus correct answer" +copied_questionImages);
    let cloud_types = Object.keys(copied_questionImages);
    console.log("cloud_types array:" + cloud_types);
    for (i=0; i < number_of_answers -1; i++) {
        cloud_num = Math.floor(Math.random()*cloud_types.length);
        console.log("cloud_num:" + cloud_num);
        chosen_cloud = cloud_types[cloud_num];
        //scramble array by randomising array update method
        rand_num = Math.random()
        if (rand_num < 0.5) {
            answer_array.push(chosen_cloud)
        } else {
            answer_array.unshift(chosen_cloud)
        }
        //Remove the element from array so it's not reselected
        cloud_types.splice(cloud_num,1);
        console.log("cloud_types post deletion: "+ cloud_types);
        console.log(answer_array);
    }
    return answer_array
}

function gotoFinish() {
    window.location.href = 'finishing-page.html';
}

let clickCount = 0;

function handleClick() {
    clickCount++;
    if (clickCount >= 9) {
        gotoFinish();
    } else {
        for (let j = 0; j < arrayofFunctions.length; j++) {
            arrayofFunctions[j]();
        }
    }
}

document.getElementById("option0").addEventListener('click', handleClick);
document.getElementById("option1").addEventListener('click', handleClick);
document.getElementById("option2").addEventListener('click', handleClick);
document.getElementById("option3").addEventListener('click', handleClick);

let arrayofFunctions = [runQuestionsPage, getRandomCloud, generateAnswersArray];