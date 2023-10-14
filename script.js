// answers
const correctAnswers = ["B", "C", "A", "C", "B"];

// document grabbers
const form = document.querySelector(".quiz-form")
const resultDisplay = document.querySelector(".result")
const output = document.querySelector(".result-display")
const tryAgainBtn = document.querySelector(".try-again-btn")

// events
// submit button
form.addEventListener("submit", e => {
  e.preventDefault();

  // setup state
  let score = 0;

  // get answers from form
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

  // find score (100/5 = 20 per question)
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 20;
    }
  })

  // confirm click, set results to show, show score
  console.log("clicked the try again button!");

  // show the result display
  resultDisplay.style.display = "flex";

  // scroll up to the display & slow-set display
  scrollTo(0, 0);
  let pseudoScore = 0;
  const timer = setInterval(() => {
    output.textContent = `${pseudoScore}`;
    if (pseudoScore === score) {
      clearInterval(timer);
    } else {
      pseudoScore++;
    }
  }, 30)
})

// reset button
tryAgainBtn.addEventListener("click", e => {
  console.log("clicked the try again button!")
  e.preventDefault();

  resultDisplay.style.display = "none";
})
