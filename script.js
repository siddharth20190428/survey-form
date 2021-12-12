const questions = [
  {
    question: "",
    options: "",
  },
  {
    question: "What is your age",
    options: ["below 18", "18-25", "25-45", "45-65", "65+"],
  },

  {
    question: "What is your gender",
    options: ["Male", "Female", "Third Gender", "Not Prefer to say"],
  },

  {
    question: "Your occupation ",
    options: ["Employed", "Unemployed", "Studying", "HouseHold"],
  },

  {
    question:
      "Your ability to be flexible when faced with societal changes, or changes in your daily routine or environment, and to adopt new ways of living or working accordingly. Look at the scale below. Choose a number of stars between 1 and 10 which represents your adaptability to change.",
  },

  {
    question:
      "Your ability to think highly of yourself and demonstrate appropriate levels of confidence and self-belief Look at the scale below. Choose a number of stars between 1 and 10 which represents your self worth & confidence.",
  },

  {
    question:
      "Your imagination, artistic expression and your ability to generate novel ideas and find solutions to problems Look at the scale below. Choose a number of stars between 1 and 10 which represents your creativity & problem solving.",
  },

  {
    question:
      "Your ability to think highly of yourself and demonstrate appropriate levels of confidence and self-belief Look at the scale below. Choose a number of stars between 1 and 10 which represents your self worth & confiden",
  },

  {
    question:
      "Your ability and desire to initiate, persevere with and complete effortful tasks and activities Look at the scale below. Choose a number of stars between 1 and 10 which represents your drive & motivation ",
  },

  {
    question:
      "Your ability to approach situations consistently and calmly without uncontrolled emotion. Look at the scale below. Choose a number of stars between 1 and 10 which represents your stability & calmness.",
  },

  {
    question:
      "Your ability to easily fall asleep, stay asleep during the night and wake up feeling rested Look at the scale below. Choose a number of stars between 1 and 10 which represents your sleep quality.",
  },
];

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

createques = () => {
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
