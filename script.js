var startButtonEl = document.getElementById("startQuiz");
var timerEl = document.getElementById("timingTest");
var finalScoreEl = $('#finalScore');
var endScreenEL = $('#endScreen');
var introBlockEl = $('#introBlock');
var questionBlockEl = $("#questionBlock");
var highscoreEl = document.getElementById('highscore');
var submitEl = $('#submit');
var initialsEl = document.getElementById('initials');
var highscoreScreenEl = $("#highscoreScreen");
var hideTimerEl = $('#timer');

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
highscoreScreenEl.hide();
hideTimerEl.hide();
// when start button is clicked, startGame function runs
startButtonEl.addEventListener('click', startGame);
//hides my intro block, creates a timer of 100 seconds and decreases the time by one second
function startGame() {
    hideTimerEl.show();
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

// hides intro block. Cycles through the questions. Once questions runs out, runs gameOver function. Created a loop that cycles through buttons and assigns appropriate wrong or correct function.
function getQuestions() {
    introBlockEl.hide();
    currentQuestion++;
    if(currentQuestion >= questions.length) {
        gameOver();
        return;
    }
    var createQuestionBlock = questions[currentQuestion].question;

    for (var optionsLoop = 0; optionsLoop < questions[currentQuestion].answers.length; optionsLoop++) {
        var buttonClick = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
        buttonClick = buttonClick.replace("[CHOICE]", questions[currentQuestion].answers[optionsLoop]);
        if (questions[currentQuestion].answers[optionsLoop] == questions[currentQuestion].correct) {
            buttonClick = buttonClick.replace("[ANS]", "correct()");
        } else {
            buttonClick = buttonClick.replace("[ANS]", "wrong()");
        }
        createQuestionBlock += buttonClick
    }  
 questionBlockEl.html(createQuestionBlock);
};
// if answer is wrong, subtract 10 seconds from timer and run get questions function
function wrong() {
    timeLeft -= 10;
    getQuestions();
};
// if answer is right, moves to next question.
function correct() {
    getQuestions();
}
// hides timer, introblock and questionblock. Timeleft is converted into score. Set score to local storage.
function gameOver() {
    clearInterval(timer);
    hideTimerEl.hide();
    introBlockEl.hide();
    questionBlockEl.hide();
    endScreenEL.show();
    var score = timeLeft;
    finalScoreEl.text("Your final score was " + score);
    localStorage.setItem("highscore", score)
}
// hides the end screen and stores initials to local storage and then runs function showHighScore
submitEl.on("click", function(event){
    event.preventDefault();
    endScreenEL.hide();
    var finalScoreBox = {
        initial: initialsEl.value,
    };

    localStorage.setItem("finalScoreBox", JSON.stringify(finalScoreBox));
    showHighscore();

});
// hides timer, and displays score and initials from local storage.
function showHighscore() {
    highscoreScreenEl.show();
    hideTimerEl.hide();
    var displayScore = JSON.parse(localStorage.getItem("finalScoreBox"));
    var displayHS = localStorage.getItem("highscore");
    if (displayScore !== null && displayHS !== null) {
        document.getElementById("typedInitials").innerHTML =displayScore.initial;
        document.getElementById("timerScore").innerHTML = displayHS;
    };
};
