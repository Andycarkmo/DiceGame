var dice1;
var dice2;


function throwDices(){
  dice1 = Math.floor(((Math.random() * 6) + 1));
  dice2 = Math.floor(((Math.random() * 6) + 1));
  console.log("Dado 1: " + dice1);
  console.log("Dado 2: " + dice2);
}
function sayWinner(){
  if (dice1 > dice2) {
    document.querySelector("#p1w").removeAttribute("class");
    document.querySelector("#p1w").setAttribute("class", "winner align-self-center");
  } else if (dice2 > dice1){
    document.querySelector("#p2w").removeAttribute("class");
    document.querySelector("#p2w").setAttribute("class", "winner align-self-center");
  } else {
    document.querySelector("#draw0").removeAttribute("class");
    document.querySelector("#draw0").setAttribute("class", "winner align-self-center");
  }
}
function switchButton(){
  document.querySelector("#btn-lp").removeAttribute("class");
  document.querySelector("#btn-lp").setAttribute("class", "invisible");
  document.querySelector("#btn-rm").removeAttribute("class");
  document.querySelector("#btn-rm").setAttribute("class", "buttons");

}

function letsPlay(){
  throwDices();
  showDices();
  sayWinner();
  switchButton();

}

function refreshMe(){
  window.location.reload();
}

