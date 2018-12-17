function rollDice() {
  var demo = document.getElementById("demo");
  demo.innerHTML = Math.floor(Math.random() * 6) +1;
}
function rollDice() {
  var mute = document.getElementById("mute");
  mute.innerHTML = Math.floor(Math.random() * 6) +1;
}
var diceTotal = demo + mute;
x.innerHTML = "You rolled" + diceTotal +".";
if(demo == mute) {
  x.innerHTML += "DOUBLES! You get a free turn!"
}
