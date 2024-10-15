// ROCK PAPER SCISSORS
/* %%% PLAN %%%
1. The program is solely javscript with no users interface: All game play will take place in the terminal
2. I will keep the code as minimal and simple as i could
3. The program takes two input: for this program, one from computer and one from user. in further development, the program will be able to take input from two users that wish to play against each other
4. The input from the computer would be made automatic, while user can input their choices between Rock, Paper and Scissors
5. I will write a function and logic that generate the random Choice of the computer from an array of Rock Paper and scissors; then i will write the logic that prompt the user to pick their choice between rock paper and scissors from the same array without having to type in the choice as a string
6. I will write the game logic that will fetch the computer random input and users input and compare the results. it will check using the game winning algorithm to know if the computer is the winner or the human player or it is a tie.
7. I can cap it all here but to make the game a little spicy. i will record the score of the computer and that of the player. The first to win with a minimum score of 5 is the overall winner.
8. User will have the choice to play again after a game without having to restart the game or quit finally. THANK YOU 
*/

/* %%% PSEUDOCODE %%%
omoh me i no like pseudocode o
Create an homepage for the game
  print user greetings and ask if they wants to play
    if user want to play: proceed
    if user do not want to play: quit
Create a function for computer gameplay that takes an array parameter
  initialise a variable that takes a random value using the Math.random method
  pass the variable to the array parameter and return it
Create a function for User gameplay that takes an array parameter
  initialise a variable that takes an integer input from user
  pass the variable to the array parameter and return it
Create a function for the game logic
  initialise computer score to 0
  initialise player score to 0
  initialise tie to 0
  initialise an array of rock paper Scissors
  while computer score is not equls to 5 and player score is not equal to 5
    fetch the value of computer play and user play by calling the computer play and user play function and passing the array to it as an arguments
     if computer is equal to player
       print it is a tie
      increament tie score by 1
    if computer play scissors and player plays paper or computer plays paper and player plays rock or computer plays rock and player plays Scissors
      print computer wins
      increament computer score by 1
  if player play scissors and computer plays paper or player plays paper and computer plays rock or player plays rock and computer plays Scissors
      print player wins
      increament player score by 1
print the final score of computer, player and the tie
the end o
*/

function home (){
    console.log("Welcome to the Rock Paper Scissors Game \nfirst player to reach the win limit of 5 wins. \nlet get started\n");
    let play = parseInt(prompt("will you like to proceed: 1 for yes and 2 for no"));
    if (play === 1){
        gameLogic();
    } else {
        console.log("thank you for checking out the app");
        //home(); //user uncomment this if you are using pc
    }
}


function computerPlay(game) {
    // let computer = parseInt(prompt("Computer Enter Your Choice: 0 for Rocks, 1 for Paper and 2 for scissors"))
    let computer = Math.floor(Math.random() * 3);
    return game[computer];
}

function playerPlay(game) {
    // let player = parseInt(prompt("Player Enter Your Choice: 0 for Rocks, 1 for Paper and 2 for scissors"))
    let player = Math.floor(Math.random() * 3);
    return game[player];
}

function gameLogic(){
    let game = ["rock", "paper", "scissors"];
    compScore = 0;
    playerScore = 0;
    tie = 0;

    while (compScore < 5 && playerScore < 5){

        let computer = computerPlay(game);
        let player = playerPlay(game);

        if (computer === player){
            tie += 1;
            console.log(`Computer plays ${computer} and Player plays ${player}. \nIt is a tie \nComputer:${compScore}, Player:${playerScore} and Tie:${tie}\n`);
        } else if (computer === 'rock' && player === "scissors" || computer === 'scissors' && player === "paper" || computer === 'paper' && player === "rock"){
            compScore += 1;
            console.log(`Computer plays ${computer} and Player plays ${player}. \nComputer wins \ncomputer:${compScore}, player:${playerScore} and Tie:${tie}\n`);
        } else if (player === 'rock' && computer === "scissors" || player === 'scissors' && computer === "paper" || player === 'paper' && computer === "rock"){
            playerScore += 1;
            console.log(`Computer plays ${computer} and Player plays ${player}. \nPlayer wins: \ncomputer:${compScore}, player:${playerScore} and Tie:${tie}\n`);
        }
    }
    console.log(`End of the game: Computer:${compScore}, Player:${playerScore} and Tie:${tie}`);
    //home(); //user should uncomment out this if you are using pc
}

home();

 
 