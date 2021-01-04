function random() {
  return Math.floor(Math.random() * 6 + 1);
}
function play() {
  var player1 = random();
  var player2 = random();
  var header = 'Draw';
  document.getElementById('player1').src = 'images/dice' + player1 + '.png';
  document.getElementById('player2').src = 'images/dice' + player2 + '.png';

  if (player1 > player2) {
    header = 'Player 1 wins!';
  }

  if (player1 < player2) {
    header = 'Player 2 wins!';
  }
  document.getElementById('heading').innerHTML = header;
}

document.getElementById('button').addEventListener('click', function () {
  console.log('hola');
  play();
});
