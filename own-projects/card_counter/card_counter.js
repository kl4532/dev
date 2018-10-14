let deck, shuffled, card_num, value, num_of_decks, end;
initial();
shuffle();    // at default: shuffling deck


// below functions only

function initial(){ // back to initial conditions
  deck = [["2", "heart"], ["2", "diamond"], ["2", "club"] , ["2", "spade"],
  ["3", "heart"], ["3", "diamond"], ["3", "club"] , ["3", "spade"],
  ["4", "heart"], ["4", "diamond"], ["4", "club"] , ["4", "spade"],
  ["5", "heart"], ["5", "diamond"], ["5", "club"] , ["5", "spade"],
  ["6", "heart"], ["6", "diamond"], ["6", "club"] , ["6", "spade"],
  ["7", "heart"], ["7", "diamond"], ["7", "club"] , ["7", "spade"],
  ["8", "heart"], ["8", "diamond"], ["8", "club"] , ["8", "spade"],
  ["9", "heart"], ["9", "diamond"], ["9", "club"] , ["9", "spade"],
  ["10", "heart"], ["10", "diamond"], ["10", "club"] , ["10", "spade"],
  ["J", "heart"], ["J", "diamond"], ["J", "club"] , ["J", "spade"],
  ["Q", "heart"], ["Q", "diamond"], ["Q", "club"] , ["Q", "spade"],
  ["K", "heart"], ["K", "diamond"], ["K", "club"] , ["K", "spade"],
  ["A", "heart"], ["A", "diamond"], ["A", "club"] , ["A", "spade"]];
  shuffled = [];
  card_num=0;
  value=0;
  num_of_decks = 1; //default declaration number of decs
  end = false;

}
function start(decks){
  document.getElementById('num').innerHTML = decks + "d";
  document.getElementById('symbol-top').src = "./images/default.png";
  document.getElementById('symbol-bottom').src = "./images/default.png";
  document.getElementById('dealed').innerHTML = "Dealed: " + "0";
  initial();
  rand(1, 52*num_of_decks)
  assign_decs(decks);
  deck = multiply_array(deck, num_of_decks);
  shuffle();
  //console.log(shuffled);
}
function assign_decs(num){  // assign number of decks
  num_of_decks=num;
}
function shuffle(){
    while(shuffled.length<52*num_of_decks)
      {
        let pick = rand(0, deck.length-1);
        shuffled.push(deck[pick]);
        if(deck.length !== 0)
        {
            deck.splice(pick, 1);
        }
      }
}
function question(){
  if(card_num!==0 && card_num%13==0){   // checking value from player
        var answer = prompt("What is a value?");
        if (answer == value) {
            alert("Good!");
            hit();
       }else{
            alert("Wrong!");
            start(1);
       }
  }else{
    hit();
  }
}
function hit() {
  //alert(shuffled[card_num]);
    if (end == false) {
    if (card_num < 52 * num_of_decks) {
      count(shuffled);
      document.getElementById('num').innerHTML = shuffled[card_num][0];
      document.getElementById('symbol-top').src = "./images/" + shuffled[card_num][1] + ".png";
      document.getElementById('symbol-bottom').src = "./images/" + shuffled[card_num][1] + ".png";
      card_num++;
      document.getElementById('dealed').innerHTML = "Dealed: " + card_num;
    } else if (card_num == 52 * num_of_decks) {
      document.getElementById('num').innerHTML = "End";
      document.getElementById('symbol-top').src = "./images/blank.png"
      document.getElementById('symbol-bottom').src = "./images/blank.png"
      end = true;
    }
  }
}
function count(cards){
  var minus = ["10", "J", "Q", "K", "A"];
  var plus = ["2","3","4","5","6"];

  if(minus.includes(cards[card_num][0])){
    value--;
  }else if(plus.includes(cards[card_num][0])){
    value++;
  }
  //console.log(card_num + "Val:" + value);   show value in console
}
function rand(min, max){
  return Math.floor(Math.random()*(1+max-min))+min;
}
function multiply_array(arr, n){
  let i=0;
  let new_arr=[];
  while(i<n)
  {
  // for(var j=0; j<arr.length; j++)
  // {
  //   new_arr.push(arr[j]);
  // }
    new_arr = new_arr.concat(arr);
    i++;
  }
  return new_arr;
}
function check_value(){
  alert("Card dealed: " + card_num + "/" + shuffled.length + "\n" + "Value: " + value);
}

//console.log(shuffled);

/*
let deck = [["2", "heart"], ["2", "diamond"], ["2", "club"] , ["2", "spade"],
["3", "heart"], ["3", "diamond"], ["3", "club"] , ["3", "spade"],
["4", "heart"], ["4", "diamond"], ["4", "club"] , ["4", "spade"],
["5", "heart"], ["5", "diamond"], ["5", "club"] , ["5", "spade"],
["6", "heart"], ["6", "diamond"], ["6", "club"] , ["6", "spade"],
["7", "heart"], ["7", "diamond"], ["7", "club"] , ["7", "spade"],
["8", "heart"], ["8", "diamond"], ["8", "club"] , ["8", "spade"],
["9", "heart"], ["9", "diamond"], ["9", "club"] , ["9", "spade"],
["10", "heart"], ["10", "diamond"], ["10", "club"] , ["10", "spade"],
["J", "heart"], ["J", "diamond"], ["J", "club"] , ["J", "spade"],
["Q", "heart"], ["Q", "diamond"], ["Q", "club"] , ["Q", "spade"],
["K", "heart"], ["K", "diamond"], ["K", "club"] , ["K", "spade"],
["A", "heart"], ["A", "diamond"], ["A", "club"] , ["A", "spade"]];
*/
