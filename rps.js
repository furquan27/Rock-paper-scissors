var userScore = 0;
var compScore = 0;
var userScore_span = document.getElementById("user-score");
var compScore_span = document.getElementById("comp-score");
var score_div = document.querySelector(".score");
var result_h2 = document.querySelector(".result > h2");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissor_div = document.getElementById("s");
var userChoice_span = document.getElementById("user-choice");
var compChoice_span = document.getElementById("comp-choice");
var reset_button = document.querySelector("header > button");

function getName(value) {
    if (value == 'r')
        return "ROCK";

    else if (value == 'p')
        return "PAPER";

    else
        return "SCISSORS";

}


function getRandom() {
    var choices = ['r', 'p', 's'];
    return choices[Math.floor(Math.random() * 3)];

}

function win() {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_h2.innerHTML = "1 point";
}

function lose() {
    compScore++;
    compScore_span.innerHTML = compScore;
    result_h2.innerHTML = "0 point";
}

function draw() {
    result_h2.innerHTML = "It's a Draw";
}



function game(userChoice) {
    var compChoice = getRandom();
    var u = getName(userChoice);
    var c = getName(compChoice);
    userChoice_span.innerHTML = u;
    compChoice_span.innerHTML = c;
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win();
            break;
        case "sr":
        case "rp":
        case "ps":
            lose();
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
    }


}

reset_button.addEventListener('click', function () {
    userScore = 0;
    compScore = 0;
    userChoice_span.innerHTML = "USER'S CHOICE";
    compChoice_span.innerHTML = "COMPUTER'S CHOICE";
    result_h2.innerHTML = "Make your move";
    userScore_span.innerHTML = "0";
    compScore_span.innerHTML = "0";
})

rock_div.addEventListener('click', function () {
    game('r');
})

paper_div.addEventListener('click', function () {
    game('p');
})

scissor_div.addEventListener('click', function () {
    game('s');
})

