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
        //creating a class to display questions
        `  <div class="question"> ${thisQuestion.question}</div>
           <div class="answer"> ${answerOptions.join("")} </div>`
      );
    });

    questionsContainer.innerHTML = questionGenerator.join("");
  }
  function displayThumbnail(questionPage) {
    thumbnail[questionPage].classList.add("active-thumbnail");
  }
  function playerAnswer() {
    const answerContainers = questionsContainer.querySelectorAll(".answer");
    let numCorrect = 0;

    gameQuestions.forEach((thisQuestion, questionNum) => {
      const answerContainer = answerContainer;
    });
  }

  //Question Framework in HTML (Container for questions, Buttons, Question/Answer Text)
  const questionsContainer = document.getElementById("Question-Panel");
  const submitButton = document.getElementById("submit");
  const contdownDisplay = document.getElementById("countdown");
  const playerStrikes = document.getElementById("strikes");
  const gameQuestions = [
    {
      question: "Which of the following is the proper Syntax of a FUNCTION?",
      answer: {
        A: "function nameFunction() {};",
        B: "nameFunction()",
        C: "function = nameFunction(){}",
        D: "function (){};",
      },
      rightAnswer: "A",
    },
    {
      question: "This code: const votes = [10, 20, 30], is a?",
      answer: {
        a: "Object",
        b: "Array",
        c: "Function",
        d: "Console Log",
      },
      rightAnswer: "b",
    },
    {
      question: "This ${} represents what?",
      answer: {
        A: "Template Liberal",
        B: "Template Literal",
        C: "Camel Case",
        D: "Kamel Case",
      },
      rightAnswer: "B",
    },
  ];
  submitButton.addEventListener("click", function (e) {
    console.log("submitButton");
  });

  questionPlayer();

  //Building Display Page
  const thumbnail = document.querySelectorAll(".thumbnail");
  let pageNow = 0;

  displayThumbnail(pageNow);

  // submitButton.addEventListener("click", playerAnswer);
})();
