const sentence =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus vitae provident asperiores, mollitia obcaecati modi.";
let p = document.querySelector(".text");
let add = document.querySelector("button");
let input = document.querySelector(".input-text");
let startButton = document.querySelector(".startButton");
let restarButton = document.querySelector(".restartButton");
let timeRemaining = 45;
p.append(sentence);
var text = p.innerText;
var letterIndex = 0;
let countDown;
const timerElement = document.getElementById("timer");

input.disabled = true;
input.setAttribute("maxlength", text.length);
input.addEventListener("keydown", function (event) {
  if (event.key === "Backspace") {
    playcolor(event.key);
  }
});

input.addEventListener("input", function (event) {
  if (check()) {
    input.style.color = "black";
    playcolor(event.key);
  } else {
    input.style.color = "red";
  }
});

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if (text == input.value) {
      input.disabled = true;
      clearInterval(countDown);
      timerElement.textContent = "You Win !";
    }
  }
});

startButton.addEventListener("click", function () {
  updateTimer();
  countDown = setInterval(updateTimer, 1000);
  timerElement.style.display = "block";
  input.disabled = false;
  input.focus();
  this.remove();
});

restarButton.addEventListener("click", function () {
  restarButton.style.display = "none";
  letterIndex = 0;
  timerElement.style.display = "block";
  input.value = "";
  input.disabled = false;
  input.focus();
  p.innerHTML = p.innerText.substring();
  timeRemaining = 40;
  updateTimer();
  countDown = setInterval(updateTimer, 1000);
});

function playcolor(event) {
  if (event === "Backspace") {
    if (letterIndex > 0) {
      letterIndex--;
      var newText =
        '<span class="changeC">' +
        text.substring(0, letterIndex) +
        "</span>" +
        text.substring(letterIndex);
      p.innerHTML = newText;
    }
  } else {
    if (letterIndex < text.length) {
      letterIndex++;
      var newText =
        '<span class="changeC">' +
        text.substring(0, letterIndex) +
        "</span>" +
        text.substring(letterIndex);
      p.innerHTML = newText;
    }
  }
}

function check() {
  return text.charAt(letterIndex) == input.value.charAt(letterIndex);
}

function updateTimer() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  timerElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  timeRemaining--;

  if (timeRemaining < 0) {
    input.disabled = true;
    clearInterval(countDown);
    timerElement.textContent = `Time's up! You Lose.`;
    restarButton.style.display = "block";
  }
}

input.onpaste = function () {
  return false;
};
