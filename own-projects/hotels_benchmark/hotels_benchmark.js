let text;
function readTextFile(file){
  let rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function ()
    {
      if(rawFile.readyState === 4)
        {
          if(rawFile.status === 200 || rawFile.status == 0)
            {
              text = rawFile.responseText;
            }
        }
    }
  rawFile.send(null);
} // read text from file - do not work in chrome :(
readTextFile('./DataBase.txt');
let array = text.split("\n");
let hotels=[];
function chunk(arr, len){
  var chunks = [];
      i = 0;
  while (i < arr.length) {
    chunks.push(arr.slice(i, i += len));
  }
  return chunks;
}
hotels = chunk(array, 5);
pageHotel("0"); // default info on page load
addPages();
function addPages(){ //pagination
  for(var i=0; i< hotels.length-1; i++){
    let place = document.getElementById("pagination");
    let page = document.createElement("a");
    page.innerHTML = i+1;
    page.setAttribute("onclick", `pageHotel('${i}')`);
    page.setAttribute("class", "pages");
    place.appendChild(page);
  }
}
function pageHotel(num){
  document.getElementById('name').innerHTML = hotels[num][0];//for array num from 0;
  document.getElementById('adress').innerHTML = hotels[num][1];
  document.getElementById('places').innerHTML = hotels[num][2];
  document.getElementById('price').innerHTML = hotels[num][3];
  document.getElementById('description').innerHTML = hotels[num][4];
}
// [[name, adress, places, price, description], ....]
// function Hotel(name, adress, places, price, description) { // why?
//     this.name = name;
//     this.adress = adress;
//     this.places = places;
//     this.price = price;
//     this.description = description;
// }
// var newhotel = new Person("1", "2", "3", "4", "5");
