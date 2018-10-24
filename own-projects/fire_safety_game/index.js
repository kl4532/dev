var container = document.querySelector("#container");
//the 2d array that defines the board
// var board = [
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0]
// ];
// creating an array
var board = [];
for(var i=0; i<25; i++)
{
  board.push(i);
}

//the size of each cell
var SIZE = 100;
//the space between each cell
var SPACE = 10;

//display the array
var ROWS = board.length;
// var COLUMNS = board[0].length;

// function setting dimension of container and cell
function setDimension(players){
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


function clickHandler(){
    this.style.backgroundColor = "red";
    console.log("worked");
}
