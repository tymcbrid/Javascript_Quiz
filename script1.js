var rightAnswer = document.querySelector("#rightAnswer");
var wrongAnswer = document.querySelector("#wrongAnswer");
var rightOrwrong = document.querySelector("#rightOrwrong");
var scoreDisplay = document.querySelector("#score");

var score = localStorage.getItem("score")
console.log("score is" + score);



rightAnswer.addEventListener("click", function(event) {
    event.preventDefault();
    score++;
    console.log("Score is " + score);
    var newAnswer = "You were right!";
    localStorage.setItem("lastAnswer", newAnswer);
    localStorage.setItem("score", score);

});

wrongAnswer.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Score is " + score);
    var newAnswer = "You were wrong!"
    localStorage.setItem("lastAnswer", newAnswer);
    localStorage.setItem("score", score);

});


