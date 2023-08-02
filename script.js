const max = 3;
let a;

function generate() {
  const max = document.getElementById('generate').value;
  generateButtons(max);
  randomizate(max);
}

function randomizate(max) {
  const min = 1;
  a = Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomInt() {
  const clickedButtonId = event.target.id;
  if (clickedButtonId == a.toString()) {
    document.getElementById(clickedButtonId).className = "btn-success";
    document.getElementById('rezult').innerHTML = "You win!";
  } else {
    document.getElementById(clickedButtonId).className = "btn-danger";
    document.getElementById('rezult').innerHTML = "Wrong choice! Try another.";
  }
}

function generateButtons(max) {
  for (let i = 1; i <= max; i++) {
    let newBtn = document.createElement('button');
    newBtn.type = "button";
    newBtn.innerText = "Click me";
    newBtn.id = i;
    newBtn.className = "btn-primary";
    newBtn.onclick = getRandomInt;
    document.querySelector('#button-container').appendChild(newBtn);
  }
}

function refreshPage(){
  window.location.reload();
} 