function showDices(){
  if (dice1 == 1) {
    document.querySelector("#d1_01").removeAttribute("class");
    document.querySelector("#d1_02").removeAttribute("class");
    document.querySelector("#d1_03").removeAttribute("class");
    document.querySelector("#d1_04").removeAttribute("class");
    document.querySelector("#d1_05").removeAttribute("class");
    document.querySelector("#d1_06").removeAttribute("class");
    document.querySelector("#d1_07").removeAttribute("class");
    document.querySelector("#d1_08").removeAttribute("class");
    document.querySelector("#d1_09").removeAttribute("class");
    document.querySelector("#d1_01").setAttribute("class", "d1_01 circle inv");
    document.querySelector("#d1_02").setAttribute("class", "d1_02 circle inv");
    document.querySelector("#d1_03").setAttribute("class", "d1_03 circle inv");
    document.querySelector("#d1_04").setAttribute("class", "d1_04 circle inv");
    document.querySelector("#d1_05").setAttribute("class", "d1_05 circle");
    document.querySelector("#d1_06").setAttribute("class", "d1_06 circle inv");
    document.querySelector("#d1_07").setAttribute("class", "d1_07 circle inv");
    document.querySelector("#d1_08").setAttribute("class", "d1_08 circle inv");
    document.querySelector("#d1_09").setAttribute("class", "d1_09 circle inv");
  }

  if (dice2 == 1) {
    document.querySelector("#d2_01").removeAttribute("class");
    document.querySelector("#d2_02").removeAttribute("class");
    document.querySelector("#d2_03").removeAttribute("class");
    document.querySelector("#d2_04").removeAttribute("class");
    document.querySelector("#d2_05").removeAttribute("class");
    document.querySelector("#d2_06").removeAttribute("class");
    document.querySelector("#d2_07").removeAttribute("class");
    document.querySelector("#d2_08").removeAttribute("class");
    document.querySelector("#d2_09").removeAttribute("class");
    document.querySelector("#d2_01").setAttribute("class", "d1_01 circle inv");
    document.querySelector("#d2_02").setAttribute("class", "d1_02 circle inv");
    document.querySelector("#d2_03").setAttribute("class", "d1_03 circle inv");
    document.querySelector("#d2_04").setAttribute("class", "d1_04 circle inv");
    document.querySelector("#d2_05").setAttribute("class", "d1_05 circle");
    document.querySelector("#d2_06").setAttribute("class", "d1_06 circle inv");
    document.querySelector("#d2_07").setAttribute("class", "d1_07 circle inv");
    document.querySelector("#d2_08").setAttribute("class", "d1_08 circle inv");
    document.querySelector("#d2_09").setAttribute("class", "d1_09 circle inv");
  }
  if (dice1 == 2) {
    document.querySelector("#d1_01").removeAttribute("class");
    document.querySelector("#d1_02").removeAttribute("class");
    document.querySelector("#d1_03").removeAttribute("class");
    document.querySelector("#d1_04").removeAttribute("class");
    document.querySelector("#d1_05").removeAttribute("class");
    document.querySelector("#d1_06").removeAttribute("class");
    document.querySelector("#d1_07").removeAttribute("class");
    document.querySelector("#d1_08").removeAttribute("class");
    document.querySelector("#d1_09").removeAttribute("class");
    document.querySelector("#d1_01").setAttribute("class", "d1_01 circle inv");
    document.querySelector("#d1_02").setAttribute("class", "d1_02 circle inv");
    document.querySelector("#d1_03").setAttribute("class", "d1_03 circle");
    document.querySelector("#d1_04").setAttribute("class", "d1_04 circle inv");
    document.querySelector("#d1_05").setAttribute("class", "d1_05 circle inv");
    document.querySelector("#d1_06").setAttribute("class", "d1_06 circle inv");
    document.querySelector("#d1_07").setAttribute("class", "d1_07 circle");
    document.querySelector("#d1_08").setAttribute("class", "d1_08 circle inv");
    document.querySelector("#d1_09").setAttribute("class", "d1_09 circle inv");
  }

  if (dice2 == 2) {
    document.querySelector("#d2_01").removeAttribute("class");
    document.querySelector("#d2_02").removeAttribute("class");
    document.querySelector("#d2_03").removeAttribute("class");
    document.querySelector("#d2_04").removeAttribute("class");
    document.querySelector("#d2_05").removeAttribute("class");
    document.querySelector("#d2_06").removeAttribute("class");
    document.querySelector("#d2_07").removeAttribute("class");
    document.querySelector("#d2_08").removeAttribute("class");
    document.querySelector("#d2_09").removeAttribute("class");
    document.querySelector("#d2_01").setAttribute("class", "d1_01 circle inv");
    document.querySelector("#d2_02").setAttribute("class", "d1_02 circle inv");
    document.querySelector("#d2_03").setAttribute("class", "d1_03 circle");
    document.querySelector("#d2_04").setAttribute("class", "d1_04 circle inv");
    document.querySelector("#d2_05").setAttribute("class", "d1_05 circle inv");
    document.querySelector("#d2_06").setAttribute("class", "d1_06 circle inv");
    document.querySelector("#d2_07").setAttribute("class", "d1_07 circle");
    document.querySelector("#d2_08").setAttribute("class", "d1_08 circle inv");
    document.querySelector("#d2_09").setAttribute("class", "d1_09 circle inv");
  }
  if (dice1 == 3) {
    document.querySelector("#d1_01").removeAttribute("class");
    document.querySelector("#d1_02").removeAttribute("class");
    document.querySelector("#d1_03").removeAttribute("class");
    document.querySelector("#d1_04").removeAttribute("class");
    document.querySelector("#d1_05").removeAttribute("class");
    document.querySelector("#d1_06").removeAttribute("class");
    document.querySelector("#d1_07").removeAttribute("class");
    document.querySelector("#d1_08").removeAttribute("class");
    document.querySelector("#d1_09").removeAttribute("class");
    document.querySelector("#d1_01").setAttribute("class", "d1_01 circle inv");
    document.querySelector("#d1_02").setAttribute("class", "d1_02 circle inv");
    document.querySelector("#d1_03").setAttribute("class", "d1_03 circle");
    document.querySelector("#d1_04").setAttribute("class", "d1_04 circle inv");
    document.querySelector("#d1_05").setAttribute("class", "d1_05 circle");
    document.querySelector("#d1_06").setAttribute("class", "d1_06 circle inv");
    document.querySelector("#d1_07").setAttribute("class", "d1_07 circle");
    document.querySelector("#d1_08").setAttribute("class", "d1_08 circle inv");
    document.querySelector("#d1_09").setAttribute("class", "d1_09 circle inv");
  }

  if (dice2 == 3) {
    document.querySelector("#d2_01").removeAttribute("class");
    document.querySelector("#d2_02").removeAttribute("class");
    document.querySelector("#d2_03").removeAttribute("class");
    document.querySelector("#d2_04").removeAttribute("class");
    document.querySelector("#d2_05").removeAttribute("class");
    document.querySelector("#d2_06").removeAttribute("class");
    document.querySelector("#d2_07").removeAttribute("class");
    document.querySelector("#d2_08").removeAttribute("class");
    document.querySelector("#d2_09").removeAttribute("class");
    document.querySelector("#d2_01").setAttribute("class", "d1_01 circle inv");
    document.querySelector("#d2_02").setAttribute("class", "d1_02 circle inv");
    document.querySelector("#d2_03").setAttribute("class", "d1_03 circle");
    document.querySelector("#d2_04").setAttribute("class", "d1_04 circle inv");
    document.querySelector("#d2_05").setAttribute("class", "d1_05 circle");
    document.querySelector("#d2_06").setAttribute("class", "d1_06 circle inv");
    document.querySelector("#d2_07").setAttribute("class", "d1_07 circle");
    document.querySelector("#d2_08").setAttribute("class", "d1_08 circle inv");
    document.querySelector("#d2_09").setAttribute("class", "d1_09 circle inv");
  }
  if (dice1 == 4) {
    document.querySelector("#d1_01").removeAttribute("class");
    document.querySelector("#d1_02").removeAttribute("class");
    document.querySelector("#d1_03").removeAttribute("class");
    document.querySelector("#d1_04").removeAttribute("class");
    document.querySelector("#d1_05").removeAttribute("class");
    document.querySelector("#d1_06").removeAttribute("class");
    document.querySelector("#d1_07").removeAttribute("class");
    document.querySelector("#d1_08").removeAttribute("class");
    document.querySelector("#d1_09").removeAttribute("class");
    document.querySelector("#d1_01").setAttribute("class", "d1_01 circle");
    document.querySelector("#d1_02").setAttribute("class", "d1_02 circle inv");
    document.querySelector("#d1_03").setAttribute("class", "d1_03 circle");
    document.querySelector("#d1_04").setAttribute("class", "d1_04 circle inv");
    document.querySelector("#d1_05").setAttribute("class", "d1_05 circle inv");
    document.querySelector("#d1_06").setAttribute("class", "d1_06 circle inv");
    document.querySelector("#d1_07").setAttribute("class", "d1_07 circle");
    document.querySelector("#d1_08").setAttribute("class", "d1_08 circle inv");
    document.querySelector("#d1_09").setAttribute("class", "d1_09 circle");
  }

  if (dice2 == 4) {
    document.querySelector("#d2_01").removeAttribute("class");
    document.querySelector("#d2_02").removeAttribute("class");
    document.querySelector("#d2_03").removeAttribute("class");
    document.querySelector("#d2_04").removeAttribute("class");
    document.querySelector("#d2_05").removeAttribute("class");
    document.querySelector("#d2_06").removeAttribute("class");
    document.querySelector("#d2_07").removeAttribute("class");
    document.querySelector("#d2_08").removeAttribute("class");
    document.querySelector("#d2_09").removeAttribute("class");
    document.querySelector("#d2_01").setAttribute("class", "d1_01 circle");
    document.querySelector("#d2_02").setAttribute("class", "d1_02 circle inv");
    document.querySelector("#d2_03").setAttribute("class", "d1_03 circle");
    document.querySelector("#d2_04").setAttribute("class", "d1_04 circle inv");
    document.querySelector("#d2_05").setAttribute("class", "d1_05 circle inv");
    document.querySelector("#d2_06").setAttribute("class", "d1_06 circle inv");
    document.querySelector("#d2_07").setAttribute("class", "d1_07 circle");
    document.querySelector("#d2_08").setAttribute("class", "d1_08 circle inv");
    document.querySelector("#d2_09").setAttribute("class", "d1_09 circle");
  }
  if (dice1 == 5) {
    document.querySelector("#d1_01").removeAttribute("class");
    document.querySelector("#d1_02").removeAttribute("class");
    document.querySelector("#d1_03").removeAttribute("class");
    document.querySelector("#d1_04").removeAttribute("class");
    document.querySelector("#d1_05").removeAttribute("class");
    document.querySelector("#d1_06").removeAttribute("class");
    document.querySelector("#d1_07").removeAttribute("class");
    document.querySelector("#d1_08").removeAttribute("class");
    document.querySelector("#d1_09").removeAttribute("class");
    document.querySelector("#d1_01").setAttribute("class", "d1_01 circle");
    document.querySelector("#d1_02").setAttribute("class", "d1_02 circle inv");
    document.querySelector("#d1_03").setAttribute("class", "d1_03 circle");
    document.querySelector("#d1_04").setAttribute("class", "d1_04 circle inv");
    document.querySelector("#d1_05").setAttribute("class", "d1_05 circle");
    document.querySelector("#d1_06").setAttribute("class", "d1_06 circle inv");
    document.querySelector("#d1_07").setAttribute("class", "d1_07 circle");
    document.querySelector("#d1_08").setAttribute("class", "d1_08 circle inv");
    document.querySelector("#d1_09").setAttribute("class", "d1_09 circle");
  }

  if (dice2 == 5) {
    document.querySelector("#d2_01").removeAttribute("class");
    document.querySelector("#d2_02").removeAttribute("class");
    document.querySelector("#d2_03").removeAttribute("class");
    document.querySelector("#d2_04").removeAttribute("class");
    document.querySelector("#d2_05").removeAttribute("class");
    document.querySelector("#d2_06").removeAttribute("class");
    document.querySelector("#d2_07").removeAttribute("class");
    document.querySelector("#d2_08").removeAttribute("class");
    document.querySelector("#d2_09").removeAttribute("class");
    document.querySelector("#d2_01").setAttribute("class", "d1_01 circle");
    document.querySelector("#d2_02").setAttribute("class", "d1_02 circle inv");
    document.querySelector("#d2_03").setAttribute("class", "d1_03 circle");
    document.querySelector("#d2_04").setAttribute("class", "d1_04 circle inv");
    document.querySelector("#d2_05").setAttribute("class", "d1_05 circle");
    document.querySelector("#d2_06").setAttribute("class", "d1_06 circle inv");
    document.querySelector("#d2_07").setAttribute("class", "d1_07 circle");
    document.querySelector("#d2_08").setAttribute("class", "d1_08 circle inv");
    document.querySelector("#d2_09").setAttribute("class", "d1_09 circle");
  }
  if (dice1 == 6) {
    document.querySelector("#d1_01").removeAttribute("class");
    document.querySelector("#d1_02").removeAttribute("class");
    document.querySelector("#d1_03").removeAttribute("class");
    document.querySelector("#d1_04").removeAttribute("class");
    document.querySelector("#d1_05").removeAttribute("class");
    document.querySelector("#d1_06").removeAttribute("class");
    document.querySelector("#d1_07").removeAttribute("class");
    document.querySelector("#d1_08").removeAttribute("class");
    document.querySelector("#d1_09").removeAttribute("class");
    document.querySelector("#d1_01").setAttribute("class", "d1_01 circle");
    document.querySelector("#d1_02").setAttribute("class", "d1_02 circle");
    document.querySelector("#d1_03").setAttribute("class", "d1_03 circle");
    document.querySelector("#d1_04").setAttribute("class", "d1_04 circle inv");
    document.querySelector("#d1_05").setAttribute("class", "d1_05 circle inv");
    document.querySelector("#d1_06").setAttribute("class", "d1_06 circle inv");
    document.querySelector("#d1_07").setAttribute("class", "d1_07 circle");
    document.querySelector("#d1_08").setAttribute("class", "d1_08 circle");
    document.querySelector("#d1_09").setAttribute("class", "d1_09 circle");
  }

  if (dice2 == 6) {
    document.querySelector("#d2_01").removeAttribute("class");
    document.querySelector("#d2_02").removeAttribute("class");
    document.querySelector("#d2_03").removeAttribute("class");
    document.querySelector("#d2_04").removeAttribute("class");
    document.querySelector("#d2_05").removeAttribute("class");
    document.querySelector("#d2_06").removeAttribute("class");
    document.querySelector("#d2_07").removeAttribute("class");
    document.querySelector("#d2_08").removeAttribute("class");
    document.querySelector("#d2_09").removeAttribute("class");
    document.querySelector("#d2_01").setAttribute("class", "d1_01 circle");
    document.querySelector("#d2_02").setAttribute("class", "d1_02 circle");
    document.querySelector("#d2_03").setAttribute("class", "d1_03 circle");
    document.querySelector("#d2_04").setAttribute("class", "d1_04 circle inv");
    document.querySelector("#d2_05").setAttribute("class", "d1_05 circle inv");
    document.querySelector("#d2_06").setAttribute("class", "d1_06 circle inv");
    document.querySelector("#d2_07").setAttribute("class", "d1_07 circle");
    document.querySelector("#d2_08").setAttribute("class", "d1_08 circle");
    document.querySelector("#d2_09").setAttribute("class", "d1_09 circle");
  }
}
