// Source: https://www.sitepoint.com/simple-javascript-quiz/
(function () {
  function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "1. Which of the following is the proper Syntax of a FUNCTION?",
      answers: {
        a: "function nameFunction() {};",
        b: "nameFunction()",
        c: "function = nameFunction(){}",
        d: "function (){};",
      },
      correctAnswer: "a",
    },
    {
      question: "2. This code: const votes = [10, 20, 30], is a?",
      answers: {
        a: "Object",
        b: "Array",
        c: "Function",
        d: "Console Log",
      },
      correctAnswer: "b",
    },
    {
      question: "3. This ${} represents what?",
      answers: {
        a: "Template Liberal",
        b: "Template Literal",
        c: "Camel Case",
        d: "Kamel Case",
      },
      correctAnswer: "b",
    },
    {
      question: "4. Async Defer goes where?",
      answers: {
        a: "Script Src",
        b: "Link Rel",
        c: "Div ID",
        d: "Button ID",
      },
      correctAnswer: "a",
    },
    {
      question: "5. The Quotations after the function() are _____ a parameter?",
      answers: {
        a: "Provided",
        b: "Pushed",
        c: "Plugged",
        d: "Passed",
      },
      correctAnswer: "d",
    },
    {
      question: "6. Which of the following is the right way to decrement?",
      answers: {
        a: "i++",
        b: "i+=",
        c: "i-+",
        d: "i--",
      },
      correctAnswer: "d",
    },
    {
      question: "7. MKDIR will do what in the Terminal?",
      answers: {
        a: "Move to a New Directory",
        b: "Create a New Directory",
        c: "Create a New Folder",
        d: "Manage the Known Database",
      },
      correctAnswer: "b",
    },
    {
      question: "8. Git Push does what to your Repository?",
      answers: {
        a: "Update with new Commits",
        b: "Changes File Location",
        c: "Creates new Github Key/Token",
        d: "Remotely accesses All Repositorys",
      },
      correctAnswer: "a",
    },
    {
      question: "9. GA Outcomes is a resource that...",
      answers: {
        a: "Guarentees Job Placement",
        b: "Hosts the GA Graduation Event",
        c: "Aid's Graduates in Job Search/Placement",
        d: "Selects the GA Cohort Students",
      },
      correctAnswer: "c",
    },
    {
      question: "6. Click the _________ to mark your attendence",
      answers: {
        a: "sei-outcomes Slack Channel",
        b: "Pull request",
        c: "Fork",
        d: "Red Chili Pepper",
      },
      correctAnswer: "d",
    },
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener("click", showResults);
})();
