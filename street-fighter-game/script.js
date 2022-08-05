const punch = document.querySelector("#punch");
const result = document.querySelector("#result");
const chop = document.querySelector("#chop");
const sigh = document.querySelector("#sigh");
const heal = document.querySelector("#heal");
const victory = document.querySelector("#victory");
const ready_fight = document.querySelector("#ready-fight");
const start = document.querySelector("#start");
const reset = document.querySelector("#reset");
const p1h = document.querySelector("#p1h");
const p2h = document.querySelector("#p2h");
const sfx = [chop, sigh, punch];

class Player {
  constructor(hp) {
    this.hp = hp;
    this.canHeal = true;
    this.count = 0;
  }
  gotDamage = () => {
    if (this.hp > 0) {
      this.hp -= 10;
      updateHealth();
      playAudio();
    }
  };
  heal = () => {
    if (this.count <= 3) {
      if (this.hp >= 100) {
        return;
      }
      this.hp += 20;
      updateHealth();
      this.count++;
      if (this.hp > 100) {
        this.hp = 100;
      }
      heal.play();
    }
  };
}

class Game {
  constructor() {
    this.gameOver = true;
  }
  setStatus = (status) => {
    this.gameOver = status;
  };
}

const game = new Game();

const player1 = new Player(100);
const player2 = new Player(100);

const startGame = () => {
  if (game.gameOver) {
    result.innerHTML = "";
    game.setStatus(false);
    ready_fight.play();
    resetHP();
    updateHealth();
  }
};

start.onclick = startGame;

const updateHealth = (value) => {
  p1h.innerHTML = value || player1.hp;
  p2h.innerHTML = value || player2.hp;
};

const resetHP = () => {
  player1.hp = 100;
  player2.hp = 100;
  updateHealth("----");
};
reset.onclick = () => {
  resetHP();
  game.setStatus(true);
  result.innerHTML = "";
};

const playAudio = () => {
  sfx[Math.floor(Math.random() * 3)].play();
};

const checkStatus = () => {
  if (player1.hp <= 0 || player2.hp <= 0) {
    victory.play();
    player2.hp <= 0
      ? (result.innerHTML = "Player 1 is the winner")
      : (result.innerHTML = "Player 2 is the winner");
    game.setStatus(true);
    resetHP();
    return true;
  }
  return false;
};

const gameControls = (e) => {
  if (e.key == " " || e.key == "Enter") {
    startGame();
  }
  if (!game.gameOver) {
    if (!checkStatus()) {
      if (e.key.toLocaleLowerCase() == "q") {
        player2.gotDamage();
      }
      if (e.key.toLocaleLowerCase() == "w") {
        player1.heal();
      }
      if (e.key.toLocaleLowerCase() == "p") {
        player1.gotDamage();
      }
      if (e.key.toLocaleLowerCase() == "o") {
        player2.heal();
      }
    }
  }
};

document.onkeydown = gameControls;
