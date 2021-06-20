// var startEl = document.getElementById("header");
// var quizEl = document.getElementById("intro");
var startButtonEl = document.getElementById("startQuiz");
var introBlockEl = document.getElementById("introBlock");
var questionBlockEl = document.getElementById("question_block");
var optionButtonsEl = document.getElementById("optionButtons");
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

var score = 0;

var questions = [
    {
    question: "Commonly used data types DO NOT Include:",
    answers: [
        {text: "strings", correct: false},
        {text: "booleans", correct: false},
        {text: "alerts", correct: true},
        {text: "numbers", correct: false}
    ]
    },
    {
    question: "The condition in an if / else statement is enclosed within _____.",
    answers: [
        {text: "quotes", correct: false},
        {text: "curly brackets", correct: false},
        {text: "parenthesis", correct: true},
        {text: "square brackets", correct: false}
    ]
    },
    {
    question: "Arrays in JavaScript can be used to store _____.",
    answers: [
        {text: "numbers and strings", correct: false},
        {text: "other arrays", correct: false},
        {text: "booleans", correct: false},
        {text: "all of the above", correct: true}
    ]
    },
    {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    answers: [
        {text: "commas", correct: false},
        {text: "curly brackets", correct: false},
        {text: "quotes", correct: true},
        {text: "parenthesis", correct: false}
    ]
    },
    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
        {text: "JavaScript", correct: false},
        {text: "terminal/bash", correct: false},
        {text: "for loops", correct: false},
        {text: "console.log", correct: true}
    ]
    },
];
//creates undefined variables for future function use
var shuffleQues
var currentQuesIndex
// when start button is clicked, startGame function runs
startButtonEl.addEventListener('click', startGame);
//hides my intro block, shuffles my questions, sets my current question index to 0, shows my question block, getQuestions function runs
function startGame() {
introBlockEl.classList.add('hide');
shuffleQues = questions.sort(() => Math.random() - .5);
currentQuesIndex = 0;
questionBlockEl.classList.remove('hide');
getQuestions();
};
// runs resetBlock function and runs showQues function with argument shuffle questions at the current index
function getQuestions() {
    resetBlock();
    showQues(shuffleQues[currentQuesIndex]);
};
//sets question text to text from object. For each answer creates a button and adds in appropriate text from object. Also saves correct answer to the dataset. Creates eventlistener that when clicked on runs chooseAnswer function
function showQues(question) {
questionEl.innerText = question.question
question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', chooseAnswer)
    optionButtonsEl.appendChild(button)
})
};
// removed originally created buttons in HTML
function resetBlock() {
    while (optionButtonsEl.firstChild) {
        optionButtonsEl.removeChild(optionButtonsEl.firstChild)
    }
}
// gets the button we selected and then check if it is correct. Then creates a function to see if it is actually set to correct or wrong. Create an array for the answers and then checks if each button is correct or not.
function chooseAnswer(e) {
    var selectedOption = e.target;
    var correct = selectedOption.dataset.correct;
    checkIfCorrect(document.body, correct)
    Array.from(optionButtonsEl.children).forEach(button => {
        checkIfCorrect(button, button.dataset.correct)
    })
};

function checkIfCorrect(correct) {
    if (correct) {
        score++;
        console.log('correct');
    } else {
        console.log("wrong");
    }
};