formatSelect = document.getElementById("format");
toneSelect = document.getElementById("tones");
generateBtn = document.getElementById("generateBtn");
palette = document.getElementById("palette");

function randomGenerator(tone) {
  let min = 0;
  let max = 255;
  if (tone === "light") {
    min = 150;
  }
  if (tone === "dark") {
    max = 125;
  }

  const r = Math.floor(Math.random() * (max - min) + min);
  const g = Math.floor(Math.random() * (max - min) + min);
  const b = Math.floor(Math.random() * (max - min) + min);
  return { r, g, b };
}

function rgbtohex(r, g, b) {
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
}

function generate() {
  palette.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    const tone = toneSelect.value;
    const { r, g, b } = randomGenerator(tone);
    let color;
    if (formatSelect.value === "hex") {
      color = rgbtohex(r, g, b);
    } else {
      color = `rgb(${r}, ${g}, ${b})`;
    }
    const div = document.createElement("div");

    div.classList.add("color");

    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    div.textContent = color;

    palette.appendChild(div);
  }
}

generateBtn.addEventListener("click", generate);

generate();
