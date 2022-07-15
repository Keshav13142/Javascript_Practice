const choice = document.querySelectorAll(".button");
const reset = document.querySelector("#reset");
const score = document.querySelector("#score");
const action = document.querySelector("#action");
const res = document.querySelector("#res");

const arr = ["rock", "paper", "scissor"];
var player_total = 0;
var comp_total = 0;

const calculate = (e) => {
  const sel = e.target.value;
  const value = arr[Math.floor(Math.random() * arr.length)];
  action.innerHTML = `${sel} vs ${value}`;
  if (sel === value) disp("It's a tie", "tie");
  else if (
    (sel === "rock" && value === "scissor") ||
    (sel === "scissor" && value === "paper") ||
    (sel === "paper" && value === "rock")
  ) {
    player_total++;
    disp("You Win!!", "win");
  } else {
    comp_total++;
    disp("Try Again!!", "lose");
  }
};

const disp = (message, cls) => {
  res.innerHTML = message;
  res.classList = null;
  res.classList.add(cls);
  score.innerHTML = `🧑 : ${player_total}  &nbsp;&nbsp;&nbsp;&nbsp; 🤖 : ${comp_total}`;
};

const reset_all = () => {
  player_total = 0;
  comp_total = 0;
  score.innerHTML = "";
  action.innerHTML = "";
  res.innerHTML = "";
};

choice.forEach((ch) => (ch.onclick = calculate));
reset.onclick = reset_all;
