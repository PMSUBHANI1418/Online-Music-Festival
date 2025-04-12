// Countdown to coachella
const targetDate = new Date("April 18, 2025 00:00:00").getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const gap = targetDate - now;

  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  const days = Math.floor(gap / day),
        hours = Math.floor((gap % day) / hour),
        minutes = Math.floor((gap % hour) / minute),
        seconds = Math.floor((gap % minute) / second);

  document.getElementById("days").innerText = days.toString().padStart(2, '0');
  document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
};

setInterval(updateCountdown, 1000);