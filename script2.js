var rightAnswer = document.querySelector("#rightAnswer");
var wrongAnswer = document.querySelector("#wrongAnswer");
var rightOrwrong = document.querySelector("#rightOrwrong");
var scoreDisplay = document.querySelector("#score");

var score = localStorage.getItem("score")
console.log("score is" + score);
var lastAnswer = localStorage.getItem("lastAnswer");
rightOrwrong.textContent = lastAnswer;
// var pageNumber = 1;


rightAnswer.addEventListener("click", function(event) {
    event.preventDefault();
    score++;
    // pageNumber++;
    console.log("Score is " + score);
    var newAnswer = "You were right!";
    rightOrwrong.textContent = newAnswer;
    localStorage.setItem("lastAnswer", newAnswer);
    localStorage.setItem("score", score);
    // var page = "question_" + [pageNumber] + ".html";
    // window.location.href= 

});

wrongAnswer.addEventListener("click", function(event) {
    event.preventDefault();
    // pageNumber++;
    console.log("Score is " + score);
    var newAnswer = "You were wrong!"
    rightOrwrong.textContent = newAnswer;
    localStorage.setItem("lastAnswer", newAnswer);
    localStorage.setItem("score", score);
    // var page = "question_" + [pageNumber] + ".html";
    // window.location.href= page
});

var finalscore = localStorage.getItem("score");
