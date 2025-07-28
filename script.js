// Countdown to July 31, 2025 at 12:00am EST
const countdown = document.getElementById("countdown");

function updateCountdown() {
  const targetDate = new Date("2025-07-31T04:00:00Z"); // 12am EST
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdown.textContent = "“July Baby” is out now!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
