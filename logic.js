let choices = ["rock", "paper", "scissors"];
let results = [0,0];

let Cplay = () => choices[Math.floor(Math.random()*3)];

function Pplay() {
    let choice;
    let rBtn = document.getElementById('rBtn');
    let pBtn = document.getElementById('pBtn');
    let sBtn = document.getElementById('sBtn');
    let pImg = document.getElementById('pImg');
    let cImg = document.getElementById('cImg');

    rBtn.addEventListener('click', () => {
            choice =  "rock";
            pImg.src = "images/rockHand.svg"
            game(choice);
        }
    );
    pBtn.addEventListener('click', () => {
            choice =  "paper";
            pImg.src = "images/paperHand.svg"
            game(choice);
        }
    );
    sBtn.addEventListener('click', () => {
            choice =  "scissors"
            pImg.src = "images/scissorsHand.svg"
            game(choice);
        } 
    );
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
    }
    else if (pChoice == 'paper' && cChoice == 'paper') {
    }
    else if (pChoice == 'rock' && cChoice == 'rock') {
    }    
    return results;
}

function showRes(results) {
    let pS = document.getElementById('Pscore');
    pS.innerText = `Player Score: ${results[1]}`;
    let cS = document.getElementById('Cscore');
    cS.innerText = `Computer Score: ${results[0]}`;
}

function game(pchoice) {
    let cchoice = Cplay();
    results = calcRes(pchoice, cchoice);
    showRes(results);
}

