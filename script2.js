


//get comp choice
const myArray = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
  return myArray[~~(Math.random() * myArray.length)];
}

//play the round and return the result statement
function  playRound(playerSelection, computerSelection) {
let pS = playerSelection.toLowerCase();
   if (pS === "rock" ) {
       if (computerSelection === "Paper") {
           return "You Lose! Paper beats Rock"; 
       } else if ( computerSelection === "Rock") {
           return "It's a Draw";
       } else {
       return "You Win!";
       }
    }
   if (pS === "paper") {
       if (computerSelection === "Scissor") {
           return "You Lose! Scissor beats Paper"; 
       } else if ( computerSelection === "Paper") {
           return "It's a Draw";
       } else {
       return "You Win!";
       }
    }

   if (pS === "scissor") {
       if (computerSelection === "Rock") {
           return "You Lose! Rock beats Scissor"; 
       } else if ( computerSelection === "Scissor") {
           return "It's a Draw";
       } else {
       return "You Win!";
       }
    }
}

//made computer choice
//now make a play round wala that keeps track 
//also a clear button
//a lso a function to highlight selcted choice 


//choose the player choice

const btn1 = document.querySelector('#rock');
btn1.addEventListener('click', () => {
    const res = playRound("Rock",getComputerChoice());
    btn1.classList.add('selected');
    
    console.log(res);
})

const btn2 = document.querySelector('#paper');
btn2.addEventListener('click', () => {
    const res = playRound("Paper",getComputerChoice());
    console.log(res);
})

const btn3 = document.querySelector('#scissor');
btn3.addEventListener('click', () => {
    const res = playRound("Scissor",getComputerChoice());
    console.log(res);
})

//keep track of socre result 
//in this code is named as variable res.
//if (result.slice(0,8) === "You Lose") {
   // compScore++  ;
//} else if (result.slice(0,8) === "You Win!") {
    //playerScore++ ;
//}

//use the add athawa remove classlist wala to show the chosen
//option by both player and comp

//image links
// <img class="rock" src="https://www.seekpng.com/png/detail/111-1113492_rock-paper-scissors-boston.png" alt="Rock, Paper, Scissors - Boston@seekpng.com">
//<img class="paper" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEjyMFecj1quL7X6lCiyQsga2mM53KLmwB4R-AaDP_7cUjS1ECfjim7lzlavUWqyfpfDw&usqp=CAU">
//<img class="scissor" src="https://www.clipartmax.com/png/small/428-4288836_your-hand-hand-clipart-png-rock-paper-scissors.png">




