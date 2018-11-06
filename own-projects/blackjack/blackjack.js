function hit() {
    addCard();
}
function addCard() {
  let playerCards = document.getElementById('playerCards');
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  card.innerHTML ='<img id="symbol-top" class="symbol-top" src= "./images/default.png"/><div id="symbol-num" class="symbol-num">1d</div><img id="symbol-bottom" class="symbol-bottom" src= "./images/default.png"/>'
  playerCards.appendChild(card);
}
