
var score = 0;
var timer;
var timeLeft = 0;
var currentQuestion = 0;

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

// when start button is clicked, startGame function runs
startButtonEl.addEventListener('click', startGame);
//hides my intro block, creates a timer of 100 seconds and decreases the time by one second
function startGame() {
introBlockEl.classList.add('hide');
questionBlockEl.classList.remove('hide');
timeLeft = 100;
document.getElementById("timer").innerHTML = timeLeft;

timer = setInterval(function() {
    timeLeft--;
    document.getElementById("timer").innerHTML = timeLeft;
    if (timeLeft <=0) {
    clearInterval(timer);
    gameOver();
    }
}, 100);
getQuestions();
};

function gameOver() {
    clearInterval(timer);
    questionBlockEl.classList.add('hide');
    allDoneEl.show();
    initialInputEl.show();
    submitEl.show();
}
// runs resetBlock function and runs showQues function with argument shuffle questions at the current index
function getQuestions() {
    currentQuestion++;
    if(currentQuestion >= questions.length) {
        endGame();
        return;
    }
    questionEl.innerHTML = questions[currentQuestion];
};

function wrong() {
    timeLeft -= 10;
    getQuestions();
};

function correct() {
    score +=20;
    getQuestions();
}