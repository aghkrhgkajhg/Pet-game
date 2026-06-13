let level = 1;
let xp = 0;
let happiness = 100;
let loyalty = 0;

function updateUI() {
  document.getElementById("level").innerText = level;
  document.getElementById("xp").innerText = xp;
  document.getElementById("happiness").innerText = happiness;
  document.getElementById("loyalty").innerText = loyalty;

  let needed = level * 100;
  let percent = (xp / needed) * 100;

  document.getElementById("xpBar").style.width = percent + "%";
}

function feedPet() {
  xp += 20;
  happiness += 5;
  loyalty += 1;

  if (happiness > 100) happiness = 100;

  levelUp();
  updateUI();
}

function playPet() {
  happiness += 10;
  loyalty += 2;

  if (happiness > 100) happiness = 100;

  updateUI();
}

function levelUp() {
  let needed = level * 100;

  if (xp >= needed) {
    level++;
    xp = 0;

    happiness += 10;
    loyalty += 5;
  }
}

updateUI();
