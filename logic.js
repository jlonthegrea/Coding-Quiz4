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

var currentQuestion = 0;
var currentTime = 60;
var timerInterval;
var currentQuestionIndex= 0;



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


 
function resetGame() {
    var person_initials = document.querySelector("#person_initials").value;
    localStorage.setitem("highScore", currentTime);
    localStorage.setItem(person_initials, currentTime);
};

function renderQuestions() {
    choiceContainer.innerHTML='';
    questionContainer.classList.remove('hide');
    console.log(questions[currentQuestionIndex].text)
    questionContainer.textContent= questions[currentQuestionIndex].title;

    for (i = 0; i < questions[currentQuestionIndex].choices.length; i++){
        var choiceBtn =document.createElement('button');
        choiceBtn.style.display = 'block';
        choiceBtn.classList.add('choice-btn')
        choiceBtn.textContent = questions[currentQuestionIndex].choices[i]
        choiceContainer.append(choiceBtn);
    }

    };

function questionClick (e) {
    if (!e.target.matches('.choices-btn')) {
        return;
    }
    var userAnswer = e.target.textContent.split(' ')[2];
    console.log(userAnswer);
    if(userAnswer === questions[currentQuestionIndex].correctAnswer){
        console.log("CORRECT!")
    } else {
        console.log("WRONG")
    }

    if (currentQuestionIndex >= questions.length -1){
        console.log("Quiz Over!")
        return;
    }
    currentQuestionIndex==
    renderQuestions();
    console.log(userAsnwer === questions[currentQuestionIndex].correctAnswer)
}



var startQuiz = function(){
    renderQuestions();
}

choiceContainer.addEventListener("click", choiceContainer)
startButton.addEventListener("click", startQuiz)

// Timer
startButton.addEventListener("click", function() {
    var timerStart = setInterval(function (){
        if (currentTime >= 0) {
            timer.textContent= currentTime;
            currentTime--;
        } else {
            timer.textContent= "Game over.";
            clearInterval(timerInterval);
        }
    },1000)
});

startButton.addEventListener("click", function(){

})




