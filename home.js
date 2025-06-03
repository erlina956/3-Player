let player1Choice = "";
let player2Choice = "";
let player3Choice = "";

const player1Section = document.getElementById("player1");
const player2Section = document.getElementById("player2");
const player3Section = document.getElementById("player3");
const resultText = document.getElementById("result-text");

const choices = document.querySelectorAll(".choice");

const getResult = (p1, p2, p3) => {
  if (p1 === p2 && p2 === p3) return "It's a Draw!";
  if (
    (p1 === "rock" && p2 === "scissors" && p3 === "scissors") ||
    (p1 === "paper" && p2 === "rock" && p3 === "rock") ||
    (p1 === "scissors" && p2 === "paper" && p3 === "paper")
  ) return "Player 1 Wins!";
  if (
    (p2 === "rock" && p1 === "scissors" && p3 === "scissors") ||
    (p2 === "paper" && p1 === "rock" && p3 === "rock") ||
    (p2 === "scissors" && p1 === "paper" && p3 === "paper")
  ) return "Player 2 Wins!";
  if (
    (p3 === "rock" && p1 === "scissors" && p2 === "scissors") ||
    (p3 === "paper" && p1 === "rock" && p2 === "rock") ||
    (p3 === "scissors" && p1 === "paper" && p2 === "paper")
  ) return "Player 3 Wins!";
  return "It's a Draw!";
};

choices.forEach(button => {
  button.addEventListener("click", () => {
    const player = button.getAttribute("data-player");
    const choice = button.getAttribute("data-choice");

    if (player === "1") {
      player1Choice = choice;
      player1Section.classList.add("hidden");
      player2Section.classList.remove("hidden");
      resultText.textContent = "Player 2, it's your turn!";
    } else if (player === "2") {
      player2Choice = choice;
      player2Section.classList.add("hidden");
      player3Section.classList.remove("hidden");
      resultText.textContent = "Player 3, it's your turn!";
    } else {
      player3Choice = choice;
      player3Section.classList.add("hidden");

      const result = getResult(player1Choice, player2Choice, player3Choice);
      resultText.textContent = `${result} (Player 1 chose ${player1Choice}, Player 2 chose ${player2Choice}, Player 3 chose ${player3Choice})`;

      player1Choice = "";
      player2Choice = "";
      player3Choice = "";

      setTimeout(() => {
        player1Section.classList.remove("hidden");
        player2Section.classList.add("hidden");
        player3Section.classList.add("hidden");
        resultText.textContent = "Player 1, make your move.";
      }, 4000);
    }
  });
});
