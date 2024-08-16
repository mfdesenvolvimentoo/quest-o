import questions from "./perguntas.js";

const questionsContainer = document.querySelector(".questions-container");

function loadQuestions() {
  questions.forEach((item, index) => {
    const questionElement = document.createElement("div");
    questionElement.className = "question";

    const questionText = document.createElement("span");
    questionText.textContent = `${index + 1}. ${item.question}`;
    questionElement.appendChild(questionText);

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = "Imagem da questão";
    questionElement.appendChild(img);

    item.answers.forEach((answer) => {
      const answerElement = document.createElement("div");
      answerElement.className = "answer";
      answerElement.textContent = answer.option;
      if (answer.correct) {
        answerElement.classList.add("correct");
      } else {
        answerElement.classList.add("incorrect");
      }
      questionElement.appendChild(answerElement);
    });

    questionsContainer.appendChild(questionElement);
  });
}

loadQuestions();
