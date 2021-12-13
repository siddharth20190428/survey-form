import { questions } from "./questions.js";

const progressCont = document.querySelector(".progress-cont");

for (let i = 0; i < questions.length + 1; i++) {
  let item = document.createElement("div");
  item.classList.add("prog-item");
  progressCont.appendChild(item);
}
let answers = [];

let currQuestion = 0;
let progItems = document.querySelectorAll(".prog-item");

const container = document.querySelector(".form-cont");
const ques = document.createElement("div");
let optionholder = document.createElement("div");
const checkbox = document.createElement("span");

let slider = document.createElement("INPUT");

const next = document.querySelector(".next-btn");
const nextBtn = document.querySelector("button");

slider.setAttribute("type", "range");

const createques = () => {
  if (currQuestion <= questions.length - 1) {
    ques.classList.add("form-content");
    ques.innerText =
      [currQuestion + 1] + ". " + questions[currQuestion].question;

    if (currQuestion < 3) {
      optionholder.classList.add("options");

      let options = questions[currQuestion].options;

      options.map((element, opId) => {
        let option = document.createElement("input");
        let optionLabel = document.createElement("label");
        option.setAttribute("type", "radio");
        option.setAttribute("name", "option");
        option.setAttribute("value", element);
        option.setAttribute("id", `option-${opId}`);
        optionLabel.setAttribute("for", `option-${opId}`);
        optionLabel.innerText = element;
        optionLabel.appendChild(option);
        optionholder.appendChild(optionLabel);
      });
    } else {
      optionholder.classList.add("options");
      slider.classList.add("slider");
      slider.setAttribute("min", "1");
      slider.setAttribute("max", "10");

      optionholder.appendChild(slider);
      let val = slider.value;

      let silderval = document.createElement("span");
      silderval.innerHTML = val;
      optionholder.appendChild(silderval);

      slider.oninput = function () {
        silderval.innerHTML = this.value;
      };

      answers.push(val);
    }
    container.appendChild(ques);
    container.appendChild(optionholder);
  } else {
    container.innerHTML = "THANK YOU FOR YOUR RESPONSE";
    next.remove();
  }
};

next.addEventListener("click", () => {
  progItems[currQuestion].classList.add("dark-prog-item");

  let option = document.querySelectorAll("input");
  let options = questions[currQuestion].options;

  // for (var i = 0; i < option.length; i++) {
  //   if (option[i].checked) {
  //     nextBtn.disabled = false;
  //     console.log("button abled");
  //   } else {
  //     nextBtn.disabled = true;
  //     console.log("button disabled");
  //   }
  // }

  container.innerHTML = "";
  optionholder.innerHTML = "";

  createques();

  console.log("question number:", currQuestion);
  console.log("radio input", option);
  console.log("options ", options);
  currQuestion++;
});
