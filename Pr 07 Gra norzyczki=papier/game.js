
const gameSummary = {
  number: 0,
  wins: 0,
  losses: 0,
  remis: 0,
};

game = {
  playerHand: "",
  aiHand: "",
};

const hands = [...document.querySelectorAll(".select img")];

function handSelection() {
  game.playerHand = this.dataset.option;
  hands.forEach((hand) => (hand.style.boxShadow = ""));
  this.style.boxShadow = "0 0 0 4px yellow";
  //   const choise = this.data.options;
}

function aiHand() {
  return hands[Math.floor(Math.random() * hands.length)].dataset.option;
}

function checkResult(player, ai) {
  if (player === ai) {
    return "remis";
  } else if (
    (player === "papier" && ai === "kamień") ||
    (player === "kamień" && ai === "nożyczki") ||
    (player === "nożyczki" && ai === "papier")
  ) {
    return "win";
  } else {
    return "lost";
  }
}

function resultGame(player, ai, result) {
  document.querySelector(".numbers span").textContent = ++gameSummary.number;
  document.querySelector('[data-summary="your-choice"]').textContent = player;
  document.querySelector('[data-summary="ai-choice"]').textContent = ai;
  let whoWin = document.querySelector('[data-summary="who-win"]');
  if (result === "remis") {
    whoWin.textContent = "remis :\\";
    whoWin.style.color = "grey";
    document.querySelector(".draws span").textContent = ++gameSummary.remis;
  } else if (result === "win") {
    whoWin.textContent = "Ty wygrałeś";
    whoWin.style.color = "green";
    document.querySelector(".wins span").textContent = ++gameSummary.wins;
  } else {
    whoWin.textContent = "Wygrała ai";
    whoWin.style.color = "red";
    document.querySelector(".losses span").textContent = ++gameSummary.losses;
  }
}

function endGame() {
  document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow =
    "";
  game.playerHand = "";
}
function letsPlay() {
  if (game.playerHand === "") {
    alert("choose a hand");
    return;
  }
  game.aiHand = aiHand();
  const gameResult = checkResult(game.playerHand, game.aiHand);
  resultGame(game.playerHand, game.aiHand, gameResult);
  console.log(game.playerHand, game.aiHand, gameResult);
  endGame(game.playerHand);
}

hands.forEach((hand) => hand.addEventListener("click", handSelection));
document.querySelector(".start").addEventListener("click", letsPlay);
