let deck, shuffled, card_num, value=0, num_of_decks, end_hand, ace_hard_p = 0, ace_hard_d=0, playerValueInitial, ace_soft = 0;
let dealerValue = 0, playerValue = 0, aces_d = false, aces_p = false, stop =false, notempty = false, hidden, hidden_symbol;
initial();
deck = multiply_array(deck, num_of_decks);
shuffle(deck, shuffled);
function hit(){
    addCard('playerCards');
}
function showHidden(){
  document.getElementById("hidden").parentNode.removeChild(document.getElementById("hidden")); // remove cover for hidden card
  let place = document.getElementById("dealerCards");
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  card.innerHTML ='<img id="symbol-top" class="symbol-top" src= "./images/'+ hidden_symbol + '.png"/><div id="symbol-num" class="symbol-num">'+hidden+'</div><img id="symbol-bottom" class="symbol-bottom" src= "./images/'+ hidden_symbol + '.png"/>'
  place.appendChild(card); // show hidden card
  hidden=="A" ? aces_d=true : aces_d=aces_d;
  dealerValue += cardNumericalValue(hidden);
  if(aces_d){
    ace_hard_d = playerValue+10;  // A 1 1 10
  }else ace_hard_d = playerValue; // AA 1 1
  document.getElementById('dealerValue').innerHTML = "Dealer: " + dealerValue;
  value = count(hidden);
  card_num++;// pointing to the next card in deck
  place.appendChild(card);
}
function stand(){ // after player finish, dealing cards for dealer side
  deactivateBtn('btn_stand', true);
  deactivateBtn('btn_hit', true);
  showHidden();
  ace_hard = 0;
  while(dealerValue<17){
    let i = 500;
    addCard('dealerCards');
    i +=500;
  }
  gameResult();
}
function gameResult(){
  if((dealerValue>21 || playerValue>dealerValue) && playerValue<=21){
    alert("player won");
  }else if(dealerValue==playerValue){
    alert("push");
  }else{
    alert("dealer won: "+ dealerValue);
  }
  if((shuffled.length-card_num)<10){ // shuffleDeck?
    shuffle(deck, shuffled);
    alert("Deck shuffling");
    card_num = 0;
    value = 0;
  }
  deactivateBtn('btn_bet', false);  // activate btn bet again
  //alert(`playerValue: ${playerValue}\n dealerValue: ${dealerValue}`)
  // return compare playerValue and dealerValue
}
function addCard(place_id){ // deal card to player or dealer
  if(place_id=="hidden"){ // add hidden card(only once and for dealer)
    let place = document.getElementById("dealerCards");
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("id", "hidden");
    place.appendChild(card);
    hidden = shuffled[card_num][0];
    hidden_symbol = shuffled[card_num][1];
    card_num++;
  }else{  // if place id == dealer or player
  let place = document.getElementById(place_id);  // create card
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  card.innerHTML ='<img id="symbol-top" class="symbol-top" src= "./images/'+ shuffled[card_num][1] + '.png"/><div id="symbol-num" class="symbol-num">'+shuffled[card_num][0]+'</div><img id="symbol-bottom" class="symbol-bottom" src= "./images/'+ shuffled[card_num][1] + '.png"/>'
  if(place_id=="dealerCards"){      // add for dealer
    dealerValue += cardNumericalValue(shuffled[card_num][0]);
    shuffled[card_num][0]=="A" ? aces_d=true : aces_d=aces_d;
    if(aces_d){
      ace_hard_d = dealerValue+10;
    }else ace_hard_d = dealerValue;
    if(ace_hard_d >21 && dealerValue>21)
    {
      document.getElementById('dealerValue').innerHTML = "Dealer: " + dealerValue;
      end_hand = true;
    }else if(dealerValue==21 || ace_hard_d==21){
      document.getElementById('dealerValue').innerHTML = "Dealer: 21!";
      dealerValue = 21;
      end_hand = true;
    }else
    {// let result = ace_hard < 21 ? ace_hard : playerValue;         // working
      dealerValue = ace_hard_d < 21 ? ace_hard_d : dealerValue;
      document.getElementById('dealerValue').innerHTML = "Dealer: " + dealerValue}     // working with result
    }else{ // add for player
    playerValue += cardNumericalValue(shuffled[card_num][0]);
    shuffled[card_num][0]=="A" ? aces_p=true : aces_p=aces_p;
    if(aces_p){
      ace_hard_p = playerValue+10;
    }else ace_hard_p = playerValue;

    if(ace_hard_p >21 && playerValue>21)
    {
      document.getElementById('playerValue').innerHTML = "Player: " + playerValue;
      deactivateBtn('btn_hit', true);
      deactivateBtn('btn_stand', true);
      showHidden(); // show dealer hidden card after player busted
      gameResult();
    }else if(playerValue==21 || ace_hard_p==21){
      document.getElementById('playerValue').innerHTML = "Player: 21!";
      playerValue=21;
      deactivateBtn('btn_hit', true);
      deactivateBtn('btn_stand', true);
      stand();
    }else
    {
      // let result = ace_hard < 21 ? ace_hard : playerValue;         // working
      playerValue = ace_hard_p < 21 ? ace_hard_p : playerValue;
      document.getElementById('playerValue').innerHTML = "Player: " + playerValue}     // working with result
    }
    value = count(shuffled[card_num][0]);
    card_num++;// pointing to the next card in deck
    place.appendChild(card);
  }
}
function initialDeal(){
  deactivateBtn('btn_bet', true);
  deactivateBtn('btn_hit', false);
  deactivateBtn('btn_stand', false);
  if(notempty){
    playerValue = 0;
    dealerValue = 0;
    aces_p = false;
    aces_d = false;
    ace_hard_p =0;
    ace_hard_d =0;
  let player = document.getElementById("playerCards");
  while (player.firstChild){
  player.removeChild(player.firstChild);
  }
  let dealer = document.getElementById("dealerCards");
  while (dealer.firstChild) {
  dealer.removeChild(dealer.firstChild);
  }
}
  notempty = true;
  addCardinitial('playerCards');
  setTimeout("addCardinitial('playerCards')", 500);
  setTimeout("addCard('dealerCards')", 1000);
  setTimeout("addCard('hidden');", 1500);
  setTimeout(function(){ if(playerValueInitial==21){
    deactivateBtn('btn_hit', true);
    deactivateBtn('btn_stand', true);
    stand();
  }}, 1700)

  // addCardinitial('playerCards');       // without set timeout
  // addCard('dealerCards');
  // addCard('hidden');
  // if(playerValueInitial==21){
  //   deactivateBtn('btn_hit', true);
  //   deactivateBtn('btn_stand', true);
  //   stand();
  // }

}
function initial(){ //  initial conditions - create one unshuffled deck
//   deck = [["2", "heart"], ["2", "diamond"], ["2", "club"] , ["2", "spade"],
//   ["3", "heart"], ["3", "diamond"], ["3", "club"] , ["3", "spade"],
//   ["4", "heart"], ["4", "diamond"], ["4", "club"] , ["4", "spade"],
//   ["5", "heart"], ["5", "diamond"], ["5", "club"] , ["5", "spade"],
//   ["6", "heart"], ["6", "diamond"], ["6", "club"] , ["6", "spade"],
//   ["7", "heart"], ["7", "diamond"], ["7", "club"] , ["7", "spade"],
//   ["8", "heart"], ["8", "diamond"], ["8", "club"] , ["8", "spade"],
//   ["9", "heart"], ["9", "diamond"], ["9", "club"] , ["9", "spade"],
//   ["10", "heart"], ["10", "diamond"], ["10", "club"] , ["10", "spade"],
//   ["10", "heart"], ["10", "diamond"], ["10", "club"] , ["10", "spade"],
//   ["10", "heart"], ["10", "diamond"], ["10", "club"] , ["10", "spade"],
//   ["10", "heart"], ["10", "diamond"], ["10", "club"] , ["10", "spade"],
//   ["10", "heart"], ["10", "diamond"], ["10", "club"] , ["10", "spade"],
//   ["10", "heart"], ["10", "diamond"], ["10", "club"] , ["10", "spade"],
//   ["A", "heart"], ["A", "diamond"], ["A", "club"] , ["A", "spade"],
// ["A", "spade"], ["A", "spade"], ["A", "spade"], ["A", "spade"],
// ["A", "spade"], ["A", "spade"], ["A", "spade"], ["A", "spade"],
// ["A", "heart"], ["A", "diamond"], ["A", "club"] , ["A", "spade"],
// ["A", "spade"], ["A", "spade"], ["A", "spade"], ["A", "spade"]];  // added extra aces_p for testing
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
  card_num = 0;
  value = 0;
  num_of_decks = 4; //default declaration number of decs
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
  //alert(shuffled[cards][0]);
  if(minus.includes(cards)){
    value--;
  }else if(plus.includes(cards)){
    value++;
  }
  //alert(value);
  return value;
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
    return 1;
  }else{return parseInt(card);}
}
function deactivateBtn(btn, on){
  document.getElementById(btn).disabled = on;
};
function addCardinitial(place_id){
  let place = document.getElementById(place_id);  // create card
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  card.innerHTML ='<img id="symbol-top" class="symbol-top" src= "./images/'+ shuffled[card_num][1] + '.png"/><div id="symbol-num" class="symbol-num">'+shuffled[card_num][0]+'</div><img id="symbol-bottom" class="symbol-bottom" src= "./images/'+ shuffled[card_num][1] + '.png"/>'
  shuffled[card_num][0]=="A" ? aces_p=true : aces_p=aces_p;
  playerValue += cardNumericalValue(shuffled[card_num][0]); // AA 1 1
  if(aces_p){
    ace_hard = playerValue+10;  // A 1 1 10
  }else ace_hard = playerValue; // AA 1 1
  document.getElementById('playerValue').innerHTML = "Player: " + ace_hard;
  playerValueInitial = ace_hard;
  value = count(shuffled[card_num][0]);
  card_num++;// pointing to the next card in deck
  place.appendChild(card);
}
