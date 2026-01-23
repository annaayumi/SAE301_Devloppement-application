const game = document.getElementById("game");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");

const endScreen = document.getElementById("end");
const scoreFin = document.getElementById("score-fin");

let score = 0;
let running = true;
let timeLeft = 40;

// créer un lemming
function createLemming() {
  if (!running) return;

  const l = document.createElement("div");
  l.className = "lemming";

  l.style.left = Math.random() * 90 + "%";
  l.style.top = "0px";

  game.appendChild(l);

  let y = 0;

  const fall = setInterval(() => {
    y += 5;
    l.style.top = y + "px";

    if (y > window.innerHeight) {
      clearInterval(fall);
      l.remove();
    }
  }, 10);

  l.onmouseenter = () => {
    if (!running) return;

    clearInterval(fall);
    l.remove();

    score++;
    scoreEl.textContent = score;

    if (score >= 404) endGame();
  };
}

// fin du jeu
function endGame() {
  running = false;
  scoreFin.textContent = score;
  endScreen.classList.add("active");
}

// spawn régulier
setInterval(createLemming, 500);

// timer
const timer = setInterval(() => {
  if (!running) return;

  timeLeft--;
  timerEl.textContent = "Temps : " + timeLeft + "s";

  if (timeLeft <= 0) {
    clearInterval(timer);
    endGame();
  }
}, 1000);
