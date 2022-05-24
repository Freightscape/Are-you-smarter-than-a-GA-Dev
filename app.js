// Building out the Quiz starting with containers
//Grabbing my QuizPannel, Submit Button, & Final Score from HTML
(function () {
  function questionPlayer() {
    const questionGenerator = []; //This will store all of my HTML Output

    gameQuestions.forEach((thisQuestion, questionNum) => {
      //This will happen for each question
      const answerOptions = []; //This will store all of the possible answes

      for (letter in thisQuestion.answer) {
        answerOptions.push(
          //adding a radio button to the HTML page via Label
          `<label>
                <input type="radio" name="question${questionNum}" value="${letter}">
                ${letter} :
                ${thisQuestion.answer[letter]}    
            </label>`
        );
      }

      questionGenerator.push(
        `<div class="question"> ${thisQuestion.question}</div>
            <div class="answer"> ${answerOptions.join("")} </div>`
      );
    });

    questionsContainer.innerHTML = questionGenerator.join("");
  }
  function showQuestion(x) {}
  function playerAnswer() {}

  //Question Framework in HTML (Container for questions, Buttons, Question/Answer Text)
  const questionsContainer = document.getElementById("Question-Panel");
  const submitButton = document.getElementById("submit");
  const contdownDisplay = document.getElementById("countdown");
  const playerStrikes = document.getElementById("strikes");
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

  questionPlayer();

  submitButton.addEventListener("click", playerAnswer);
});
