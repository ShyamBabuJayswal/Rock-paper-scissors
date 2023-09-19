const handOptions = {
  "rock": "/assets/Rock.png",
  "paper": "/assets/Paper.png",
  "scissors": "/assets/Scissors.png"
}

function resetScores() {
  USERSCORE = 0;
  PCSCORE = 0;
  localStorage.setItem("USERSCORE", USERSCORE);
  localStorage.setItem("PCSCORE", PCSCORE);
  document.querySelector(".computerScore h1").innerText = PCSCORE;
  document.querySelector(".userScore h1").innerText = USERSCORE;
}

let USERSCORE = parseInt(localStorage.getItem("USERSCORE")) || 0;
let PCSCORE = parseInt(localStorage.getItem("PCSCORE")) || 0;

if (shouldResetScores()) {
  resetScores();
}

function shouldResetScores() {
  return true;
}

const pickUserHand = (hand) => {
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  document.getElementById("userPickImage").src = handOptions[hand];

  pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
  let hands = ["rock", "paper", "scissors"];
  let cpHand = hands[Math.floor(Math.random() * hands.length)];

  document.getElementById("computerPickImage").src = handOptions[cpHand];

  referee(hand, cpHand);
};

const referee = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissors") {
    setDecision("YOU LOST AGAINST PC");
    setScore(USERSCORE, PCSCORE + 1);
  }
  if (userHand == "paper" && cpHand == "rock") {
    setDecision("YOU WIN AGAINST PC");
    setScore(USERSCORE + 1, PCSCORE);
  }
  if (userHand == "paper" && cpHand == "paper") {
    setDecision("TIE UP");
  }
  if (userHand == "rock" && cpHand == "scissors") {
    setDecision("YOU WIN AGAINST PC");
    setScore(USERSCORE + 1, PCSCORE);
  }
  if (userHand == "rock" && cpHand == "paper") {
    setDecision("YOU LOST AGAINST PC");
    setScore(USERSCORE, PCSCORE + 1);
  }
  if (userHand == "rock" && cpHand == "rock") {
    setDecision("TIE UP");
  }
  if (userHand == "scissors" && cpHand == "scissors") {
    setDecision("TIE UP");
  }
  if (userHand == "scissors" && cpHand == "rock") {
    setDecision("YOU LOST AGAINST PC");
    setScore(USERSCORE, PCSCORE + 1);
  }
  if (userHand == "scissors" && cpHand == "paper") {
    setDecision("YOU WIN AGAINST PC");
    setScore(USERSCORE + 1, PCSCORE);
  }
};

const restartGame = () => {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let hands = document.querySelector(".hands");
  hands.style.display = "flex";
}

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
}

const setScore = (newUserScore, newPCScore) => {
  USERSCORE = newUserScore;
  PCSCORE = newPCScore;

  document.querySelector(".computerScore h1").innerText = PCSCORE;
  document.querySelector(".userScore h1").innerText = USERSCORE;

  localStorage.setItem("USERSCORE", USERSCORE);
  localStorage.setItem("PCSCORE", PCSCORE);
}

document.querySelector(".computerScore h1").innerText = PCSCORE;
document.querySelector(".userScore h1").innerText = USERSCORE;

document.getElementById('next-btn').addEventListener('click', function () {
  document.querySelector('.wrapper').style.display = 'none';
  document.querySelector('.buttons').style.display = 'none';
  document.querySelector('.wongame').style.display = 'block';
});

function playAgain() {
  document.querySelector('.wongame').style.display = 'none';
  document.querySelector('.wrapper').style.display = 'block';
  document.querySelector('.buttons').style.display = 'block';
}

const rulesButtons = document.querySelectorAll(".rules-btn");
const rulesModal = document.querySelector("#rules-modal");
const closeRulesButton = document.querySelector("#close");

rulesButtons.forEach((button) => {
  button.addEventListener("click", () => {
    rulesModal.classList.remove("hidden");
  });
});

closeRulesButton.addEventListener("click", () => {
  rulesModal.classList.add("hidden");
});