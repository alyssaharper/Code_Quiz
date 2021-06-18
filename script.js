var start = document.getElementById("header");
var quiz = document.getElementById("intro");
var question = document.getElementById("questions");
var optA = document.getElementById("optionA");
var optB = document.getElementById("optionB");
var optC = document.getElementById("optionC");
var optD = document.getElementById("optionD");

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
var score = 0;
var lastQuestion = questions.length - 1;
let startingQuestion = 0;
