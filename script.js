
const symbols = ["💖", "✨", "💕", "⭐", "🎈"];

function createFloatingSymbol() {
  const item = document.createElement("span");

  item.className = "heart";
  item.textContent =
    symbols[Math.floor(Math.random() * symbols.length)];

  item.style.left = Math.random() * 100 + "vw";
  item.style.fontSize = (16 + Math.random() * 18) + "px";
  item.style.animationDuration = (5 + Math.random() * 5) + "s";

  document.body.appendChild(item);

  setTimeout(() => {
    item.remove();
  }, 10000);
}

setInterval(createFloatingSymbol, 500);
