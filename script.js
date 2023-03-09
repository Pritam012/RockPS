function getComputerChoice () {
    let choice = parseInt(Math.floor(Math.random() * 3));
    console.log(choice);

    const options = ["Rock", "Paper", "Scissor"];
        return options[choice];

    
   
}

function  playRound(playerSelection, computerSelection) {
     let pS = playerSelection.toLowerCase();
    if (pS === "rock" ) {
        if (computerSelection === "Paper") {
            return "You Lose! Paper beats Rock"; 
        } else if ( computerSelection === "Rock") {
            return "It's a Draw"
        } else {
        return "You Win!"
        }
    }
    if (pS === "paper") {
        if (computerSelection === "Scissor") {
            return "You Lose! Scissor beats Paper"; 
        } else if ( computerSelection === "Paper") {
            return "It's a Draw"
        } else {
        return "You Win!"
        }
    }

    if (pS === "scissor") {
        if (computerSelection === "rock") {
            return "You Lose! Rock beats Scissor"; 
        } else if ( computerSelection === "Scissor") {
            return "It's a Draw"
        } else {
        return "You Win!"
        }
    }
}


function game(playerChoice) {
    
    let result;
    let compScore = 0;
    
    let compchoice;
   
   
        
        compchoice = getComputerChoice();
        result = playRound(playerChoice, compchoice);
          console.log(result);
        if (result.slice(0,8) === "You Lose") {
            compScore++  ;
        } else if (result.slice(0,8) === "You Win!") {
            playerScore++ ;
        }
    

    console.log("Player and Computer Score" , playerScore, compScore)
}


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click',() => {
        alert(1);
    });
})

