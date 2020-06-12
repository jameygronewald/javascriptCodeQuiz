// Variables associated with DOM elements
const startButton = document.querySelector('#start');
const welcomeElements = document.querySelectorAll('.welcome');
const highScores = document.querySelector('#highScores');
const timer = document.querySelector('#timer');
const quizElements = document.querySelectorAll('.quiz');
const scoreDisplay = document.querySelector('#scoreboard');
const displayQuestion = document.querySelector('#questions');
const choiceA = document.querySelector('#choiceA')
const choiceB = document.querySelector('#choiceB');
const choiceC = document.querySelector('#choiceC');
const choiceD = document.querySelector('#choiceD');
const response = document.querySelector('#response');
const endElements = document.querySelectorAll('.quizEnd');
const submit = document.querySelector('#submitScore');
let currentQuestion = 0;
let score = 0;
let secondsLeft = 60;
let finalScore;
let initials;

// Array of quiz questions
let questions = [
    {q: 'Commonly used data types DO NOT include:', o1: 'A) strings', o2: 'B) booleans', o3: 'C) alerts', o4: 'D) numbers', a: 'C) alerts'},
    {q: 'The condition in an if/else statement is enclosed within _____.', o1: 'A) quotes', o2: 'B) curly brackets', o3: 'C) parentheses', o4: 'D) square brackets', a: 'C) parentheses'},
    {q: 'Arrays in JavaScript can be used to store _____.', o1: 'A) numbers and strings', o2: 'B) other arrays', o3: 'C) booleans', o4: 'D) all of the above', a: 'D) all of the above'},
    {q: 'String values must be enclosed within ______ when being assigned to variables.', o1: 'A) commas', o2: 'B) curly brackets', o3: 'C) quotes', o4: 'D) parentheses', a: 'C) quotes'},
    {q: 'A very useful tool used during development and debugging for printing content to the debugger is:', o1: 'A) JavaScript', o2: 'B) terminal / bash', o3: 'C) for loops', o4: 'D) console.log', a: 'D) console.log'}
];
// FUNCTIONS
const startTimer = function() {   
    highScores.setAttribute('class', '');
    timer.setAttribute('class', '');
    let countdown = setInterval(function() {
        if (secondsLeft === 0) {
        clearInterval(countdown);
        endQuiz();
        }
        else if (currentQuestion > 4) {
            clearInterval(countdown);
        }
        else {
            secondsLeft--
            timer.innerText = 'Seconds Remaining: ' + secondsLeft;
        } 
    }, 1000)    
};

// Function that displays current question and multiple choice responses and ends quiz once questions array is through
const askQuestion = function() {
    scoreDisplay.innerText = 'Score: ' + score;
    if (currentQuestion < 5) {
        displayQuestion.textContent = questions[currentQuestion].q;
        choiceA.textContent = questions[currentQuestion].o1;
        choiceB.textContent = questions[currentQuestion].o2;
        choiceC.textContent = questions[currentQuestion].o3;
        choiceD.textContent = questions[currentQuestion].o4;
    }
    else{
        endQuiz();
    }
};
// Function that considers which button the user has chosen and evaluates whether it matches the correct answer and responds accordingly; also iterates to next question and runs askQuestion function (which updates the DOM)
function evaluateChoice(choice) {
    if (choice === questions[currentQuestion].a) {
        response.textContent = 'CORRECT!';
        score += 20;
    }
    else {
        response.textContent = 'INCORRECT';
        secondsLeft -= 10;
    }
    currentQuestion++;
    askQuestion();
};
// Function that ends the quiz when the questions are finished; presents finalScore to user and provides an input to log score and submit it; also hides timer
const endQuiz = function () {
    finalScore = score + secondsLeft;
    let yourScore = document.querySelector('#yourScore').textContent = 'YOUR SCORE: ' + finalScore;
    timer.setAttribute('class', 'hide');
    let i = 0;
    while (i < quizElements.length) {
        quizElements[i].setAttribute('class', 'hide');
        i++;
    }
    let j = 0;
    while (j < endElements.length) {
        endElements[j].setAttribute('class', 'quizEnd show');
        j++;
    };
};

//EVENT LISTENERS
// Event listener that starts quiz by hiding all the .welcome class and showing the .quiz class; also starts the timer and the askQuestion() function
startButton.addEventListener('click', function() {
    let i = 0;
    while (i < welcomeElements.length) {
        welcomeElements[i].setAttribute('class', 'hide');
        i++;
    };
    let j = 0;
    while (j < quizElements.length) {
        quizElements[j].setAttribute('class', 'show quiz');
        j++;
    };
    askQuestion();
    startTimer();
});

// Event listeners for each button that evaluate whether the answer to the chosen button matches the answer of the question in the array whose index matches the currentQuestion value, and then iterates through the question array and runs the askQuestion function to display next question
choiceA.addEventListener('click', function() {
    evaluateChoice(questions[currentQuestion].o1)
});
choiceB.addEventListener('click', function() {
    evaluateChoice(questions[currentQuestion].o2)
});
choiceC.addEventListener('click', function() {
    evaluateChoice(questions[currentQuestion].o3)
});
choiceD.addEventListener('click', function() {
    evaluateChoice(questions[currentQuestion].o4)
});
// Event listener for submit button to log initials and score to local storage 
submit.addEventListener('click', function(event) {
    event.preventDefault();
    initials = document.querySelector('#initials').value;
    let storedHighScore = localStorage.setItem(initials, finalScore);
});