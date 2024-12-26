const questionNumber = document.querySelector("#question-number");
const questions = [
  {
    id: 1,
    question: "What is 25% of 80?",
    options: ["15", "20", "25", "30"],
    answer: "20",
    feedback: "Correct! 25% of 80 is 20.",
  },
  {
    id: 2,
    question: "Convert 5 inches to centimeters.",
    options: ["10.5", "12.7", "15.2", "17.8"],
    answer: "12.7",
    feedback: "Great job! Use inches×2.54 to convert to centimeters.",
  },
  {
    id: 3,
    question: "Find the area of a rectangle (5 cm by 10 cm)",
    options: ["25 cm²", "40 cm²", "50 cm²", "60 cm²"],
    answer: "50 cm²",
    feedback: "Good! Area is length×width",
  },
  {
    id: 4,
    question:
      "If a triangle has sides of 3 cm, 4 cm, and 5 cm, what type of triangle is it?",
    options: ["Scalene", "Equilateral", "Isosceles", "Right"],
    answer: "Right",
    feedback:
      "Correct! A triangle with sides 3, 4, and 5 satisfies the Pythagorean theorem, so it is a right triangle.",
  },
  {
    id: 5,
    question: "What is the value of 6x if x = 4?",
    options: ["18", "20", "24", "28"],
    answer: "24",
    feedback: "Good job! Substitute x=4 into 6x to get 6×4=24.",
  },
  {
    id: 6,
    question: "Which of these fractions is equivalent to 0.5?",
    options: ["1/2", "1/3", "2/5", "3/4"],
    answer: "1/2",
    feedback: "That's right! 0.5 is the decimal form of 1/2.",
  },
  {
    id: 7,
    question: "Solve for x: 3x - 7 = 11",
    options: ["4", "5", "6", "7"],
    answer: "6",
    feedback: "Correct! Adding 7 and dividing by 3 gives x=6.",
  },
  {
    id: 8,
    question: "What is the perimeter of a square with side length 8 cm?",
    options: ["16 cm", "24 cm", "32 cm", "64 cm"],
    answer: "32 cm",
    feedback:
      "Well done! The perimeter of a square is 4×side length, so 4×8=32 cm.",
  },
  {
    id: 9,
    question: "Which is larger: 3/4 or 4/5?",
    options: ["3/4", "4/5", "They are equal", "Cannot be determined"],
    answer: "4/5",
    feedback:
      "Good! Converting to decimals, 3/4=0.75 and 4/5=0.8, so 4/5 is larger.",
  },
  {
    id: 10,
    question: "If y = 2x and x = 5, what is the value of y?",
    options: ["5", "7", "10", "12"],
    answer: "10",
    feedback: "Great! Substituting x=5 into y=2x gives y=10.",
  },
  {
    id: 11,
    question:
      "What is the area of a circle with a radius of 7 cm? (Use π≈3.14)",
    options: ["154 cm²", "44 cm²", "21 cm²", "77 cm²"],
    answer: "154 cm²",
    feedback: "Correct! The area is πr², so 3.14×7²=154 cm².",
  },
  {
    id: 12,
    question: "What is the greatest common factor (GCF) of 18 and 24?",
    options: ["2", "3", "6", "12"],
    answer: "6",
    feedback: "That's right! The GCF of 18 and 24 is 6.",
  },
  {
    id: 13,
    question:
      "If a bag contains 5 red marbles and 10 blue marbles, what fraction of the marbles are red?",
    options: ["1/2", "1/3", "1/4", "2/3"],
    answer: "1/3",
    feedback:
      "Correct! There are 5 red marbles out of 15 total, so the fraction is 5/15=1/3.",
  },
];

console.log(questions.length);

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

function displayQuestion() {
  const question = questions[currentQuestion];
  questionNumber.innerHTML = questions[currentQuestion].id;
  console.log(questions[currentQuestion]);
  questionElement.textContent = question.question;
  optionsElement.innerHTML = "";

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "option";
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option));
    optionsElement.appendChild(button);
  });

  feedbackElement.style.display = "none";
  nextButton.style.display = "none";
}

function checkAnswer(selectedOption) {
  const question = questions[currentQuestion];
  const options = document.querySelectorAll(".option");

  options.forEach((option) => {
    option.disabled = true;
    if (option.textContent === question.answer) {
      option.classList.add("correct");
    } else if (option.textContent === selectedOption) {
      option.classList.add("incorrect");
    }
  });

  if (selectedOption === question.answer) {
    score++;
    scoreElement.textContent = score;
    feedbackElement.textContent = question.feedback;
    feedbackElement.className = "feedback correct";
  } else {
    feedbackElement.textContent = "Incorrect. Try again!";
    feedbackElement.className = "feedback incorrect";
  }

  feedbackElement.style.display = "block";
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    questionElement.textContent = `Quiz completed! Final score: ${score}/${questions.length}`;
    optionsElement.innerHTML = "";
    feedbackElement.style.display = "none";
    nextButton.style.display = "none";
  }
});

displayQuestion();
