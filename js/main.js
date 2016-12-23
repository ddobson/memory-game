document.addEventListener('DOMContentLoaded', function(){
      createCards();
});

function createCards() {
  for (var i = 0; i < 4; i++) {
    var gameBoard = document.getElementById('game-board');
    var card = document.createElement("div");
    card.className = "card";
    gameBoard.appendChild(card);
  }
}

// var cardOne = 'king';
// var cardTwo = 'king';
// var cardThree = 'queen';
// var cardFour = 'queen';
//
// if (cardOne === cardTwo || cardThree === cardFour) {
//   alert("You found a match!");
// } else {
//   alert("Sorry, try again.");
// }
