var counter = document.querySelector("#point-counter");
var count = localStorage.getItem("count");
var submitBtn = document.querySelector("#submit-btn");
var answerButtonElement = document.querySelector('answer-buttons');
var questionElement = document.querySelector("#question");
var answerBtn = document.querySelector("#answer-buttons");
var rightOrwrong = document.querySelector("#rightOrwrong");
// question constants to retrieve later. questions[0].question
   


// use array of arrays like in HW3
var questions = [
    {
    question: 'What is an event listener in JS?',
    answers: [
        {text: '1. A conditional statement that runs only if true', correct: false},
        {text: '2. A loop that is ran, requiring variable input that is ran until condition is met', correct: false},
        {text: '3. A form of action, either click, hover, or keypress, that calls a function when executed', correct: true},
        {text: '4. A submission box that is stored in the local storage and retrieved when called upon', correct: false}
        ]
    },
    {
    question: 'Inside which HTML element do we put the JavaScript?',
    answers: [
        {text: '1. <script>', correct: true},
        {text: '2. <javascript>', correct: false},
        {text: '3. <js>', correct: false},
        {text: '4. <scripting>', correct: false}
        ]
    },
    {
    question: 'What is JavaScript?',
    answers: [
        {text: '1. Programming Language', correct: true},
        {text: '2. Type of coffee', correct: false},
        {text: '3. Famous poem by Edgar Allen Poe', correct: false},
        {text: '4. Social media platform', correct: false}
        ]
    },
    {
    question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    answers: [
        {text: '1. <script "xxx.js">', correct: false},
        {text: '2. <script href="xxx.js">', correct: false},
        {text: '3. <script src="xxx.js">', correct: true},
        {text: '4. <script name="xxx.js">', correct: false}
        ]
    },
    {
    question: 'How do you write "Hello World" in an alert box?',
    answers: [
        {text: '1. Displaytext = "Hello World"', correct: false},
        {text: '2. alert("Hello World")', correct: true},
        {text: '3. alertText("Hello World")', correct: false},
        {text: '4. alertText = ("Hello World")', correct: false}
        ]
    },
        {
    question: 'How do you create a function in JavaScript?',
    answers: [
        {text: '1. function.Create = myFunction()', correct: false},
        {text: '2. function = myFunction()', correct: true},
        {text: '3. function: myFunction()', correct: false},
        {text: '4. New.function = myFunction()', correct: false}
        ]
    },
    {
    question: 'How do you call a function named "myFunction"?',
    answers: [
        {text: '1. myFunction.Call', correct: false},
        {text: '2. myFunction().Execute', correct: false},
        {text: '3. myFunction.Execute', correct: false},
        {text: '4. myFunction()', correct: true}
        ]
    },
    {
    question: 'How do you annotate "not equal"?',
    answers: [
        {text: '1. !=', correct: true},
        {text: '2. ?=', correct: false},
        {text: '3. ===', correct: false},
        {text: '4. X=', correct: false}
        ]
    },
        {
    question: 'How do you add a one line comment in JS?',
    answers: [
        {text: '1. /* */', correct: false},
        {text: '2. <!-- -->', correct: false},
        {text: '3. //', correct: true},
        {text: '4. /', correct: false}
        ]
    },
    {
    question: 'How do you write an array in JS?',
    answers: [
        {text: '1. var myArray = {1, 2, 3}', correct: false},
        {text: '2. var myArray = {"1", "2", "3"}', correct: false},
        {text: '3. myArray = {"1", "2", "3"}', correct: false},
        {text: '4. var myArray = ["1", "2", "3"]', correct: true}
        ]
    },
]

console.log(questions.length);


var score = 0;
// var answersArray = Object.values(questions[0].answers); //access to answer
var answersArray = [];
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
        console.log("length is " + questions.length);
        ranQuestion();
        score++;
        counter.textContent = score;
        var newAnswer = "Correct!";
        var displayAnswer = document.createElement("div");
        var node = document.createTextNode(newAnswer);
        displayAnswer.appendChild(node);
        displayAnswer.classList.add("rightOrwrong1")
        rightOrwrong.append(displayAnswer);
        console.log("length is " + questions.length);
        console.log("score is " + score);
        gameOver();
        
    }
    else if (button1.correct == false && questions.length == 0) {
        var newAnswer = "Wrong!";
        var displayAnswer = document.createElement("div");
        var node = document.createTextNode(newAnswer);
        displayAnswer.appendChild(node);
        displayAnswer.classList.add("rightOrwrong1");
        rightOrwrong.append(displayAnswer);
        ranQuestion();
        gameOver();
    }
})
button2.addEventListener("click", function() {
    if (button2.correct == true && questions.length == 0) {
        console.log("length is " + questions.length);
        ranQuestion();
        score++;
        counter.textContent = score;
        var newAnswer = "Correct!";
        var displayAnswer = document.createElement("div");
        var node = document.createTextNode(newAnswer);
        displayAnswer.appendChild(node);
        displayAnswer.classList.add("rightOrwrong1");
        rightOrwrong.append(displayAnswer);
        console.log("length is " + questions.length);
        console.log("score is " + score);
        gameOver();
    }
    else if (button2.correct == false && questions.length == 0) {
        var newAnswer = "Wrong!";
        var displayAnswer = document.createElement("div");
        var node = document.createTextNode(newAnswer);
        displayAnswer.appendChild(node);
        displayAnswer.classList.add("rightOrwrong1");
        rightOrwrong.append(displayAnswer);
        ranQuestion();
        gameOver();
    }
})
button3.addEventListener("click", function() {
    if (button3.correct == true && questions.length == 0) {
        console.log("length is " + questions.length);
        ranQuestion();
        score++;
        counter.textContent = score;
        var newAnswer = "Correct!";
        var displayAnswer = document.createElement("div");
        var node = document.createTextNode(newAnswer);
        displayAnswer.appendChild(node);
        displayAnswer.classList.add("rightOrwrong1");
        rightOrwrong.append(displayAnswer);
        console.log("length is " + questions.length);
        console.log("score is " + score);
        gameOver();
    }
    else if (button3.correct == false && questions.length == 0) {
        var newAnswer = "Wrong!";
        var displayAnswer = document.createElement("div");
        var node = document.createTextNode(newAnswer);
        displayAnswer.appendChild(node);
        displayAnswer.classList.add("rightOrwrong1");
        rightOrwrong.append(displayAnswer);
        ranQuestion();
        gameOver();
    }
})
button4.addEventListener("click", function() {
    if (button4.correct == true && questions.length == 0) {
        console.log("length is " + questions.length);
        ranQuestion();
        score++;
        counter.textContent = score;
        var newAnswer = "Correct!";
        var displayAnswer = document.createElement("div");
        var node = document.createTextNode(newAnswer);
        displayAnswer.appendChild(node);
        displayAnswer.classList.add("rightOrwrong1");
        rightOrwrong.append(displayAnswer);
        console.log("length is " + questions.length);
        console.log("score is " + score);
        gameOver();
    }
    else if (button4.correct == false && questions.length == 0) {
        var newAnswer = "Wrong!";
        var displayAnswer = document.createElement("div");
        var node = document.createTextNode(newAnswer);
        displayAnswer.appendChild(node);
        displayAnswer.classList.add("rightOrwrong1");
        rightOrwrong.append(displayAnswer);
        ranQuestion();
        gameOver();
    }
})












    // var button1 = document.getElementById("button1");
