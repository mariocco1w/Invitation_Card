const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const main = document.getElementById("main");
const result = document.getElementById("result");

let yesSize = 1.2;

noBtn.addEventListener("click", () => {
  yesSize *= 1.3;
  yesBtn.style.fontSize = yesSize + "rem";
});

yesBtn.addEventListener("click", () => {
  main.classList.add("hidden");
  result.classList.remove("hidden");
});
