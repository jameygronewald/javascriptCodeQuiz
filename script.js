// Variables associated with DOM elements
const highScores = document.querySelector('#highScores');
const timer = document.querySelector('#timer');
const score = document.querySelector('#score');
const displayQuestion = document.querySelector('#questions');

// Array of quiz questions
let questions = [
    {q: 'What is your name?', o1: 'A) Larry', o2: 'B) Per', o3: 'C) Jamey', o4: 'D) Martin', a: 'C) Jamey'},
    {q: 'What is your age?', o1: 'A) 34', o2: 'B) 28', o3: 'C) 29', o4: 'D) 58', a: 'B) 28'},
    {q: 'Where do you live?', o1: 'A) Seattle', o2: 'B) Caracas', o3: 'C) Cape Town', o4: 'D) Minsk', a: 'A) Seattle'}
];

let score = 0;
let currentQuestion = 0;