button1.addEventListener("click", function() {
    if (button1.correct == true && questions.length > 0) {
        console.log("length is " + questions.length);
        ranQuestion();
        score++;
        counter.textContent = score;
        var newAnswer = "Correct!";
        var displayAnswer = document.createElement("div");
        var node = document.createTextNode(newAnswer);
        displayAnswer.appendChild(node);
        displayAnswer.classList.add("rightOrwrong1");
        rightOrwrong.append(displayAnswer);
        console.log("length is " + questions.length);
        console.log("score is " + score);
        
    }
    else if (button1.correct == false && questions.length > 0) {
        var newAnswer = "Wrong!";
        var displayAnswer = document.createElement("div");
        var node = document.createTextNode(newAnswer);
        displayAnswer.appendChild(node);
        displayAnswer.classList.add("rightOrwrong1");
        rightOrwrong.append(displayAnswer);
        ranQuestion();
    }
})
button2.addEventListener("click", function() {
    if (button2.correct == true && questions.length > 0) {
        console.log("length is " + questions.length);
        ranQuestion();
        score++;
        counter.textContent = score;
        var newAnswer = "Correct!";
        var displayAnswer = document.createElement("div");
        var node = document.createTextNode(newAnswer);
        displayAnswer.appendChild(node);
        displayAnswer.classList.add("rightOrwrong1");
        rightOrwrong.append(displayAnswer);
        console.log("length is " + questions.length);
        console.log("score is " + score);
    }
    else if (button2.correct == false && questions.length > 0) {
        var newAnswer = "Wrong!";
        var displayAnswer = document.createElement("div");
        var node = document.createTextNode(newAnswer);
        displayAnswer.appendChild(node);
        displayAnswer.classList.add("rightOrwrong1");
        rightOrwrong.append(displayAnswer);
        ranQuestion();
    }
})
button3.addEventListener("click", function() {
    if (button3.correct == true && questions.length > 0) {
        console.log("length is " + questions.length);
        ranQuestion();
        score++;
        counter.textContent = score;
        var newAnswer = "Correct!";
        var displayAnswer = document.createElement("div");
        var node = document.createTextNode(newAnswer);
        displayAnswer.appendChild(node);
        displayAnswer.classList.add("rightOrwrong1");
        rightOrwrong.append(displayAnswer);
        console.log("length is " + questions.length);
        console.log("score is " + score);
    }
    else if (button3.correct == false && questions.length > 0) {
        var newAnswer = "Wrong!";
        var displayAnswer = document.createElement("div");
        var node = document.createTextNode(newAnswer);
        displayAnswer.appendChild(node);
        displayAnswer.classList.add("rightOrwrong1");
        rightOrwrong.append(displayAnswer);
        ranQuestion();
    }
})
button4.addEventListener("click", function() {
    if (button4.correct == true && questions.length > 0) {
        console.log("length is " + questions.length);
        ranQuestion();
        score++;
        counter.textContent = score;
        var newAnswer = "Correct!";
        var displayAnswer = document.createElement("div");
        var node = document.createTextNode(newAnswer);
        displayAnswer.appendChild(node);
        displayAnswer.classList.add("rightOrwrong1");
        rightOrwrong.append(displayAnswer);
        console.log("length is " + questions.length);
        console.log("score is " + score);
    }
    else if (button4.correct == false && questions.length > 0) {
        var newAnswer = "Wrong!";
        var displayAnswer = document.createElement("div");
        var node = document.createTextNode(newAnswer);
        displayAnswer.appendChild(node);
        displayAnswer.classList.add("rightOrwrong1");
        rightOrwrong.append(displayAnswer);
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



// 55
// var userSelect = document.querySelector('.answer') //store users input value from radio
// var length = userSelect.length