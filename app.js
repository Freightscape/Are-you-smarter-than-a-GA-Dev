// Building out the Quiz starting with containers
//Grabbing my QuizPannel, Submit Button, & Final Score from HTML

const questionsContainer = document.getElementById("Question-Panel");
const submitButton = document.getElementById("submit");
const contdownDisplay = document.getElementById("countdown");
const playerStrikes = document.getElementById("strikes");

function questionPlayer() {
  const questionGenerator = []; //This will store all of my HTML Output

  gameQuestions.forEach(
    //This will happen for each question
    (thisQuestion, questionNum) => {
      const answerOptions = []; //This will store all of the possible answes

      for (letter in thisQuestion.answerOptions) {
      }
    }
  );
}

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
  {
    question: "Asked That?",
    answer: {
      A: "First Choice",
      B: "Second Choice",
      C: "Third Choice",
      D: "Fourth Choice",
    },
    rightAnswer: "C",
  },
  {
    question: "Asked Again?",
    answer: {
      A: "First Choice",
      B: "Second Choice",
      C: "Third Choice",
      D: "Fourth Choice",
    },
    rightAnswer: "D",
  },
];
