console.log("It's linked");

console.log("Variable Initialized");

//variables
var choices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessesSoFar = [];
var guessedLetter = choices[Math.floor(Math.random() * choices.length)];


console.log("reset function is set");
//reset function
function reset(){
	guessesLeft =9;
	guesses =9;
	guessesSoFar = [];

}



//keyPress event

function keyPress(){
	var keyPressed = document.getElementById("input").value;
	document.getElementById("guessesSoFar-text").innerHTML = keyPressed;

}

for(keyPress()){
	alert("dfd");
}



//When user guesses wrong
if(userGuess != guessedLetter){
  guessesLeft--;
  guesses--;


  
}

//When user wins
if(userGuess == guessedLetter){
  win++;
  reset();
}


//When user loses
if(userGuess != guessedLetter && guessesLeft == 1){
  losses--;
  guessesLeft--;
  reset();
}















