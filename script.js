const progressCont = document.querySelector(".progress-cont");

const questions = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < questions.length; i++) {
  let item = document.createElement("div");
  item.classList.add("prog-item");
  progressCont.appendChild(item);
}
let answers = [];

let currQuestion = 4;
let qNo = document.querySelector("#qNo");
let questionText = document.querySelector("#qText");

const nextBtn = document.querySelector(".next-btn");

let progItems = document.querySelectorAll(".prog-item");

nextBtn.addEventListener("click", () => {
  currQuestion++;
  progItems[currQuestion - 1].classList.add("dark-prog-item");
  qNo.innerHTML = currQuestion;
  qText.innerHTML = questions[currQuestion];
  console.log(currQuestion);
});
