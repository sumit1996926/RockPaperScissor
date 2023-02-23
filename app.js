const getChoice = document.querySelector(".userChoice");
const compChoice = document.querySelector(".computerChoice");
const getResult = document.querySelector(".result");
const refreshBtn = document.querySelector(".refresh");

getChoice.addEventListener("click", (e) => {
  if (e.target.id === "rock") {
    getChoice.innerHTML =
      '<img src="./images/rock.jpg" alt="" class="changed" id="rock" />';
  } else if (e.target.id === "paper") {
    getChoice.innerHTML =
      '<img src="./images/paper.jpg" alt="" class="changed" id="paper" />';
  } else {
    getChoice.innerHTML =
      '<img src="./images/scissors.jpg" alt="" class="changed" id="scissors"/>';
  }

  getComputerChoice();
  showResult();
});

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    compChoice.innerHTML =
      '<img src="./images/rock.jpg" alt="" class="changed" id="rock" />';
  } else if (randomNumber === 2) {
    compChoice.innerHTML =
      '<img src="./images/paper.jpg" alt="" class="changed" id="paper"  />';
  } else {
    compChoice.innerHTML =
      '<img src="./images/scissors.jpg" alt="" class="changed" id="scissors" />';
  }
}

function showResult() {
  if (
    compChoice.firstChild.attributes.id.value ===
    getChoice.firstChild.attributes.id.value
  ) {
    getResult.innerHTML = "<h3>Result  : Its a Draw!! </h3>";
  }
  if (
    compChoice.firstChild.attributes.id.value === "rock" &&
    getChoice.firstChild.attributes.id.value === "paper"
  ) {
    getResult.innerHTML = "<h3>Result  : You Won!! </h3>";
  }
  if (
    compChoice.firstChild.attributes.id.value === "rock" &&
    getChoice.firstChild.attributes.id.value === "scissors"
  ) {
    getResult.innerHTML = "<h3>Result  : You Lose!! </h3>";
  }
  if (
    compChoice.firstChild.attributes.id.value === "scissors" &&
    getChoice.firstChild.attributes.id.value === "rock"
  ) {
    getResult.innerHTML = "<h3>Result  : You Won!! </h3>";
  }
  if (
    compChoice.firstChild.attributes.id.value === "scissors" &&
    getChoice.firstChild.attributes.id.value === "paper"
  ) {
    getResult.innerHTML = "<h3>Result  : You Lose!! </h3>";
  }
  if (
    compChoice.firstChild.attributes.id.value === "paper" &&
    getChoice.firstChild.attributes.id.value === "scissors"
  ) {
    getResult.innerHTML = "<h3>Result  : You Won!! </h3>";
  }
  if (
    compChoice.firstChild.attributes.id.value === "paper" &&
    getChoice.firstChild.attributes.id.value === "rock"
  ) {
    getResult.innerHTML = "<h3>Result  : You Lose!! </h3>";
  }

  refreshBtn.innerHTML = "<button>Refresh</button>";
}

refreshBtn.addEventListener("click", reload);

function reload() {
  location.reload();
}
