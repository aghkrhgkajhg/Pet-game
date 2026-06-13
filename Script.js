let level = 1;
let xp = 0;
let happiness = 100;

function updateUI() {
  document.getElementById("level").innerText = level;
  document.getElementById("xp").innerText = xp;
  document.getElementById("happiness").innerText = happiness;

  let xpNeeded = level * 100;
  let percent = (xp / xpNeeded) * 100;

  document.getElementById("xpBar").style.width = percent + "%";
}

function feedPet() {
  xp += 20;
  happiness += 5;

  checkLevelUp();
  updateUI();
}

function playPet() {
  happiness += 10;
  updateUI();
}

function checkLevelUp() {
  let needed = level * 100;

  if (xp >= needed) {
    level++;
    xp = 0;
  }
}

updateUI();
