let number=7;
let guessNumber= +prompt("Guess a number");

if(guessNumber===number){
    console.log("winningNumber");
}else{
    if(guessNumber < number){
        console.log("guess is too low!");
    }
    else{
        console.log("guess is too high!");
    }
}