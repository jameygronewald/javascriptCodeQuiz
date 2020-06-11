// Variables associated with DOM elements
const startButton = document.querySelector('#start');
const welcomeElements = document.querySelectorAll('.welcome');
const timer = document.querySelector('#timer');
const quizElements = document.querySelectorAll('.quiz');
const scoreDisplay = document.querySelector('#scoreboard');
const displayQuestion = document.querySelector('#questions');
const choiceA = document.querySelector('#choiceA')
const choiceB = document.querySelector('#choiceB');
const choiceC = document.querySelector('#choiceC');
const choiceD = document.querySelector('#choiceD');
const response = document.querySelector('#response');
let currentQuestion = 0;
let score = 0;

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
    let secondsLeft = 60;
    timer.setAttribute('class', 'show timer');
    let countdown = setInterval(function() {
        if (secondsLeft === 0) {
        clearInterval(countdown);
        }
        else {
            secondsLeft--
            timer.innerText = 'Seconds remaining: ' + secondsLeft;
        } 
    }, 1000)    
};

// Function that displays current question and multiple choice responses and ends quiz once questions array is through
const askQuestion = function() {
    scoreDisplay.innerText = 'Score: ' + score;
    if (currentQuestion < 5) {
        displayQuestion.innerText = questions[currentQuestion].q;
        choiceA.textContent = questions[currentQuestion].o1;
        choiceB.textContent = questions[currentQuestion].o2;
        choiceC.innerHTML = questions[currentQuestion].o3;
        choiceD.textContent = questions[currentQuestion].o4;
        console.log(score);
    }
    else{
        endQuiz();
    }
};

const endQuiz = function () {
    score += secondsLeft;
};

/* const evaluateChoice = function(choice) {
    if (choice === questions[currentQuestion].a) {
        console.log('correct')
    }
    else {
        console.log('incorrect')
    }
    currentQuestion++;
    askQuestion();
}; */

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

// Event listeners for each button that evaluate whether the answer to the chosen button matches the answer of the question in the array whose index matches the currentQuestion value, and then iterates through the question array and runs the askQuestion function to 
// choiceA.addEventListener('click', evaluateChoice(questions[currentQuestion].o1));

choiceA.addEventListener('click', function() {
    if (questions[currentQuestion].o1 === questions[currentQuestion].a) {
        response.textContent = 'CORRECT!';
        score += 20;
    }
    else {
        response.textContent = 'INCORRECT'
    }
    currentQuestion++;
    askQuestion();
});
choiceB.addEventListener('click', function() {
    if (questions[currentQuestion].o2 === questions[currentQuestion].a) {
        response.textContent = 'CORRECT!'
        score += 20;
    }
    else {
        response.textContent = 'INCORRECT'
    }
    currentQuestion++;
    askQuestion();
});
choiceC.addEventListener('click', function() {
    if (questions[currentQuestion].o3 === questions[currentQuestion].a) {
        response.textContent = 'CORRECT!'
        score += 20;
    }
    else {
        response.textContent = 'INCORRECT'
    }
    currentQuestion++;
    askQuestion();
});
choiceD.addEventListener('click', function() {
    if (questions[currentQuestion].o4 === questions[currentQuestion].a) {
        response.textContent = 'CORRECT!'
        score += 20;
    }
    else {
        response.textContent = 'INCORRECT'
    }
    currentQuestion++;
    askQuestion();
});
