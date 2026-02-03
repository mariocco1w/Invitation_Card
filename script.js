const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const main = document.getElementById("main");
const result = document.getElementById("result");
const song = document.getElementById("loveSong");
const countdownEl = document.getElementById("countdown");


const dateOfTheDate = new Date("2026-02-14T18:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = dateOfTheDate - now;

  if (diff <= 0) {
    countdownEl.textContent = "Ya llegó el momento 💕";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  countdownEl.textContent =
    `${days} días, ${hours} horas y ${minutes} minutos`;
}

// solo empieza después del SÍ
yesBtn.addEventListener("click", () => {
  updateCountdown();
  setInterval(updateCountdown, 60000);
});

yesBtn.addEventListener("click", () => {
  main.classList.add("hidden");
  result.classList.remove("hidden");

  song.volume = 0.5; // suavecito
  song.play();
});


let yesSize = 1.2;

noBtn.addEventListener("click", () => {
  yesSize *= 1.3;
  yesBtn.style.fontSize = yesSize + "rem";
});

yesBtn.addEventListener("click", () => {
  main.classList.add("hidden");
  result.classList.remove("hidden");
});
