const maxValue = 3;
let randomId;

function numberOfButtons() {
  const maxValue = document.getElementById('noOfButton').value;
  generateButtons(maxValue);
  randomId = getRandomNumber(maxValue);
  return (randomId);
}

function getRandomNumber(maxValue) {
  return Math.ceil(Math.random() * maxValue);
}

function getRandomInt() {
  const clickedButtonId = event.target.id;
  if (clickedButtonId == randomId.toString()) {
    document.getElementById(clickedButtonId).className = "btn-success";
    document.getElementById('rezult').innerHTML = "You win!";
  } else {
    document.getElementById(clickedButtonId).className = "btn-danger";
    document.getElementById('rezult').innerHTML = "Wrong choice! Try another.";
  }
}

function generateButtons(max) {
  for (let newId = 1; newId <= max; newId++) {
    let newBtn = document.createElement('button');
    newBtn.type = "button";
    newBtn.innerText = "Click me";
    newBtn.id = newId;
    newBtn.className = "btn-primary";
    newBtn.onclick = getRandomInt;
    document.querySelector('#button-container').appendChild(newBtn);
  }
}

function refreshPage(){
  window.location.reload();
} 