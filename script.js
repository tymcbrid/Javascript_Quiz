var counter = document.querySelector("#point-counter");
var count = localStorage.getItem("count");
var submitBtn = document.querySelector("#submit-btn");
var answerButtonElement = document.querySelector('answer-buttons');
var questionElement = document.querySelector("#question");
var answerBtn = document.querySelector("#answer-buttons");
// question constants to retrieve later. questions[0].question
   
// use array of arrays like in HW3
var questions = [
    {
    question: 'What is JavaScript?',
    answers: [
        {text: 'Programming Language', correct: true},
        {text: 'Type of coffee', correct: false},
        {text: 'Famous poem by Edgar Allen Poe', correct: false},
        {text: 'Social media platform', correct: false}
        ]
    },
    {
    question: 'What is an event listener in JS?',
    answers: [
        {text: 'A conditional statement that runs only if true', correct: false},
        {text: 'A loop that is ran, requiring variable input that is ran until condition is met', correct: false},
        {text: 'A form of action, either click, hover, or keypress, that calls a function when executed', correct: true},
        {text: 'A submission box that is stored in the local storage and retrieved when called upon', correct: false}
        ]
    },
    {
        question: 'Fake',
        answers: [
            {text: '1', correct: false},
            {text: '2', correct: true},
            {text: '3', correct: false},
            {text: '4', correct: false}
            ]
        },
    {
        question: 'Fake2',
        answers: [
            {text: '1', correct: false},
            {text: '2', correct: true},
            {text: '3', correct: false},
            {text: '4', correct: false}
            ]
        },
]

console.log(questions.length);


var score = 0;
var answersArray = Object.values(questions[0].answers); //access to answer
var userSelect = document.querySelector('.answer') //store users input value from radio
var length = userSelect.length
var question = document.querySelector('#question')
var answer1 = document.querySelector("#button1")
var answer2 = document.querySelector("#button2")
var answer3 = document.querySelector("#button3")
var answer4 = document.querySelector("#button4")
var ranQuestionNum = Math.floor(Math.random() * questions.length);
questionElement.textContent = questions[ranQuestionNum].question;
var answersArray = Object.values(questions[ranQuestionNum].answers);
button1.textContent = answersArray[0].text;
button2.textContent = answersArray[1].text;
button3.textContent = answersArray[2].text;
button4.textContent = answersArray[3].text;
button1.correct = answersArray[0].correct;
button2.correct = answersArray[1].correct;
button3.correct = answersArray[2].correct;
button4.correct = answersArray[3].correct;
questions.splice(ranQuestionNum, 1);

function ranQuestion() {
    if (questions.length > 0) {
    //Pulls random question from index of array
    var newranQuestionNum = Math.floor(Math.random() * questions.length);
    questionElement.textContent = questions[newranQuestionNum].question;
    //Associates that answers index from selected question
    var answersArray = Object.values(questions[newranQuestionNum].answers);
    button1.textContent = answersArray[0].text;
    button2.textContent = answersArray[1].text;
    button3.textContent = answersArray[2].text;
    button4.textContent = answersArray[3].text;
    button1.correct = answersArray[0].correct;
    button2.correct = answersArray[1].correct;
    button3.correct = answersArray[2].correct;
    button4.correct = answersArray[3].correct;


    questions.splice(newranQuestionNum, 1);
    }
}

function gameOver() {
    if (questions.length == 0) {
        counter.textContent = score;
        alert("Quiz complete! Your score is " + score);
    }
}




button1.addEventListener("click", function() {
    if (button1.correct == true && questions.length == 0) {
        alert("correct!");
        console.log("length is " + questions.length);
        ranQuestion();
        score++;
        counter.textContent = score;
        console.log("length is " + questions.length);
        console.log("score is " + score);
        gameOver();
        
    }
    else if (button1.correct == false && questions.length == 0) {
        alert("wrong!");
        ranQuestion();
        gameOver();
    }
})
button2.addEventListener("click", function() {
    if (button2.correct == true && questions.length == 0) {
        alert("correct!");
        console.log("length is " + questions.length);
        ranQuestion();
        score++;
        counter.textContent = score;
        console.log("length is " + questions.length);
        console.log("score is " + score);
        gameOver();
    }
    else if (button1.correct == false && questions.length == 0) {
        alert("wrong!");
        ranQuestion();
        gameOver();
    }
})
button3.addEventListener("click", function() {
    if (button3.correct == true && questions.length == 0) {
        alert("correct!");
        console.log("length is " + questions.length);
        ranQuestion();
        score++;
        counter.textContent = score;
        console.log("length is " + questions.length);
        console.log("score is " + score);
        gameOver();
    }
    else if (button1.correct == false && questions.length == 0) {
        alert("wrong!");
        ranQuestion();
        gameOver();
    }
})
button4.addEventListener("click", function() {
    if (button4.correct == true && questions.length == 0) {
        alert("correct!");
        console.log("length is " + questions.length);
        ranQuestion();
        score++;
        counter.textContent = score;
        console.log("length is " + questions.length);
        console.log("score is " + score);
        gameOver();
    }
    else if (button1.correct == false && questions.length == 0) {
        alert("wrong!");
        ranQuestion();
        gameOver();
    }
})












    // var button1 = document.getElementById("button1");
button1.addEventListener("click", function() {
    if (button1.correct == true && questions.length > 0) {
        alert("correct!");
        console.log("length is " + questions.length);
        ranQuestion();
        score++;
        counter.textContent = score;
        console.log("length is " + questions.length);
        console.log("score is " + score);
        
    }
    else if (button1.correct == false && questions.length > 0) {
        alert("wrong!");
        ranQuestion();
    }
})
button2.addEventListener("click", function() {
    if (button2.correct == true && questions.length > 0) {
        alert("correct!");
        console.log("length is " + questions.length);
        ranQuestion();
        score++;
        counter.textContent = score;
        console.log("length is " + questions.length);
        console.log("score is " + score);
    }
    else if (button1.correct == false && questions.length > 0) {
        alert("wrong!");
        ranQuestion();
    }
})
button3.addEventListener("click", function() {
    if (button3.correct == true && questions.length > 0) {
        alert("correct!");
        console.log("length is " + questions.length);
        ranQuestion();
        score++;
        counter.textContent = score;
        console.log("length is " + questions.length);
        console.log("score is " + score);
    }
    else if (button1.correct == false && questions.length > 0) {
        alert("wrong!");
        ranQuestion();
    }
})
button4.addEventListener("click", function() {
    if (button4.correct == true && questions.length > 0) {
        alert("correct!");
        console.log("length is " + questions.length);
        ranQuestion();
        score++;
        counter.textContent = score;
        console.log("length is " + questions.length);
        console.log("score is " + score);
    }
    else if (button1.correct == false && questions.length > 0) {
        alert("wrong!");
        ranQuestion();
    }
})


//    console.log(answersArray[0].text)
// console.log(answersArray[0].correct)
// console.log(answersArray[1].text)
// console.log(answersArray[1].correct)
// console.log(answersArray[2].text)
// console.log(answersArray[2].correct)
// console.log(answersArray[3].text)
// console.log(answersArray[3].correct)