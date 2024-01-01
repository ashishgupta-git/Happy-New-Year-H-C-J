const message = document.querySelector('.happy-new-year');

function glowMessage() {
  message.classList.toggle('glowing');
}

setInterval(glowMessage, 1000); // Glow effect every 1 second
