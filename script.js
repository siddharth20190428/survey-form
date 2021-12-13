import { questions } from "./questions.js";

const progressCont = document.querySelector(".progress-cont");

for (let i = 0; i < questions.length + 1; i++) {
  let item = document.createElement("div");
  item.classList.add("prog-item");
  progressCont.appendChild(item);
}
let answers = [];
let optionsForQues = [];

let currQuestion = 0;
let progItems = document.querySelectorAll(".prog-item");

const container = document.querySelector(".form-cont");
const ques = document.createElement("div");
let optionholder = document.createElement("div");

let slider = document.createElement("INPUT");

const next = document.querySelector("#next-btn");

slider.setAttribute("type", "range");
slider.setAttribute("min", "1");
slider.setAttribute("max", "10");

const createques = () => {
  if (currQuestion < questions.length) {
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
        optionLabel.innerHTML = `<p class="label-para">${element}</p>`;
        optionLabel.appendChild(option);
        optionLabel.classList.add("option-label");
        optionholder.appendChild(optionLabel);

        if (options.length) {
          next.removeEventListener("click", onNextClick);
        }
        option.addEventListener("change", () =>
          next.addEventListener("click", onNextClick)
        );

        optionsForQues.push(option);
      });
    } else {
      optionholder.classList.add("options");
      slider.classList.add("slider");

      optionholder.appendChild(slider);
      let val = slider.value;

      let silderval = document.createElement("span");
      silderval.innerHTML = val;
      optionholder.appendChild(silderval);
      optionsForQues.push(slider);

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

function onNextClick() {
  progItems[currQuestion].classList.add("dark-prog-item");

  container.innerHTML = "";
  optionholder.innerHTML = "";

  createques();

  currQuestion++;
}

next.addEventListener("click", onNextClick);
