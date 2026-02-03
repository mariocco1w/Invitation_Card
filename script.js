const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const main = document.getElementById("main");
const result = document.getElementById("result");
const song = document.getElementById("loveSong");
const countdownEl = document.getElementById("countdown");

let yesSize = 1.2;
let countdownInterval = null;


const dateOfTheDate = new Date("2026-02-14T18:00:00");

noBtn.addEventListener("click", () => {
  yesSize *= 1.3;
  yesBtn.style.fontSize = yesSize + "rem";
});

yesBtn.addEventListener("click", () => {
  main.classList.add("hidden");
  result.classList.remove("hidden");
  if (song) {
    song.volume = 0.4; // volumen suave
    song.play().catch(err => {
      console.warn("No se pudo reproducir el audio:", err);
    });
  }
  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);

});

function updateCountdown() {
  const now = new Date();
  const diff = dateOfTheDate - now;

  if (diff <= 0) {
    clearInterval(countdownInterval);
    countdownEl.textContent = "Ya es tiempo de empezar esta historia 💖";
    return;
  }
  

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent =
  `${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos`;
}
