let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-Quiz");
const TimerEl = document.getElementById("Timer");
let questionCount;
let scoreCount = 0;
let count = 60;
let countdown;
var c = 45

const quizArray = [
    {
      id: "1",
      question: "Who had the most console sales for the year 2021?", options:["Xbox","Playstation","Nintendo Switch","PC"], correct:"Playstation"
    },
    {
      id: "2",
   question:"What is the best gaming headset" ,
   options:["Astro","Turtle Beaches","Hyperx","Razer"], correct:"Astro"
  },
  {
      id: "3",
   question:"Who is the strongest Marvel hero?" ,
   options:["Thor", "Hulk","Iron Man","Wanda"], correct:"Wanda",
  },
  {
      id: "4",
   question:"Which phone is better?" ,
   options:["Iphone", "Galaxy","HTC","LG"], correct:"Iphone",
  },
  ];
  
  restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
  });
  
  nextBtn.addEventListener(
        "click",
        (displayNext = () => {
    
        questionCount += 1;
  
      if (questionCount == quizArray.length) {

        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
  
        userScore.innerHTML =
            "You scored  " + scoreCount + " out of " + questionCount;
      } else {
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";
  