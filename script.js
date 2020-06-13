// Variables associated with DOM elements
const welcomeElements = document.querySelectorAll('.welcome');
const quizElements = document.querySelectorAll('.quiz');
const endElements = document.querySelectorAll('.quizEnd');
const scoreElements = document.querySelectorAll('.scoreScreen');
const container = document.querySelector('#container');
const startButton = document.querySelector('#startButton');
const highScores = document.querySelector('#highScores');
const showScores = document.querySelector('#showScores');
const timer = document.querySelector('#timer');
const scoreDisplay = document.querySelector('#scoreboard');
const displayQuestion = document.querySelector('#questions');
const choiceA = document.querySelector('#choiceA')
const choiceB = document.querySelector('#choiceB');
const choiceC = document.querySelector('#choiceC');
const choiceD = document.querySelector('#choiceD');
const response = document.querySelector('#response');
const submit = document.querySelector('#submitScore');
const back = document.querySelector('#backButton');
const clear = document.querySelector('#clearButton');
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
// Function that reassigns classes to variables that are associated with chunks of HTML elements; the classes change to set elements being displayed in the DOM at that time to 'display: none' and remove the .hide class from elements that will then update the DOM with desired nodes; reused throughout the program
const nextScreen = function(hideHTML, displayHTML, className) {
    let i = 0;
    while (i < hideHTML.length) {
        hideHTML[i].setAttribute('class', 'hide');
        i++;
    }
    let j = 0;
    while (j < displayHTML.length) {
        displayHTML[j].setAttribute('class', className);
        j++;
    };
};

const startTimer = function() {   
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
        response.textContent = '';
    }
    else{
        endQuiz();
    }
};
// Function that considers which button the user has chosen and evaluates whether it matches the correct answer and responds accordingly; also iterates to next question and runs askQuestion function (which updates the DOM)
function evaluateChoice(choice) {
    if (choice === questions[currentQuestion].a) {
        response.textContent = 'CORRECT!';
        response.style.color = 'green';
        score += 20;
    }
    else {
        response.textContent = 'INCORRECT';
        response.style.color = 'red';
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
    nextScreen(quizElements, endElements, 'quizEnd')
};

//EVENT LISTENERS
// Event listener that starts quiz by hiding all the .welcome class and removing .hide from all elements with the .quiz class; also starts the timer and the askQuestion() function
startButton.addEventListener('click', function() {
    nextScreen(welcomeElements, quizElements, 'quiz')
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
    nextScreen(endElements, scoreElements, 'scoreScreen');
    highScores.setAttribute('class', 'hide');
    
    /* initials = document.querySelector('#initials').value;
    let storedHighScore = localStorage.setItem(initials, finalScore); */
});

back.addEventListener('click', function() {
    nextScreen(scoreElements, welcomeElements, 'welcome');
    highScores.setAttribute('class', '');
    container.setAttribute('class', '');
    secondsLeft = 60;
    currentQuestion = 0;
    score = 0;
    finalScore;
    initials;
});

showScores.addEventListener('click', function() {
    document.querySelector('#container').setAttribute('class', 'hide');
    let i = 0;
    while (i < scoreElements.length) {
        scoreElements[i].setAttribute('class', 'scoreScreen');
        i++;
    };
});
