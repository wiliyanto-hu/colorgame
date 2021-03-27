let boxCount = 6;
let colors = [];
let guess;
const colorsContainer = document.querySelector(".color-boxes");
const guessText = document.querySelector(".color-guess-text");
const guessContainer = document.querySelector(".color-guess");
const restart = document.querySelector(".btn-restart");
const menuBtn = document.querySelectorAll(".color-menu-btn");
const win = document.querySelector(".win");

init();
generateColorBoxes();

function genRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function init() {
  for (let i = 0; i < boxCount; i++) {
    const color = genRandomColor();
    colors.push(color);
  }
  guess = colors[Math.floor(Math.random() * colors.length)];
  guessText.textContent = guess.toUpperCase();
  guessContainer.style.backgroundColor = "rgb(219, 154, 13)";
  restart.textContent = "Restart";
  win.textContent = "";
}

function right() {
  const boxes = document.querySelectorAll(".color-box");
  boxes.forEach((box) => {
    box.style.backgroundColor = guess;
    box.style.opacity = 1;
  });
  guessContainer.style.backgroundColor = guess;
  win.textContent = "You Win";
  restart.textContent = "Play Again";
}

function generateColorBoxes() {
  for (let color of colors) {
    const box = document.createElement("div");
    box.style.backgroundColor = color;
    box.classList.add("color-box");
    box.addEventListener("click", () => {
      if (box.style.backgroundColor === guess) {
        right();
      } else {
        box.style.opacity = 0;
      }
    });
    colorsContainer.appendChild(box);
  }
}

function reset() {
  colors = [];
  const boxes = document.querySelectorAll(".color-box");
  for (box of boxes) {
    box.remove();
  }
  init(boxCount);
  generateColorBoxes();
}

restart.addEventListener("click", (e) => {});
for (let btn of menuBtn) {
  btn.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-restart")) {
      reset();
    } else if (e.target.classList.contains("btn-easy")) {
      boxCount = 3;
      reset();
    } else if (e.target.classList.contains("btn-hard")) {
      boxCount = 6;
      reset();
    }
  });
}
