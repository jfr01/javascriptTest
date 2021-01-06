//Cache the DOM variables - Storing items in variables for future use

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const papper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

//console.log(getComputerChoice());

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "papper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + '(user)' + " Beats " + convertToWord(computerChoice) + '(computer)' + " You Win!";
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function () { document.getElementById(userChoice).classList.remove('green-glow') }, 300);
}


function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + '(user)' + " Loses to " + convertToWord(computerChoice) + '(computer)' + " You Lose!";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function () { document.getElementById(userChoice).classList.remove('red-glow') }, 300);
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = convertToWord(userChoice) + '(user)' + " Draws " + convertToWord(computerChoice) + '(computer)' + "Its a DRAW";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose();
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })

    papper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })
}

main();