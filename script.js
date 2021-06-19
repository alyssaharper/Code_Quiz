var startEl = $("#header");
var quizEl = $("#intro");
var startButtonEl = $("#startQuiz");
var questionEl = $("#questions");
var optAEl = document.getElementById("optionA");
var optBEl = document.getElementById("optionB");
var optCEl = document.getElementById("optionC");
var optDEl = document.getElementById("optionD");
var allDoneEl = $("#allDone")
var initialInputEl = $("#initial_input");
var submitEl = $("#submit");

allDoneEl.hide();
initialInputEl.hide();
submitEl.hide();
questionEl.hide();


var questions = [
    {
    question: "Commonly used data types DO NOT Include:",
    optA: "strings",
    optB: "booleans",
    optC: "alerts",
    optD: "numbers",
    correct: "optionC"
    },
    {
    question: "The condition in an if / else statement is enclosed within _____.",
    optA: "quotes",
    optB: "curly brackets",
    optC: "parenthesis",
    optD: "square brackets",
    correct: "optionB"
    },
    {
    question: "Arrays in JavaScript can be used to store _____.",
    optA: "numbers and strings",
    optB: "other arrays",
    optC: "booleans",
    optD: "all of the above",
    correct: "optionD"
    },
    {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    optA: "commas",
    optB: "curly brackets",
    optC: "quotes",
    optD: "parenthesis",
    correct: "optionC"
    },
    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    optA: "JavaScript",
    optB: "terminal/bash",
    optC: "for loops",
    optD: "console.log",
    correct: "optionD"
    },
]

startButtonEl.on('click', function() {
    renderQuestion();
    startEl.hide();
    quizEl.hide();
    startButtonEl.hide();
});





var score = 0;
var lastQuestion = questions.length - 1;
let currentQuestion = 0;

function renderQuestion(){
    let q = questions[currentQuestion];
    question.innerHTML = q.question;
    optAEl.innerHTML = q.optA;
    optBEl.innerHTML = q.optB;
    optCEl.innerHTML = q.optC;
    optDEl.innerHTML = q.optD;
}

// renderQuestion();
// currentQuestion++;
// renderQuestion();
