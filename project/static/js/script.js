// Challenge #1: Your Age in Days
function ageInDaysClick() {
  let birthYear = prompt("What Year Was you Born?");
  let ageInDays = (2020 - birthYear) * 365;
  let h1 = document.createElement("h1");
  let textAnswer = document.createTextNode(
    "You are " + ageInDays + " days old"
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
  console.log(ageInDays);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

// Challenge 2: Cat generator
function generateCat() {
  let image = document.createElement("img");
  let div = document.getElementById("flex-cat-gen");
  image.src =
    "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
  div.appendChild(image);
}

// Challenge 3: Rock, papper, scissors

/* function rpsGame(yourChoice) {
  console.log(yourChoice);
  let humanChoice, botChoice;
  humanChoice = yourChoice.id;

  botChoice = numToChoice(randomToRpsInt());
  console.log("Computer Choice", botChoice);

  results = decideWinner(humanChoice, botChoice);
  console.log(results);

  message = finalMessage(results); // {message: 'You Won!', 'color': 'green'}
  console.log(message);

  rpsFrontEnd(yourChoice.id, botChoice.id, message);
}

function randomToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numToChoice(number) {
  return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, computerChoice) {
  let rpsDatabase = {
    'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
    'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
    'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
  };

  let yourScore = rpsDatabase[yourChoice][computerChoice];
  let computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { message: "You lost!", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "You Tied!", color: "yellow" };
  } else {
    return { message: "You Won!", color: "green" };
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  let imagesDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src
  };

  // Remove images after click
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  let humanDiv = document.createElement("div");
  let botDiv = document.createElement("div");
  let messageDiv = document.createElement("div");

  humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'>";

  document.getElementById("flex-box-rps-div").appendChild(humanDiv);
} */


//Challenge 3: Re-try 

function rpsGame(yourChoice) {
  //console.log(yourChoice);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;

  botChoice = numberToChoice(randToRpsInt());
  console.log('computer choice', botChoice);

  results = decideWinner(humanChoice, botChoice); // [0,1] human lost , bot won
  console.log(results);

  message = finalMessage(results); // "you won!"
  console.log(message);

  rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
    'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
    'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 },
  }

  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { 'message': 'You Lost!', 'color': 'red' };
  } else if (yourScore === 0.5) {
    return { 'message': 'You tied!', 'color': 'yellow' };
  } else {
    return { 'message': 'You won!', 'color': 'green' };
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  var imagesDatabase = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src
  }

  //remove all the images
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

  var humanDiv = document.createElement('div');
  var botDiv = document.createElement('div');
  var messageDiv = document.createElement('div');

  humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
  messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
  botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

  document.getElementById('flex-box-rps-div').appendChild(humanDiv);
  document.getElementById('flex-box-rps-div').appendChild(messageDiv);
  document.getElementById('flex-box-rps-div').appendChild(botDiv);
}
//Challenge 4 Change the color of all buttons!

var all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);

function buttonColorChange(buttonThis) {
  if (buttonThis.value === 'red') {
    buttonRed();
  } else if (buttonThis.value === 'green') {
    buttonGreen();
  } else if (buttonThis.value === 'reset') {
    buttonReset();
  } else if (buttonThis.value === 'random') {
    randomColor();
  }
}

function buttonRed() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-danger');
  }
}

function buttonGreen() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-success');
  }
}

function buttonReset() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}

function randomColor() {
  let choices = ['btn-primary', 'btn-success', 'btn-warning'];

  for (let i = 0; 0 < all_buttons.length; i++) {
    let randomNumber = Math.floor(Math.random() * 4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
  }
}


// testing push