const countdown = document.getElementById("countdown");
const releaseDate = new Date("2025-07-31T00:00:00-04:00"); // EST midnight

function updateCountdown() {
  const now = new Date();
  const timeDiff = releaseDate - now;

  if (timeDiff <= 0) {
    countdown.innerText = "🎉 Out now!";
    return;
  }

  const hours = String(Math.floor((timeDiff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
  const minutes = String(Math.floor((timeDiff / (1000 * 60)) % 60)).padStart(2, '0');
  const seconds = String(Math.floor((timeDiff / 1000) % 60)).padStart(2, '0');

  countdown.innerText = `⏳ ${hours}:${minutes}:${seconds} until release`;
}

setInterval(updateCountdown, 1000);
updateCountdown(); // initial call