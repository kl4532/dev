let deck, shuffled, card_num, value=0, num_of_decks, ace_hard_p = 0, ace_hard_d=0, ace_soft_p=0, ace_soft_d=0, playerValueInitial, ace_soft = 0;
let dealerValue = 0, playerValue = 0, aces_d = false, aces_p = false, notempty = false, hidden, hidden_symbol;
let bet, balance, i=1000;
initial();
deck = multiply_array(deck, num_of_decks);
shuffle(deck, shuffled);
function showHidden(){
  document.getElementById("hidden").parentNode.removeChild(document.getElementById("hidden")); // remove cover for hidden card
  let place = document.getElementById("dealerCards");
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  card.innerHTML ='<img id="symbol-top" class="symbol-top" src= "./images/'+ hidden_symbol + '.png"/><div id="symbol-num" class="symbol-num">'+hidden+'</div><img id="symbol-bottom" class="symbol-bottom" src= "./images/'+ hidden_symbol + '.png"/>'
  dealerValue += cardNumericalValue(hidden);
  hidden=="A" ? aces_d=true : aces_d=aces_d;
  if(aces_d){
    ace_hard_d = dealerValue+10;
    ace_soft_d = dealerValue;
  }else{
    ace_soft_d = dealerValue;
    ace_hard_d = dealerValue;
  }
  if(ace_soft_d == 21 || ace_hard_d == 21){
    document.getElementById('dealerValue').innerHTML = "Dealer: 21!";
    dealerValue = 21;
  }else document.getElementById('dealerValue').innerHTML = "Dealer: " + (ace_hard_d <= 21 ? ace_hard_d : ace_soft_d);
  value = count(hidden);
  card_num++;// pointing to the next card in deck
  place.appendChild(card);
}
function stand(){ // after player finish, dealing cards for dealer side
  deactivateBtn('btn_stand', true);
  deactivateBtn('btn_hit', true);
  showHidden();
  playerValue = playerValue>playerValueInitial ? playerValue : playerValueInitial; // if player stand after two cards
  ace_hard = 0;
  while((ace_hard_d <= 21 ? ace_hard_d : ace_soft_d)<17){  // add cards till less than 17
    addCard('dealerCards');
    i +=1000;
  }
  gameResult();
}
function showWinner(winnerId){
  if(winnerId=="none"){
    document.getElementById('dealerValue').style.backgroundColor = "transparent";
    document.getElementById('playerValue').style.backgroundColor = "transparent";
  }else if(winnerId=="push"){
    document.getElementById('dealerValue').style.backgroundColor = "orange";
    document.getElementById('playerValue').style.backgroundColor = "orange";
  }else document.getElementById(winnerId).style.backgroundColor = "yellow";
}
function gameResult(){
  dealerValue = (ace_hard_d <= 21 ? ace_hard_d : ace_soft_d);
  playerValue = (ace_hard_p <= 21 ? ace_hard_p : ace_soft_p);
  if((dealerValue>21 || playerValue>dealerValue) && playerValue<=21){
    showWinner('playerValue');
    console.log(`Status: \nd: ${dealerValue}\np: ${playerValue}\npIni: ${playerValueInitial}`);
    balance+=2*bet;
  }else if(dealerValue==playerValue){
    showWinner('push');
    console.log(`Status: \nd: ${dealerValue}\np: ${playerValue}\npIni: ${playerValueInitial}`);
    balance+=1*bet;
  }else{
    showWinner('dealerValue');
    console.log(`Status: \nd: ${dealerValue}\np: ${playerValue}\npIni: ${playerValueInitial}`);  }
  document.getElementById("balance").innerHTML = balance;
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
      ace_soft_d = dealerValue;
    }else{
      ace_soft_d = dealerValue;
      ace_hard_d = dealerValue;
    }
    if(ace_hard_d >21 && ace_soft_d>21)
    {
      document.getElementById('dealerValue').innerHTML = "Dealer: " + ace_soft_d;
    }else if(ace_soft_d == 21 || ace_hard_d == 21){
      document.getElementById('dealerValue').innerHTML = "Dealer: 21!";
      dealerValue = 21;
    }else document.getElementById('dealerValue').innerHTML = "Dealer: " + (ace_hard_d <= 21 ? ace_hard_d : ace_soft_d);     // working with result
    }else{ // add for player
    playerValue += cardNumericalValue(shuffled[card_num][0]);
    shuffled[card_num][0]=="A" ? aces_p=true : aces_p=aces_p;
    if(aces_p){
      ace_hard_p = playerValue+10;
      ace_soft_p = playerValue;
    }else{
      ace_soft_p = playerValue;
      ace_hard_p = playerValue;
    }
    if(ace_hard_p >21 && ace_soft_p>21)
    {
      document.getElementById('playerValue').innerHTML = "Player: " + ace_soft_p;
      deactivateBtn('btn_hit', true);
      deactivateBtn('btn_stand', true);
      playerValue = ace_soft_p;
      showHidden(); // show dealer hidden card after player busted
      gameResult();
    }else if(ace_soft_p==21 || ace_hard_p==21){
      document.getElementById('playerValue').innerHTML = "Player: 21!";
      playerValue=21;
      deactivateBtn('btn_hit', true);
      deactivateBtn('btn_stand', true);
      stand();
    }else document.getElementById('playerValue').innerHTML = "Player: " + (ace_hard_p <= 21 ? ace_hard_p : ace_soft_p);     // working with result
    }
    value = count(shuffled[card_num][0]);
    card_num++;// pointing to the next card in deck
    place.appendChild(card);
  }
}
function initialDeal(){
  showWinner("none");
  bet = parseInt(document.getElementById("bet").value);
  balance = parseInt(document.getElementById("balance").innerHTML);
  console.log(`bet: ${typeof bet}\nbalance: ${typeof balance}`);
  if(bet<=balance && bet>4){
  balance -= bet;
  document.getElementById("balance").innerHTML = balance;
  document.getElementById("dealerValue").innerHTML = "Dealer: 0";
  document.getElementById("playerValue").innerHTML = "Player: 0";
  deactivateBtn('btn_bet', true);
  if(notempty){ // set initial values and clear board if not first deal
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
  notempty = true;  // add with every hand, begining from first
  addCard('playerCards');
  setTimeout("addCardinitial('playerCards')", 500);
  setTimeout("addCard('dealerCards')", 1000);
  setTimeout("addCard('hidden');", 1500);
  setTimeout(function(){ if(playerValueInitial==21){
    deactivateBtn('btn_hit', true);
    deactivateBtn('btn_stand', true);
    playerValue=21;
    stand();
  }}, 1700)
  setTimeout(function(){deactivateBtn('btn_hit', false);  // activate buttons after cards dealed
  deactivateBtn('btn_stand', false);},2000);

}else if(bet<=5){
  alert("Bet has to be greater than 5...");
}else{
  alert("You don't have enough money...");
}
}
function initial(){ //  initial conditions - create one unshuffled deck
  // deck = [
  // ["A", "heart"], ["A", "diamond"], ["A", "club"] , ["A", "spade"],
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
  num_of_decks = 6; //default declaration number of decs
  end = false;
  document.getElementById('balance').innerHTML = "500";
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
  alert(`Card dealed: ${card_num}/${shuffled.length}\nValue: ${value}\nYou are playing with ${num_of_decks} decks`);
}//https://wizardofodds.com/games/blackjack/basics/
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
  playerValue += cardNumericalValue(shuffled[card_num][0]);
  shuffled[card_num][0]=="A" ? aces_p=true : aces_p=aces_p;
  if(aces_p){
    ace_hard_p = playerValue+10;
    ace_soft_p = playerValue;
  }else{
    ace_soft_p = playerValue;
    ace_hard_p = playerValue;
  }
  document.getElementById('playerValue').innerHTML = "Player: " + (ace_hard_p <= 21 ? ace_hard_p : ace_soft_p);
  playerValueInitial = (ace_hard_p <= 21 ? ace_hard_p : ace_soft_p);
  value = count(shuffled[card_num][0]);
  card_num++;// pointing to the next card in deck
  place.appendChild(card);
}
function checkStatus(currentValue, card, aces_x, ace_hard_x, ace_soft_x, id, name){
  currentValue += cardNumericalValue(card);
  card=="A" ? aces_x=true : aces_x=aces_x;
  if(aces_x){
    ace_hard_x = currentValue+10;
    ace_soft_x = currentValue;
  }else{
    ace_soft_x = currentValue;
    ace_hard_x = currentValue;
  }
  if(ace_hard_x >21 && ace_soft_x>21)
  {
    document.getElementById(id).innerHTML = `${name}: ` + ace_soft_x;
    if(currentValue==playerValue)
    {
      deactivateBtn('btn_hit', true);
      deactivateBtn('btn_stand', true);
      currentValue = ace_soft_x;
      showHidden(); // show dealer hidden card after player busted
      gameResult();
    }
  }else if(ace_soft_x== 21 || ace_hard_x == 21){
    document.getElementById(id).innerHTML = `${name}: ` + 21;
    currentValue=21;
    if(currentValue==playerValue){
      deactivateBtn('btn_hit', true);
      deactivateBtn('btn_stand', true);
      stand();
    }
  }else document.getElementById(id).innerHTML = `${name}: ` + (ace_hard_x <= 21 ? ace_hard_x : ace_soft_x);    // working with result
  // checkStatus(playerValue, shuffled[card_num][0], aces_p, ace_hard_p, ace_soft_p, 'playerValue', 'Player');
}
