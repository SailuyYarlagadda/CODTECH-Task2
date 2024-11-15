"use strict";

const quizData = [
 {
  question: "Which of the following attribute is used to provide a unique name to an element?",
  a: "class",
  b: "id",
  c: "type",
  d: "none",
  correct: "b"
 },

 {
  question: "<input>  is -",
  a: "A format tag",
  b: "An empty tag",
  c: "All of the above",
  d: "None of the above",
  correct: "b"
 },
 {
  question: "What does CSS stand for?",
  a: "Central Style Sheets",
  b: "Cascading Style Sheets",
  c: "Cascading Simple Sheets",
  d: "Cars SUVs Sailboats",
  correct: "b"
 },
 {
  question: "What does HTML stand for?",
  a: "Hypertext Markup Language",
  b: "Hypertext Markdown Language",
  c: "Hyperloop Machine Language",
  d: "Helicopters Terminals Motorboats Lamborginis",
  correct: "a"
 },
 {
  question: "An HTML program is saved by using the ____ extension.",
  a: ".ht",
  b: ".html",
  c: ".hml",
  d: ".hlt",
  correct: "b"
 },
 {
  question: "Which of the following HTML attribute is used to define inline styles?",
  a: "style",
  b: "type",
  c: "class",
  d: "none",
  correct: "a"
 },
 {
  question: "JavaScript is the same as Java.",
  a: "true",
  b: "false",
  correct: "b"
 },
 {
  question: "Which event occurs when the user clicks on an HTML element?",
  a: "onchange",
  b: "onclick",
  c: "onmouseclick",
  d: "onmouseover",
  correct: "b"
 },
 {
  question: "Is JavaScript case-sensitive?",
  a: "No",
  b: "Yes",
  correct: "b"
 },
 {
  question: "Which operator is used to assign a value to a variable?",
  a: "*",
  b: "-",
  c: "=",
  d: "x",
  correct: "c"
 }
];

const quiz = document.querySelector(".quiz-body");
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const footerEl = document.querySelector(".quiz-footer");
const quizDetailEl = document.querySelector(".quiz-details");
const liEl = document.querySelector("ul li");

const a_txt = document.getElementById("a_text");
const b_txt = document.getElementById("b_text");
const c_txt = document.getElementById("c_text");
const d_txt = document.getElementById("d_text");
const btnSubmit = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
 deselectAnswers();
 const currentQuizData = quizData[currentQuiz];
 questionEl.innerText = currentQuizData.question;
 a_txt.innerText = currentQuizData.a;
 b_txt.innerText = currentQuizData.b;
 c_txt.innerText = currentQuizData.c;
 d_txt.innerText = currentQuizData.d;
 quizDetailEl.innerHTML = `<p>${currentQuiz + 1} of ${quizData.length}</p>`;
}

// deselect
function deselectAnswers() {
 answerEl.forEach((answerEl) => {
  answerEl.checked = false;
 });
}

// get selected
function getSelected() {
 let answer;
 answerEl.forEach((answerEls) => {
  if (answerEls.checked) {
   answer = answerEls.id;
  }
 });
 return answer;
}

btnSubmit.addEventListener("click", function () {
 const answers = getSelected();

 if (answers) {
  if (answers === quizData[currentQuiz].correct) {
   score++;
  }
  nextQuestion();
 }
});

// next Slide
function nextQuestion() {
 currentQuiz++;

 if (currentQuiz < quizData.length) {
  loadQuiz();
 } else {
  quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} question correctly</h2>
    <button type="button" onclick="location.reload()">Reload</button>
    `;
  footerEl.style.display = "none";
 }
}