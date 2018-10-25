var container = document.querySelector("#container");
var frame = document.querySelector("#frame");
var saved=0, death=0, empty =0;
//the 2d array that defines the board
var board = [];
var arr_qa = [];
var current;
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
// function setting dimension of container and cell
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

// create qaa div
    var qAndA = document.createElement("div");
    qAndA.setAttribute("class", "qAndA");
    qAndA.innerHTML = "Live saved: "+ saved;

    frame.appendChild(qAndA);
function clickHandler(){
      current = board[this.id]
      var str = board[this.id][1];
      // qAndA.innerHTML = "<div>" + str + "</div>" +"<br>"+ "a) " + wrapInAdiv(board[this.id][3][0])
      // + "<br>" + "b) " + wrapInAdiv(board[this.id][3][1]) + "<br>" +  "c) " + wrapInAdiv(board[this.id][3][2]);
      var answer = prompt(str);
if (answer == board[this.id][2]) {
  alert("true");
  this.style.backgroundColor = "blue";
  this.removeEventListener("click", clickHandler);
      if(board[this.id][4]==true){
        ++saved;
        qAndA.innerHTML = "Live saved: "+ saved + "<br>" + "Death: "+ death + "<br>" + "Empty" + empty;
        this.style.backgroundColor = "green";
      }else{
        ++empty;
        qAndA.innerHTML = "Live saved: "+ saved + "<br>" + "Death: "+ death + "<br>" + "Empty" + empty;s
      }
  //   // if false => mark black, add score, deactivate, do not change player
}else{
  alert("false");
  this.style.backgroundColor = "blue";
  this.removeEventListener("click", clickHandler);
  if(board[this.id][4]==true){
    ++death;
    qAndA.innerHTML = "Live saved: "+ saved + "<br>" + "Death: "+ death + "<br>" + "Empty" + empty;
    this.style.backgroundColor = "black";
  }else{
    ++empty;
    qAndA.innerHTML = "Live saved: "+ saved + "<br>" + "Death: "+ death + "<br>" + "Empty" + empty;
  }
  //   // if false => mark black, deactivate, change player
}
    console.log("worked");
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
