import { questions } from "./questions.js";

function setAttrs(element, attrs) {
  attrs.forEach((attr) => element.setAttribute(attr[0], attr[1]));
}

// form progress
const progressCont = document.querySelector(".progress-cont");
let progItems = document.querySelectorAll(".prog-item");

for (let i = 0; i < questions.length + 1; i++) {
  let item = document.createElement("div");
  item.classList.add("prog-item");
  progressCont.appendChild(item);
}

let answers = [];
let currQuestion = 0;

// question and options container
const container = document.querySelector(".form-cont");
const ques = document.createElement("div");
let optionholder = document.createElement("div");

let slider = document.createElement("INPUT");
setAttrs(slider, [
  ["class", "slider"],
  ["type", "range"],
  ["min", "1"],
  ["max", "10"],
]);

const next = document.querySelector("#next-btn");

const createques = () => {
  if (currQuestion < questions.length) {
    ques.classList.add("form-content");
    ques.innerText =
      [currQuestion + 1] + ". " + questions[currQuestion].question;
    optionholder.classList.add("options");

    if (currQuestion < 3) {
      // for questions having radio buttons
      let options = questions[currQuestion].options;

      options.map((element, opId) => {
        // creating input for option
        let option = document.createElement("input");
        setAttrs(option, [
          ["type", "radio"],
          ["name", "option"],
          ["value", element],
          ["id", `option-${opId}`],
        ]);

        // creating label for option input
        let optionLabel = document.createElement("label");
        optionLabel.setAttribute("for", `option-${opId}`);
        // adding text for option
        optionLabel.innerHTML = `<p class="label-para">${element}</p>`;
        optionLabel.appendChild(option);
        optionLabel.classList.add("option-label");

        optionholder.appendChild(optionLabel);

        // the next button is disabled till the user selects any option
        if (options.length) {
          next.removeEventListener("click", onNextClick);
        }
        option.addEventListener("change", () =>
          next.addEventListener("click", onNextClick)
        );
      });
    } else {
      optionholder.appendChild(slider);

      // getting the value which user selects in slider
      let val = slider.value;
      let silderval = document.createElement("span");
      silderval.innerHTML = val;
      optionholder.appendChild(silderval);

      slider.oninput = function () {
        silderval.innerHTML = this.value;
      };

      answers.push(val);
    }
    // pushing the question and options in the form container
    container.appendChild(ques);
    container.appendChild(optionholder);
  } else {
    // end of the questions
    container.innerHTML = "THANK YOU FOR YOUR RESPONSE";
    next.remove();
  }
};

function onNextClick() {
  // setting progress bar
  progItems[currQuestion].classList.add("dark-prog-item");

  // reset the containers
  container.innerHTML = "";
  optionholder.innerHTML = "";

  createques();

  currQuestion++;
}

next.addEventListener("click", onNextClick);
