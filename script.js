// var startEl = document.getElementById("header");
// var quizEl = document.getElementById("intro");
var startButtonEl = document.getElementById("startQuiz");
var introBlockEl = document.getElementById("introBlock");
var questionBlockEl = document.getElementById("question_block");
var questionEl = document.querySelector("#questions");
var optAEl = document.getElementById("optionA");
var optBEl = document.getElementById("optionB");
var optCEl = document.getElementById("optionC");
var optDEl = document.getElementById("optionD");
var finalScore = document.querySelector("#finalScore");
var allDoneEl = $("#allDone")
var initialInputEl = $("#initial_input");
var submitEl = $("#submit");

//immediately hides the "all done" script, the submit button, and form
allDoneEl.hide();
initialInputEl.hide();
submitEl.hide();



var questions = [
    {
    question: "Commonly used data types DO NOT Include:",
    optA: "strings",
    optB: "booleans",
    optC: "alerts",
    optD: "numbers",
    correct: 3,
    },
    {
    question: "The condition in an if / else statement is enclosed within _____.",
    optA: "quotes",
    optB: "curly brackets",
    optC: "parenthesis",
    optD: "square brackets",
    correct: 2,
    },
    {
    question: "Arrays in JavaScript can be used to store _____.",
    optA: "numbers and strings",
    optB: "other arrays",
    optC: "booleans",
    optD: "all of the above",
    correct: 4,
    },
    {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    optA: "commas",
    optB: "curly brackets",
    optC: "quotes",
    optD: "parenthesis",
    correct: 3,
    },
    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    optA: "JavaScript",
    optB: "terminal/bash",
    optC: "for loops",
    optD: "console.log",
    correct: 4,
    },
];


startButtonEl.addEventListener('click', startGame)

function startGame() {
introBlockEl.classList.add('hide');
questionBlockEl.classList.remove('hide');

};

