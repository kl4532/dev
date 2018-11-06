let deck, shuffled, card_num, value, num_of_decks, end_hand;
let dealerValue = 0, playerValue = 0, aces = 0, stop =false, notempty = false, acesSubstracted=false;
initial();
shuffle(deck, shuffled);
function hit(){
    addCard('playerCards');
}
// Just treat each ace as 11.
// Then while the value is over 21,
// subtract 10 from your total for each ace in your hand.

function addCard(place_id){ // deal card to player or dealer
  notempty = true;
  if(place_id=="hidden"){ // request for hidden card(only once for dealer)
    let place = document.getElementById("dealerCards");
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    place.appendChild(card);
  }else{
  let place = document.getElementById(place_id);
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  card.innerHTML ='<img id="symbol-top" class="symbol-top" src= "./images/'+ shuffled[card_num][1] + '.png"/><div id="symbol-num" class="symbol-num">'+shuffled[card_num][0]+'</div><img id="symbol-bottom" class="symbol-bottom" src= "./images/'+ shuffled[card_num][1] + '.png"/>'
  if(place_id=="dealerCards"){
    dealerValue += cardNumericalValue(shuffled[card_num][0]);
    document.getElementById('dealerValue').innerHTML = "Dealer: " + dealerValue;
  }else{
    console.log(shuffled[card_num][0]);
    shuffled[card_num][0]=="A" ?  ++aces : aces=aces;   // add aces to counter if one appears
    playerValue += cardNumericalValue(shuffled[card_num][0]);
    if(playerValue>21 && !acesSubstracted){
      playerValue=valueWithAces(playerValue);
    acesSubstracted=true;} // fix it!
    if(playerValue>21)
    {
      document.getElementById('playerValue').innerHTML = "Player: " + playerValue;
      end_hand = true;
      deactivateBtn('btn_hit', true);
    }else if(playerValue==21){
      document.getElementById('playerValue').innerHTML = "Player: 21!";
      end_hand = true;
      deactivateBtn('btn_hit', true);
    }else
    {document.getElementById('playerValue').innerHTML = "Player: " + playerValue;}
    }
    card_num++;// pointing to the next card in deck
    place.appendChild(card);
  }
}
function initialDeal(){
  if(notempty){
    deactivateBtn('btn_hit', false);
    playerValue = 0;
  dealerValue = 0;
  aces = 0;
  acesSubstracted=false;
  let player = document.getElementById("playerCards");
  while (player.firstChild) {
  player.removeChild(player.firstChild);
  }
  let dealer = document.getElementById("dealerCards");
  while (dealer.firstChild) {
  dealer.removeChild(dealer.firstChild);
  }
}
  addCard('playerCards');
  setTimeout("addCard('playerCards')", 500);
  setTimeout("addCard('dealerCards')", 1000);
  setTimeout("addCard('hidden');", 1500);
}
function initial(){ //  initial conditions - create one unshuffled deck
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
  ["A", "heart"], ["A", "diamond"], ["A", "club"] , ["A", "spade"],
["A", "spade"], ["A", "spade"], ["A", "spade"], ["A", "spade"],
["A", "spade"], ["A", "spade"], ["A", "spade"], ["A", "spade"]];  // added extra aces for testing
  shuffled = [];
  card_num = 0;
  value = 0;
  num_of_decks = 1; //default declaration number of decs
  end = false;
}
function start(decks){
  document.getElementById('num').innerHTML = decks + "d";
  document.getElementById('symbol-top').src = "./images/default.png";
  document.getElementById('symbol-bottom').src = "./images/default.png";
  document.getElementById('dealed').innerHTML = "Dealed: " + "0";
  initial();
  //rand(1, 52*num_of_decks);
  assign_decs(decks);
  deck = multiply_array(deck, num_of_decks);
  shuffle(deck, shuffled);
  //console.log(shuffled);
}
function assign_decs(num){  // assign number of decks
  num_of_decks=num;
}
function shuffle(arr1, arr2){   // shuffling arr1 to create arr2, arr1 is still available unchanged after function proceeded
  let temp = arr1.slice(0); // clone arr1 to save it, temp will be killed
    while(arr2.length<52*num_of_decks)
      {
        let pick = rand(0, temp.length-1);
        arr2.push(temp[pick]);
        if(temp.length !== 0)
        {
            temp.splice(pick, 1);
        }
      }
}
function question(){
  if(card_num!==0 && card_num%13==0){   // asking player for value
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
    new_arr = new_arr.concat(arr);
    i++;
  }
  return new_arr;
}
function check_value(){
  alert("Card dealed: " + card_num + "/" + shuffled.length + "\n" + "Value: " + value);
}
function cardNumericalValue(card){
  if(card=="J"||card=="Q"||card=="K"){
    return 10;
  }else if(card=="A"){
    return 11;
  }else{return parseInt(card);}
}
function valueWithAces(curr_value){
    return curr_value-(aces*10);
}
function deactivateBtn(btn, on){
  document.getElementById(btn).disabled = on;
};
