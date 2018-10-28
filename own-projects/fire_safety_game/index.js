var container = document.querySelector("#container");
var frame = document.querySelector("#frame");
var saved=0, death=0, empty =0;
//the 2d array that defines the board
var board = [];
var arr_qa = [];
var current;
var gameInfo ="Uratuj ludzi z płonącego budynku. Przeszukaj wszystkie pomieszczenia klikając na okna i odpowiadając na pytania. Powodzenia!";

function rand(min, max){
  return Math.floor(Math.random()*(1+max-min))+min;
}
for(var i=0; i<25;i++){
  var isPersonInside = false
  var a = rand(0, 60), b = rand(0, 60), factor = rand(2, 3);
  if(factor==2){
    isPersonInside = true;}else isPersonInside = false;

  var answers = [a+b-1, b+a+1, a+b];
  arr_qa.push(["Calculate: " + a + " + " + b, a+b, answers, isPersonInside]);
  board.push([i,arr_qa[i][0],arr_qa[i][1],arr_qa[i][2],arr_qa[i][3]] ); //pushing index of question and the question and the answer
}
// setting dimensions of container and cell
function buildingConstructor(players){
  var container = document.getElementById('container');
  switch (players) {
    case 1:
      container.style.width = "280px";    // 4x4  //280x500px;
      container.style.height = "500px";
      break;
    case 2:
      container.style.width = "350px";    // 4x8
      container.style.height = "600px";
      break;
    case 3:
      container.style.width = "900px";  // 6x8
      break;
    case 4:
      container.style.width = "1200px"; // 8x10
      break;
    default:
  }
}
    for(var i = 0; i < board.length; i++){
        //create a div HTML element called cell
        var cell = document.createElement("div");
        //set its CSS class to cell
        cell.setAttribute("class", "cell");
        cell.setAttribute("id", i);
        //add the div HTML element to the stage
        container.appendChild(cell);
        //handle click
        cell.addEventListener("click", clickHandler);
    }
    var entrence = document.createElement("img");
    entrence.setAttribute("class", "entrence");
    entrence.src = "./img/door.png";
    container.appendChild(entrence);

var stat = document.createElement("div");        // create status div
stat.setAttribute("class", "stat");
stat.setAttribute("id", "stat");

var qAndA = document.createElement("div");     // create qaa div/
qAndA.setAttribute("class", "qAndA");
    function output(stat, qAndA, gameInfo, saved, death, empty){
      stat.innerHTML = gameInfo + "<br>Ocaleni: "+ saved + "<br>Ofiary: "+ death + "<br>Pusty: " + empty;
      frame.appendChild(stat);
      qAndA.innerHTML = "<br>QUESTIONS and A";
      stat.appendChild(qAndA);
    }
  output(stat, qAndA, gameInfo, saved, death, empty);
function clickHandler(){
      current = board[this.id]
      // qAndA.innerHTML = "<div>" + str + "</div>" +"<br>"+ "a) " + wrapInAdiv(board[this.id][3][0])
      // + "<br>" + "b) " + wrapInAdiv(board[this.id][3][1]) + "<br>" +  "c) " + wrapInAdiv(board[this.id][3][2]);
      var answer = prompt(board[this.id][1]);
if (answer == board[this.id][2]) {
  //alert("true");
  this.style.backgroundColor = "blue";
  this.removeEventListener("click", clickHandler);
      if(board[this.id][4]==true){
        ++saved;
        output(stat, qAndA, gameInfo, saved, death, empty);
        this.style.backgroundColor = "green";
      }else{
        ++empty;
        output(stat, qAndA, gameInfo, saved, death, empty);
      }
  //   // if false => mark black, add score, deactivate, do not change player
}else{
  //alert("false");
  this.style.backgroundColor = "blue";
  this.removeEventListener("click", clickHandler);
  if(board[this.id][4]==true){
    ++death;
    output(stat, qAndA, gameInfo, saved, death, empty);
    this.style.backgroundColor = "black";
  }else{
    ++empty;
    output(stat, qAndA, gameInfo, saved, death, empty);
  }
  //   // if false => mark black, deactivate, change player
}

if(death+saved+empty==25){
  let total = ((saved/death)*100);
  alert("Ocaliłeś " + total.toFixed(0) + "% mieszkańców \n" + "KONIEC: odświerz stronę by zagrać ponownie");
}
}
// function wrapInAdiv(value){
//   return "<span class='answers' onclick='checkAnswer("+value+")'>" + value + "</span>" + "<br>";
// }
// function checkAnswer(value){
// if(current[2]==value){
//   alert("true");
//   board.style.backgroundColor = "green";
//
//   // if true => mark green, deactivate, dont change the player
// }else{
//   alert("false");
//   // if false => mark black, deactivate, change player
// }
// }
