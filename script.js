// Variables associated with DOM elements
const startButton = document.querySelector('#start');
const welcomeElements = document.querySelectorAll('.welcome');
const quizElements = document.querySelectorAll('.quiz');
const displayQuestion = document.querySelector('#questions')
const choiceA = document.querySelector('#choiceA')
const choiceB = document.querySelector('#choiceB');
const choiceC = document.querySelector('#choiceC');
const choiceD = document.querySelector('#choiceD');
const response = document.querySelector('#response');

// Array of quiz questions
let questions = [
    {q: 'Commonly used data types DO NOT include:', o1: 'A) strings', o2: 'B) booleans', o3: 'C) alerts', o4: 'D) numbers', a: 'C) alerts'},
    {q: 'The condition in an if/else statement is enclosed within _____.', o1: 'A) quotes', o2: 'B) curly brackets', o3: 'C) parentheses', o4: 'D) square brackets', a: 'C) parentheses'},
    {q: 'Arrays in JavaScript can be used to store _____.', o1: 'A) numbers and strings', o2: 'B) other arrays', o3: 'C) booleans', o4: 'D) all of the above', a: 'D) all of the above'},
    {q: 'String values must be enclosed within ______ when being assigned to variables.', o1: 'A) commas', o2: 'B) curly brackets', o3: 'C) quotes', o4: 'D) parentheses', a: 'C) quotes'},
    {q: 'A very useful tool used during development and debugging for printing content to the debugger is:', o1: 'A) JavaScript', o2: 'B) terminal / bash', o3: 'C) for loops', o4: 'D) console.log', a: 'D) console.log'}
];

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
    // startTimer();
});

// Function that displays current question and multiple choice responses
let currentQuestion = 0;
const askQuestion = function() {
    displayQuestion.innerText = questions[currentQuestion].q;
    choiceA.textContent = questions[currentQuestion].o1;
    choiceB.textContent = questions[currentQuestion].o2;
    choiceC.textContent = questions[currentQuestion].o3;
    choiceD.textContent = questions[currentQuestion].o4;
}

/* const checkAnswer = function() {
    if ()
} */

choiceA.addEventListener('click', function() {
    console.log('hi');
});
choiceB.addEventListener('click', function() {
    console.log('hi');
});
choiceC.addEventListener('click', function() {
    console.log('hi');
});
choiceD.addEventListener('click', function() {
    console.log('hi');
});


