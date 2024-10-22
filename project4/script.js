const questions = [
  {
      question: "What is the capital of France?",
      answers: [
          { text: "Berlin", correct: false },
          { text: "Madrid", correct: false },
          { text: "Paris", correct: true },
          { text: "Rome", correct: false }
      ]
  },
  {
      question: "What is 2 + 2?",
      answers: [
          { text: "3", correct: false },
          { text: "4", correct: true },
          { text: "5", correct: false },
          { text: "6", correct: false }
      ]
  },
  {
      question: "Which planet is known as the Red Planet?",
      answers: [
          { text: "Earth", correct: false },
          { text: "Mars", correct: true },
          { text: "Jupiter", correct: false },
          { text: "Saturn", correct: false }
      ]
  },
  {
      question: "What is the largest ocean on Earth?",
      answers: [
          { text: "Atlantic Ocean", correct: false },
          { text: "Indian Ocean", correct: false },
          { text: "Arctic Ocean", correct: false },
          { text: "Pacific Ocean", correct: true }
      ]
  },
  {
      question: "Who wrote 'Hamlet'?",
      answers: [
          { text: "Charles Dickens", correct: false },
          { text: "Mark Twain", correct: false },
          { text: "William Shakespeare", correct: true },
          { text: "Jane Austen", correct: false }
      ]
  },
  {
      question: "What is the boiling point of water?",
      answers: [
          { text: "90°C", correct: false },
          { text: "100°C", correct: true },
          { text: "80°C", correct: false },
          { text: "120°C", correct: false }
      ]
  },
  {
      question: "Which element has the chemical symbol 'O'?",
      answers: [
          { text: "Gold", correct: false },
          { text: "Oxygen", correct: true },
          { text: "Osmium", correct: false },
          { text: "Iron", correct: false }
      ]
  },
  {
      question: "What is the largest continent by area?",
      answers: [
          { text: "Africa", correct: false },
          { text: "Asia", correct: true },
          { text: "Europe", correct: false },
          { text: "Antarctica", correct: false }
      ]
  },
  {
      question: "Who painted the Mona Lisa?",
      answers: [
          { text: "Vincent van Gogh", correct: false },
          { text: "Pablo Picasso", correct: false },
          { text: "Leonardo da Vinci", correct: true },
          { text: "Claude Monet", correct: false }
      ]
  },
  {
      question: "What is the hardest natural substance on Earth?",
      answers: [
          { text: "Gold", correct: false },
          { text: "Diamond", correct: true },
          { text: "Iron", correct: false },
          { text: "Quartz", correct: false }
      ]
  },
  {
      question: "What is the main ingredient in guacamole?",
      answers: [
          { text: "Tomato", correct: false },
          { text: "Avocado", correct: true },
          { text: "Pepper", correct: false },
          { text: "Onion", correct: false }
      ]
  },
  {
      question: "Which gas do plants absorb from the atmosphere?",
      answers: [
          { text: "Oxygen", correct: false },
          { text: "Carbon Dioxide", correct: true },
          { text: "Nitrogen", correct: false },
          { text: "Helium", correct: false }
      ]
  },
  {
      question: "What is the capital city of Japan?",
      answers: [
          { text: "Tokyo", correct: true },
          { text: "Osaka", correct: false },
          { text: "Kyoto", correct: false },
          { text: "Hiroshima", correct: false }
      ]
  },
  {
      question: "How many continents are there?",
      answers: [
          { text: "5", correct: false },
          { text: "6", correct: false },
          { text: "7", correct: true },
          { text: "8", correct: false }
      ]
  },
  {
      question: "What is the chemical formula for table salt?",
      answers: [
          { text: "H2O", correct: false },
          { text: "NaCl", correct: true },
          { text: "CO2", correct: false },
          { text: "C6H12O6", correct: false }
      ]
  },
  {
      question: "Which planet is closest to the Sun?",
      answers: [
          { text: "Venus", correct: false },
          { text: "Earth", correct: false },
          { text: "Mercury", correct: true },
          { text: "Mars", correct: false }
      ]
  },
  {
      question: "What is the smallest prime number?",
      answers: [
          { text: "0", correct: false },
          { text: "1", correct: false },
          { text: "2", correct: true },
          { text: "3", correct: false }
      ]
  }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer =>{
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer)
  })
}

function resetState(){
  nextButton.style.display = "none";
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }
  else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach(button => {
    if (button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`; 
  nextButton.innerHTML = "Play again";
  nextButton.style.display = "block";
}

function handleNextButton (){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
      showQuestion();
  }
  else {
    showScore();
  }
}

nextButton.addEventListener ("click", ()=> {
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }
  else {
    startQuiz();
  }
})

startQuiz();