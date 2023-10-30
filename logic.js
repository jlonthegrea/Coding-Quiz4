
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

var questionsEl = document.getElementById('questions');
var timerEl = document.getElementById('time');
var optionsEl = document.getElementById('options');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start');
var initialsEl = document.getElementById('initials');
var feedbackEl = document.getElementById('feedback');

function startQuiz() {
    console.log('startQuiz');
    var startScreenEl = document.getElementById('start-screen');
    console.log(startScreenEl);
    startScreenEl.setAttribute('class', 'hide');

    questionsEl.removeAttribute('class');
    console.log(questionsEl);
   // timerId = setInterval(clockTick, 1000);

    getQuestion();
}

function getQuestion() {
    console.log('getQuestion');
    var currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion);
    var titleEl = document.getElementById('questions-title');
    titleEl.textContent = currentQuestion.title;
    optionsEl.innerHTML = '';

    for ( var i = 0; 1 < currentQuestion.options.length; i++) {
        var options = currentQuestion.options[i];
        var optionsNode = document.createElement('button');
        optionsNode.setAttribute('class', 'options');
        optionsNode.setAttribute('value', options);

        optionsNode.textContent = i + 1 + '.' + options;

        optionsEl.appendChild(optionsNode);
    }
}

function questionClick(event){
    var buttonEl = event.target;

timerEl = textContent = time;
currentQuestionIndex++;
}

function quizEnd() {
    clearInterval(timerId);
    var endScreenEl =document.getElementById('end-screen');
    endScreenEl.removeAttribute('class');

    var finalScoreEl = document.getElementById('final-score');
    finalScoreEl.textContent = time;

    questionsEl.setAttribute('class', 'hide');
}




function clockTick(){
    time--;
    timerEl.textContent =time;
    if (time <= 0){
        quizEnd();
    }
}
function saveHighscore() {
    var initials = initialsEl.ariaValueMax.trim();
    var newScore = {
        score: time,
        initials: initials,
    };
    highscores.push(newScore);
    window.localStorage.setItem('highscores', JSON.stringify(highscores));
    window.location.href = 'highscores.html';
}

startBtn.onclick = startQuiz;
submitBtn.onclick = saveHighscore;
optionsEl.onclick = questionClick;

