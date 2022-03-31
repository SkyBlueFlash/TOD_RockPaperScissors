let choices = ["rock", "paper", "scissors"];
let results = [0,0];

let Cplay = () => choices[Math.floor(Math.random()*3)];

function Pplay() {
    let pChoice = prompt("What do you want to play? (rock, paper, scissors)");
    if (pChoice.toLowerCase() == choices[0] | pChoice.toLowerCase() == choices[1] | pChoice.toLowerCase() == choices[2]) {
        return pChoice;
    } else {
        alert (`${pChoice} is not an option! Please choose rock, paper, or scissors.`);
        Pplay();
    }
}





function calcRes(pChoice, cChoice) {
    if (cChoice == 'rock' && pChoice == 'scissors') {
        results[0] += 1;
        if (results[0] == 3) {
            alert ("Computer Wins!");
        } else {
            alert ("Computer won a point!")
        }
    }
    else if (cChoice == 'paper' && pChoice == 'rock') {
        results[0] += 1;
        if (results[0] == 3) {
            alert ("Computer Wins!");
        } else {
            alert ("Computer won a point!")
        }
    }
    else if (cChoice == 'scissors' && pChoice == 'paper') {
        results[0] += 1;
        if (results[0] == 3) {
            alert ("Computer Wins!");
        } else {
            alert ("Computer won a point!")
        }
    }
    else if (pChoice == 'rock' && cChoice == 'scissors') {
        results[1] += 1;
        if (results[1] == 3) {
            alert ("Player Wins!");
        } else {
            alert ("Player won a point!")
        }
    }
    else if (pChoice == 'paper' && cChoice == 'rock') {
        results[1] += 1;
        if (results[1] == 3) {
            alert ("Player Wins!");
        } else {
            alert ("Player won a point!")
        }
    }
    else if (pChoice == 'scissors' && cChoice == 'paper') {
        results[1] += 1;
        if (results[1] == 3) {
            alert ("Player Wins!");
        } else {
            alert ("Player won a point!")
        }
    }
    else if (pChoice == 'scissors' && cChoice == 'scissors') {
        alert('Draw!');
    }
    else if (pChoice == 'paper' && cChoice == 'paper') {
        alert('Draw!');
    }
    else if (pChoice == 'rock' && cChoice == 'rock') {
        alert('Draw!');
    }    
}

function showRes(results) {
    let pS = document.getElementById('Pscore');
    pS.innerText = `Player Score: ${results[1]}`;
    let cS = document.getElementById('Cscore');
    cS.innerText = `Computer Score: ${results[0]}`;
}

function game() {
    for (let i = 0; i < 5; ++i) {
        let cChoice = Cplay();
        let pChoice = Pplay();
        calcRes(cChoice,pChoice);
        showRes(results);
    }

}

