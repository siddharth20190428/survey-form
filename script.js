const questions = [
  {
    question: "",
    options: "",
  },
  {
    question: "1. What is your age",
    options: ["below 18", "18-25", "25-45", "45-65", "65+"],
  },

  {
    question: "2 What is your gender",
    options: ["Male", "Female", "Third Gender", "Not Prefer to say"],
  },

  {
    question: "3 Your occupation ",
    options: ["Employed", "Unemployed", "Studying", "HouseHold"],
  },

  {
    question:
      "4 Your ability to be flexible when faced with societal changes, or changes in your daily routine or environment, and to adopt new ways of living or working accordingly. Look at the scale below. Choose a number of stars between 1 and 9 which represents your adaptability to change.",
    options: "",
  },

  {
    question:
      "5 Your ability to think highly of yourself and demonstrate appropriate levels of confidence and self-belief Look at the scale below. Choose a number of stars between 1 and 9 which represents your self worth & confidence.",
  },

  {
    question:
      " 6 Your imagination, artistic expression and your ability to generate novel ideas and find solutions to problems Look at the scale below. Choose a number of stars between 1 and 9 which represents your creativity & problem solving.",
  },

  {
    question:
      "7 Your imagination, artistic expression and your ability to generate novel ideas and find solutions to problems Look at the scale below. Choose a number of stars between 1 and 9 which represents your creativity & problem solving. ",
  },

  {
    question:
      "8 Your ability and desire to initiate, persevere with and complete effortful tasks and activities Look at the scale below. Choose a number of stars between 1 and 9 which represents your drive & motivation ",
  },

  {
    question:
      "9 Your ability to approach situations consistently and calmly without uncontrolled emotion. Look at the scale below. Choose a number of stars between 1 and 9 which represents your stability & calmness.",
  },

  {
    question:
      "10 Your ability to easily fall asleep, stay asleep during the night and wake up feeling rested Look at the scale below. Choose a number of stars between 1 and 9 which represents your sleep quality.",
  },
];

const progressCont = document.querySelector(".progress-cont");

// const questions = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < questions.length; i++) {
  let item = document.createElement("div");
  item.classList.add("prog-item");
  progressCont.appendChild(item);
}
// let answers = [];

let currQuestion = 0;
let progItems = document.querySelectorAll(".prog-item");
const container = document.querySelector(".form-cont");
const ques = document.createElement("div");
let optionholder = document.createElement("div");
const checkbox = document.createElement("span");
const input = document.createElement("INPUT");
let slider = document.createElement("INPUT");
const next = document.createElement("button");
next.innerHTML = "Next";

slider.setAttribute("type", "range");
input.setAttribute("type", "radio");

console.log(questions.length);

createques = () => {
  if (currQuestion <= questions.length - 1) {
    ques.classList.add(".form-content");
    ques.innerHTML = questions[currQuestion].question;

    if (currQuestion <= 3) {
      optionholder.classList.add("options");

      let options = questions[currQuestion].options;

      options.forEach((element) => {
        let option = document.createElement("span");
        option.innerText = element;

        optionholder.appendChild(option);
      });
    } else {
      optionholder.classList.add("options");
      optionholder.appendChild(slider);
    }
    container.appendChild(ques);
    container.appendChild(optionholder);
  } else {
    container.innerHTML = "THANK YOU FOR YOUR RESPONSE";
  }
};

next.classList.add("next-btn");
next.addEventListener("click", () => {
  currQuestion++;
  progItems[currQuestion - 1].classList.add("dark-prog-item");

  container.innerHTML = "";
  optionholder.innerHTML = "";
  createques();
  container.appendChild(next);
});

container.appendChild(next);
