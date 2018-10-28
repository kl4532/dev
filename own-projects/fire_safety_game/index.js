
var frame = document.querySelector("#frame");   // frame for all divs
var qAndA = document.createElement("div");     // create qaa div need to be global
qAndA.setAttribute("class", "qAndA");
var saved=0, death=0, empty =0;
var windowsNumber=25;
var board = [];
var arr_qa = [];
var current;
var onePlayer =0;
var gameInfo ="Uratuj ludzi z płonącego budynku. Przeszukaj wszystkie pomieszczenia klikając na okna i odpowiadając na pytania. Powodzenia!";

function rand(min, max){  // random num generator
  return Math.floor(Math.random()*(1+max-min))+min;
}
function output(stat, qAndA, gameInfo, saved, death, empty){
  stat.innerHTML = gameInfo + `<ul><li class='dotSaved'>Ocaleni: ${saved}</li><li class='dotDeath'>Ofiary: ${death}</li><li class='dotEmpty'>Pusty: ${empty}</li></ul>`;
  frame.appendChild(stat);
  onePlayer ? stat.style.left ="300px": stat.style.left ="370px"; // if one player -> set new position
}
// setting dimensions of container and cell
function buildingConstructor(players){                  // setting building dimensions for diff amount of players
  var container = document.getElementById('container');
  switch (players){
    case 1:
      container.style.width = "280px";    // 4x4 //280x500px;
      container.style.height = "500px";
      windowsNumber=16;
      onePlayer=true;
      break;
    case 2:
      container.style.width = "350px";    // 5x5
      container.style.height = "600px";
      windowsNumber=25;
      break;
    default:
  }
}
//init();
function init(players){        // initialization of the game
  var intro = document.getElementById('intro');
  intro.remove();                                 //removing intro buttons and text
  var block = document.createElement("div");      // creating block container
  block.setAttribute("class", "container");
  block.setAttribute("id", "container");
  frame.appendChild(block);
  buildingConstructor(players);
  for(var i=0; i<windowsNumber;i++){
    var isPersonInside = false
    var a = rand(0, 60), b = rand(0, 60), factor = rand(0,5);
    if(factor>0){
      isPersonInside = true;}else isPersonInside = false;
    var answers = [a+b-1, b+a+1, a+b];
    arr_qa.push(["Calculate: " + a + " + " + b, a+b, answers, isPersonInside]);
    board.push([i,arr_qa[i][0],arr_qa[i][1],arr_qa[i][2],arr_qa[i][3]] ); //pushing index of question and the question and the answer
  }
  for(var i = 0; i < board.length; i++){
    //create a div HTML element called cell
    var cell = document.createElement("div");
    //set its CSS class to cell
    cell.setAttribute("class", "cell");
    cell.setAttribute("id", i);
          //add the div HTML element to the stage
    block.appendChild(cell);
          //handle click
    cell.addEventListener("click", clickHandler);
    }
  var entrence = document.createElement("img");
  entrence.setAttribute("class", "entrence");
  entrence.src = "./img/door.png";
  block.appendChild(entrence);

  var stat = document.createElement("div");        // create status div
  stat.setAttribute("class", "stat");
  stat.setAttribute("id", "stat");
  output(stat, qAndA, gameInfo, saved, death, empty);
}
function clickHandler(){
  current = board[this.id];
  qAndA.innerHTML = "<br>" + current[1] + "<br>" +   //asking question - Calculate...
    "<br>"+ "a) " + wrapInAdiv(current[3][0], this.id) +
    "<br>" + "b) " + wrapInAdiv(current[3][1], this.id) +
    "<br>" +  "c) " + wrapInAdiv(current[3][2], this.id);
  stat.appendChild(qAndA);
}

function wrapInAdiv(value, id){
  return "<span class='answers' onclick='checkAnswer(" + value +","+ id + ")'>" + value  + "</span>" + "<br>";
}
function checkAnswer(value, id){
  curr_window = document.getElementById(id);
  if(current[2]==value){
    alert("true");
    curr_window.removeEventListener("click", clickHandler);
      if(current[4]==true){
          ++saved;
          output(stat, qAndA, gameInfo, saved, death, empty);
          curr_window.style.backgroundColor = "green";
          curr_window.style.backgroundImage = "none";
      }else{
          ++empty;
          output(stat, qAndA, gameInfo, saved, death, empty);
          curr_window.style.backgroundColor = "black";
          curr_window.style.backgroundImage = "none";
      }
  // if true => mark green, deactivate, dont change the player
}else{
  alert("false");
    curr_window.removeEventListener("click", clickHandler);
    if(current[4]==true){
      ++death;
      output(stat, qAndA, gameInfo, saved, death, empty);
      curr_window.style.backgroundColor = "red";
      curr_window.style.backgroundImage = "none";
    }else{
      ++empty;
      output(stat, qAndA, gameInfo, saved, death, empty);
      curr_window.style.backgroundColor = "black";
      curr_window.style.backgroundImage = "none";
    }
//  if false => mark black, deactivate, change player
}
if(death+saved+empty==windowsNumber){
  let total = ((saved/(saved+death))*100);
  if(death == 0){
    qAndA.innerHTML = "GRAULACJE! Ocaliłeś wszystkich mieszkańców znajdujących się w budynku :) <br>KONIEC(odśwież stronę by zagrać ponownie)";
    stat.appendChild(qAndA);
  }else if(saved == 0){
    qAndA.innerHTML = ("Wszyscy potrzebujący pomocy zginęli... <br>KONIEC￼(odśwież stronę by zagrać ponownie)￼");
    stat.appendChild(qAndA);
  }else {
    qAndA.innerHTML = ("Ocaliłeś " + total.toFixed(0) + "% mieszkańców znajdujących się w budynku <br>KONIEC￼(odśwież stronę by zagrać ponownie)");
    stat.appendChild(qAndA);
  }
}
}
