var rightAnswer = document.querySelector("#rightAnswer");
var wrongAnswer = document.querySelector("#wrongAnswer");
var rightOrwrong = document.querySelector("#rightOrwrong");
var scoreDisplay = document.querySelector("#score");

var lastAnswer = localStorage.getItem("lastAnswer");
rightOrwrong.textContent = lastAnswer;
var finalscore = localStorage.getItem("score");
scoreDisplay.textContent = finalscore