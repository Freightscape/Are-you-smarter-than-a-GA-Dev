// Building out the Quiz starting with containers
//Grabbing my QuizPannel, Submit Button, & Final Score from HTML

const questionsContainer = document.getElementById("Question-Panel");
const submitButton = document.getElementById("submit");
const contdownDisplay = document.getElementById("countdown");
const playerStrikes = document.getElementById("strikes");

function questionPlayer() {}

questionPlayer();

const gameQuestions = [
  {
    question: "Asked This?",
    answer: {
      A: "First Choice",
      B: "Second Choice",
      C: "Third Choice",
      D: "Fourth Choice",
    },
    rightAnswer: "B",
  },
];
