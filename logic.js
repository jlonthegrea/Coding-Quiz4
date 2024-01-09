var startButton = document.querySelector("#start-quiz");
var timer = document.querySelector("#timer");
var questionContainer = document.querySelector(".questions");
var choiceContainer = document.querySelector(".choices");
var result = document.querySelector(".results");
var endScreen = document.querySelector(".end-screen");
var finalScore = document.querySelector(".final-score");

var buttonAnswer1 = document.querySelector("#answer1");
var buttonAnswer2 = document.querySelector("#answer2");
var buttonAnswer3 = document.querySelector("#answer3");
var buttonAnswer4 = document.querySelector("#answer4");
var buttonAnswer5 = document.querySelector("#answer5");
var buttonAnswer6 = document.querySelector("#answer6");
var buttonAnswer7 = document.querySelector("#answer7");

var initialsInput = document.querySelector(".initials.form");

var timeLeft = 60;
var currentQuestion = 0;
var currentTime = timer.textcontent;
var setInterval;





// Question List
var questions = [{
        title: "Commonly used data types do NOT include:",
        choices: ["Booleans", "Alerts", "Strings", "Numbers"],
        answer: 'Alerts',
},
 {
        title: "The condition of an if/else statement is enclosed within ___.",
        choices: ["Parentheses", "Curly Brackets", "Quotes", "Square Brackets"],
        answer: 'Parentheses'
},
{
        title: "Arrays in JavaScript can be used to store ___.",
        choices: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
        answer: 'All of the above'
},
{
        title: "String values must be enclosed within ___ when being assigned a variable.",
        choices: ["Commas", "Pound Sign", "Quotes", "Parentheses"],
        answer: "Quotes"
},
{
        title: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        choices: ["Javascript","Terminal/Bash", "console.log", "for loop"],
        answer: 'console.log'
},
{
        title: "Using ___ statement is how you test for a condition.",
        choices: ["Select", "If", "Switch", "For"],
        answer:'If'
},

{
        title: "Javascript is interpreted by ___",
        choices: ['Client', 'Server','Object','None of the above'],
        answer: 'Client'
},
]
    console.log(questions);



// Storing Highscores in Local Storage 
function resetGame() {
    var person_initials = document.querySelector("#person_initials").value;
    localStorage.setitem("highScore", currentTime);
    localStorage.setItem(person_initials, currentTime);
}
// Timer
startButton.addEventListener("click", function(event) {
    var event = setInterval(function (){
        currentTime--;
    },1000)
});

// var buttons = document.querySelectorAll(".choice-choice").forEach(function (item){
//     item.addEventListener("click", checkAnswer);
// });