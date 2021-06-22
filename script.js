var startButtonEl = document.getElementById("startQuiz");
var timerEl = document.getElementById("timer");
var finalScoreEl = $('#finalScore');
var endScreenEL = $('#endScreen');
var introBlockEl = $('#introBlock');
var questionBlockEl = $("#questionBlock");
var highscoreEl = $('#highscore');

var score = timeLeft;
var timer;
var timeLeft = 0;
var currentQuestion = -1;

var questions = [
    {
    question: "Commonly used data types DO NOT Include:",
    answers: [ "strings", "booleans", "alerts", "numbers" ],
    correct: "alerts"
    },
    {
    question: "The condition in an if / else statement is enclosed within _____.",
    answers: [ "quotes", "curly brackets", "parenthesis", "square brackets"],
    correct: "parenthesis"
    },
    {
    question: "Arrays in JavaScript can be used to store _____.",
    answers: [ "number and strings", "other arrays", "booleans", "all of the above"],
    correct: "all of the above"
    },
    {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    answers: ["commas", "curly brackets", "quotes", "parenthesis"],
    correct: "quotes"
    },
    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["JavaScripts", "terminal/bash", "for loops", "console.log"],
    correct: "console.log"
    },
];

endScreenEL.hide();
// when start button is clicked, startGame function runs
startButtonEl.addEventListener('click', startGame);
//hides my intro block, creates a timer of 100 seconds and decreases the time by one second
function startGame() {
timeLeft = 100;
timerEl.innerHTML = timeLeft;

timer = setInterval(function() {
    timeLeft--;
    timerEl.innerHTML = timeLeft;
    if (timeLeft <=0) {
    clearInterval(timer);
    gameOver();
    }
}, 1000);
getQuestions();
// console.log("test");
};

function gameOver() {
    clearInterval(timer);
    introBlockEl.hide();
    questionBlockEl.hide();
    highscoreEl.show();
    endScreenEL.show();
    finalScoreEl.text("Your final score was " + score);
}
// runs resetBlock function and runs showQues function with argument shuffle questions at the current index
function getQuestions() {
    introBlockEl.hide();
    highscoreEl.hide();
    currentQuestion++;
    if(currentQuestion >= questions.length) {
        gameOver();
        return;
    }
    var createQuestionBlock = questions[currentQuestion].question;

    for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].answers.length; buttonLoop++) {
        var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
        buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].answers[buttonLoop]);
        if (questions[currentQuestion].answers[buttonLoop] == questions[currentQuestion].answer) {
            buttonCode = buttonCode.replace("[ANS]", "correct()");
        } else {
            buttonCode = buttonCode.replace("[ANS]", "wrong()");
        }
        createQuestionBlock += buttonCode
    }  
 questionBlockEl.html(createQuestionBlock);
};

function wrong() {
    timeLeft -= 10;
    getQuestions();
};

function correct() {
    getQuestions();
}