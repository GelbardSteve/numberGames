const imgSection = document.querySelectorAll(".img-section");
const win = document.querySelector(".win");
const playAgain = document.querySelector(".playAgain");

let flipped = false;
let locked = false;
let firstCard, secondCard;

let arr = [];

function flipCard() {
  if (locked) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!flipped) {
    flipped = true;
    firstCard = this;
  } else {
    flipped = false;
    secondCard = this;

    checkthematch();
  }
}

function checkthematch() {
  if (firstCard.dataset.card === secondCard.dataset.card) {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    arr.push(1);
    userWin();
  } else {
    locked = true;
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      locked = false;
    }, 1500);
  }
}

function userWin() {
  if (arr.length == 10) {
    win.style.display = "block";
  }
}

playAgain.addEventListener("click", () => {
  location.reload();
});

imgSection.forEach((img) => img.addEventListener("click", flipCard));
