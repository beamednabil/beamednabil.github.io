// script to generate random greetings

function changeSub(num) {
  document.getElementById("subtitle").innerText = say[num];
}

var say = [
  "games > school",
  "follow me on ig @wrd2nabil!",
  "'add more games!' - 🤓",
  "hosted on a jamaican toenail",
  "best games site of all time!",
  "discord mods are fat",
  "click bookmarklets for hacks!",
  "made by nabil in uhms!",
  "the chinese government is after me.",
];

// pick a random greeting
var howmany = say.length;
var bRand = 0;
bRand = Math.random();
bRand = Math.floor(bRand * howmany);
sayWhat = say[bRand];
document.getElementById("subtitle").innerText = sayWhat;
