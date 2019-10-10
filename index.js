
function playerOneOutput() {
  // Define playerOne and randomize
  var playerOneRoll = Math.random();
  playerOneRoll = (playerOneRoll*6);
  playerOneRoll = Math.floor(playerOneRoll) + 1;
  // Point playerOne to an image
  if (playerOneRoll===1){
    document.querySelector("img.img1").setAttribute("src","images/dice1.png");
  } else if (playerOneRoll===2) {
    document.querySelector("img.img1").setAttribute("src","images/dice2.png");
  } else if (playerOneRoll===3) {
    document.querySelector("img.img1").setAttribute("src","images/dice3.png");
  } else if (playerOneRoll===4) {
    document.querySelector("img.img1").setAttribute("src","images/dice4.png");
  } else if (playerOneRoll===5) {
    document.querySelector("img.img1").setAttribute("src","images/dice5.png");
  } else {
    document.querySelector("img.img1").setAttribute("src","images/dice6.png");
  }
console.log(playerOneRoll);
return playerOneRoll;
}

function playerTwoOutput(){
  // Define playerTwo and randomize
  var playerTwoRoll = Math.random();
  playerTwoRoll = (playerTwoRoll*6);
  playerTwoRoll = Math.floor(playerTwoRoll) + 1;
  // Point playertTwo to an image
  if (playerTwoRoll===1){
    document.querySelector("img.img2").setAttribute("src","images/dice1.png");
  } else if (playerTwoRoll===2) {
    document.querySelector("img.img2").setAttribute("src","images/dice2.png");
  } else if (playerTwoRoll===3) {
    document.querySelector("img.img2").setAttribute("src","images/dice3.png");
  } else if (playerTwoRoll===4) {
    document.querySelector("img.img2").setAttribute("src","images/dice4.png");
  } else if (playerTwoRoll===5) {
    document.querySelector("img.img2").setAttribute("src","images/dice5.png");
  } else {
    document.querySelector("img.img2").setAttribute("src","images/dice6.png");
  }
console.log(playerTwoRoll);
return playerTwoRoll;
}

var $outOneFinal = playerOneOutput();
var $outTwoFinal = playerTwoOutput();

function verdict(){
  if($outOneFinal === $outTwoFinal){
    document.querySelector("h1").textContent="Draw Game";
  } else if($outOneFinal < $outTwoFinal){
    document.querySelector("h1").textContent="Player 2 Wins!";
  } else if($outOneFinal > $outTwoFinal){
    document.querySelector("h1").textContent="Player 1 Wins!";
  }
}

// playerOneOutput();
// playerTwoOutput();
verdict();
