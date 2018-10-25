var container = document.querySelector("#container");
var frame = document.querySelector("#frame");
var dead = false;
//the 2d array that defines the board
var board = [];
var arr_qa = [];
function rand(min, max){
  return Math.floor(Math.random()*(1+max-min))+min;
}
for(var i=0; i<25;i++){
  var a = rand(0, 60);
  var b = rand(0, 60);
  var answers = [a+b-1, b+a+1, a];
  arr_qa.push(["Calculate: " + a + " + " + b, a+b, answers])
}
for(var i=0; i<25; i++)
{
  board.push([i,arr_qa[i][0],arr_qa[i][1],arr_qa[i][2]]);    //pushing index of question and the question and the answer
}

//the size of each cell
var SIZE = 100;
//the space between each cell
var SPACE = 10;

//display the array
var ROWS = board.length;
// var COLUMNS = board[0].length;

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

        //position the cell
        // cell.style.top = row * (SIZE + SPACE) + "px";
        // cell.style.left = column * (SIZE + SPACE) + "px";

        //handle click
        cell.addEventListener("click", clickHandler, false);
    }
    var entrence = document.createElement("img");
    entrence.setAttribute("class", "entrence");
    entrence.src = "./img/door.png";
    container.appendChild(entrence);

// create qaa div
    var qAndA = document.createElement("div");
    qAndA.setAttribute("class", "qAndA");
    qAndA.innerHTML = "QAA";
    qAndA.style.position = "absolute";
    qAndA.style.top = "10px";
    qAndA.style.left = "400px";
    frame.appendChild(qAndA);


function clickHandler(){
      var str =  board[this.id][0] + board[this.id][1] + "=" + board[this.id][2] ;
      qAndA.innerHTML = "<div>"+str+ "</div>"+board[this.id][3];
      this.style.backgroundColor = "green";

    console.log("worked");
}
