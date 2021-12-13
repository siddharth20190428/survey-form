import { questions } from "./questions.js";

const progressCont = document.querySelector(".progress-cont");

for (let i = 0; i < questions.length; i++) {
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

slider.setAttribute("type", "range");

const createques = () => {
  if (currQuestion <= questions.length - 1) {
    ques.classList.add("form-content");
    ques.innerText = [currQuestion] + ". " + questions[currQuestion].question;

    if (currQuestion <= 3) {
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

        // optionholder.appendChild(option);
        optionholder.appendChild(optionLabel);
      });

      console.log(options);
      console.log("length of option", options.length);

      // for (var i = 0; i < options.length - 1; i++) {
      //   if (options[i].checked) {
      //     // get value, set checked flag or do whatever you need to
      //     value = options[i].value;
      //     next.disabled = false;
      //     console.log(value);
      //     console.log("button not disabled");
      //   } else {
      //     next.disabled = true;
      //     // alert("Please select an option");
      //     console.log("button disabled");
      //   }
      // }
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

  container.innerHTML = "";
  optionholder.innerHTML = "";

  currQuestion++;
  createques();
});
