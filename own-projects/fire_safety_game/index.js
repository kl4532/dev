
let frame = document.querySelector("#frame");   // frame for all divs
let qAndA = document.createElement("div");     // create qaa div need to be global
qAndA.setAttribute("class", "qAndA");
let correctAnswer = document.createElement("div");     // ditto
correctAnswer.setAttribute("class", "correctAnswer");
let saved=0, death=0, empty =0, saved1=0, death1=0, empty1=0, saved2=0, death2=0, empty2=0;
let windowsNumber=0;
let board = [], arr_qa = [];
let current;
let onePlayer = true;  // one player as default
let firstPlayer = true;  // firstPlayer starts a game
const GAMEINFO = "Uratuj ludzi z płonącego budynku. Przeszukaj wszystkie pomieszczenia klikając na okna i odpowiadaj na pytania. Powodzenia!";
let data_array = [["Która z gaśnic jest najlepsza do gaszenia pożarów metali lekkich?","proszkowa", "śniegowa", "pianowa", "proszkowa"],
["Dwutlenek węgla jest gazem:", "lżejszym od powietrza" ,"cięższym od powietrza", "o takim samym ciężarze jak powietrze", "cięższym od powietrza"],
["Lekka woda to:", "środek pianotwórczy niezbędny do wytwarzania piany lekkiej",
"nowoczesny wypełniacz poduszek amortyzujących upadek ludzi podczas ich ewakuacji z wyższych kondygnacji budynku","środek gaśniczy bardzo skuteczny przy gaszeniu pożarów grupy B",
 "środek gaśniczy bardzo skuteczny przy gaszeniu pożarów grupy B"],
 ["Inhibitor to związek chemiczny używany w środkach gaśniczych który powoduje:", "spowolnienie procesu spalania",
 "obniża stężenie tlenu w strefie spalania", "przyśpiesza proces utleniania", "spowolnienie procesu spalania"],
 ["Minimalną pojemność gaśnicy reguluje:", "Zarządzenie KG PSP", "Wytyczne CNBOP", "Polska Norma", "Polska Norma"],
 ["Elektryczność statyczna powstaje w wyniku:", "przeciążenia instalacji elektrycznej", "przepływu podczas wyładowania atmosferycznego",
 "gromadzenia się ładunków elektrycznych podczas tarcia materiałów dielektrycznych" ,"gromadzenia się ładunków elektrycznych podczas tarcia materiałów dielektrycznych"],
 ["Klapa dymowa jest to urządzenie służące do:", "usuwania dymu i gazów pożarowych z obiektów budowlanych", "zamykania przewodów wentylacyjnych i ich zabezpieczania",
 "zatrzymania dymów w przewodach kominowych", "usuwania dymu i gazów pożarowych z obiektów budowlanych"],
 ["Do wytwarzania i podawania piany średniej służy:", "prądownica pianowa",  "wytwornica pianowa", "agregat pianotwórczy", "wytwornica pianowa"],
 ["Sprzęt i urządzenia pożarnicze mogą być użytkowane pod warunkiem uzyskania świadectwa dopuszczenia do stosowania w ochronie przeciwpożarowej, wydanego przez:",
 "CNBOP", "KG PSP", "SGSP", "CNBOP"],
 ["Proces endotermiczny to proces:", "wydzielania ciepła", "pochłaniania ciepła","inhibicji", "pochłaniania ciepła"],
 ["Odporność ogniowa jest to cecha elementu budowlanego mierzona:", "w stopniach Celsjusza", "w kg/m3", "w godzinach"," w godzinach"],
 ["Dominującym działaniem gaśniczym proszków gaśniczych jest:", "chłodzenie", "obniżenie stężenia tlenu", "efekt antykatalityczny", "efekt antykatalityczny"],
 ["Litera X w górnym rzędzie znaków na tablicy ostrzegawczej stosowanej w kolejowym i drogowym transporcie materiałów niebezpiecznych, oznacza:",
 "UWAGA! Promieniowanie X", "środek znajduje się pod stałym ciśnieniem","absolutny zakaz kontaktu danego materiału  z wodą", "absolutny zakaz kontaktu danego materiału  z wodą"],
 ["Najwięcej osób ginie w czasie pożarów z powodu :", "zaczadzenia", "poparzenia", "innych przyczyn", "zaczadzenia"],
 ["Czego nie wolno gasić wodą:", "drewna", "węgla", "sodu", "sodu"],
 ["Benzynę należy gasić:", "pianą"," wodą", "dwutlenkiem węgla", "pianą"],
 ["Ile pełnych butli z gazem propan-butan o pojemności do 11 kg można przechowywać w piwnicy:", "1 butlę", "nie można wcale", "do 2 butli", "nie można wcale"],
 ["Jaki prąd gaśniczy wody powinien być zastosowany przy gaszeniu pożarów materiałów rozdrobnionych:", "prąd zwarty",
 "jednocześnie prąd zwarty i kroplisty", "prąd rozproszony", "prąd rozproszony"],
 ["Środki zwilżające są to środki, które:", "zwiększają napięcie powierzchniowe wody", "obniżają napięcie powierzchniowe wody",
 "zmniejszają opory tłoczenia wody", "obniżają napięcie powierzchniowe wody"],
 ["Które z wymienionych substancji można gasić przy użyciu wody:", "słoma" , "sód", "potas", "słoma"],
 ["Co to jest strefa pożarowa:", "teren działania straży pożarnej", "przestrzeń objęta pożarem", "wydzielona pożarowo przestrzeń", "wydzielona pożarowo przestrzeń"],
 ["Jaki gaz o właściwościach wybuchowych powstaje podczas ładowania akumulatora:", "chlor", "wodór ", "chlorowodór", "wodór "],
 ["Na tablicy informacyjnej (pomarańczowy prostokąt) samochodu przewożącego materiały niebezpieczne w transporcie kolejowym i drogowym zakodowane są w postaci cyfr informacje dotyczące:",
 "odporności ogniowej zbiornika pojazdu", "właściwości przewożonego materiału", "właściwości oraz numer identyfikacyjny przewożonej substancji",
  "właściwości oraz numer identyfikacyjny przewożonej substancji"],
 ["W jakiej najmniejszej odległości od budynku może przebiegać droga pożarowa :", "5 m", "10 m", "25m", "5 m"],
 ["Gaz ziemny jest :", "lżejszy od powietrza", "cięższy od powietrza", "ciężar właściwy gazu ziemnego jest równy ciężarowi  właściwemu powietrza", "lżejszy od powietrza"],
 ["Płonącą odzież na człowieku należy gasić:", "Kocem gaśniczym", "Gaśnicą pianową", "Gaśnicą proszkową", "Kocem gaśniczym" ],
 ["Jeśli poczujesz w pomieszczeniu zapach gazu nie należy:", "oddalać się z zagrożonego pomieszczenia",
 "powiadamiać pogotowia gazowego", "zapalić świeczki i sprawdzić skąd ulatnia się gaz", "zapalić świeczki i sprawdzić skąd ulatnia się gaz"],
 ["Najprostszym sposobem na ugaszenie płonącego oleju na patelni:", "użycie gaśnicy proszkowej",  "użycie koca gaśniczego",  "użycie pokrywki", "użycie pokrywki" ],
 ["Czy strażak ratownik może stwierdzić zgon osoby ratowanej?", "tak", "nie",
 "tak ale tylko w przypadkach np. spopielenia, długotrwałego przebywania pod wodą, dekapitacji, masywnego okaleczenia", "nie"],
 ["Przy oparzeniu wrzącą wodą należy zastosować:", "suchy opatrunek na miejsce oparzenia",
 "schładzanie zimną wodą miejsca oparzenia", "wodę utlenioną", "schładzanie zimną wodą miejsca oparzenia"],
 ["Zaniedbanie czyszczenia kanałów kominowych (spalinowych) może być przyczyną śmierci poprzez:",
  "zatrucie tlenkiem węgla", "nastąpienie wybuchu", "wybuch pożaru", "zatrucie tlenkiem węgla"],
  ["Ciśnienie 1 bara jest równe:", "10 Mpa", "0,1 Mpa", "1 Mpa", "0,1 Mpa"],
  ["W przypadku oparzenia najlepiej jest: ", "zdezynfekować ranę alkoholem", "długo polewać ranę chłodną wodą", "zastosować opatrunek uciskowy", "długo polewać ranę chłodną wodą"],
  ["Tryskacze służą do:", "szybkiego uruchomienia samochodu gaśniczego",  "gaszenia pożaru", "wykrywania pożaru", "gaszenia pożaru"],
  ["Do czego służy bezpiecznik elektryczny?", "do wyłączenia dopływu prądu wskutek przeciążenia instalacji elektrycznej",
  "do chronienia instalacji przed burzą", "do zabezpieczenia przed porażeniem prądem", "do wyłączenia dopływu prądu wskutek przeciążenia instalacji elektrycznej" ],
  ["Międzynarodowa umowa ADR dotyczy przewozu materiałów niebezpiecznych w transporcie:", "Drogowym", "Kolejowym", "Morskim", "Drogowym"],
  ["Złota godzina", "to czas, w którym strażak uratuje  poszkodowanego", "to czas dojazdu pogotowia ratunkowego",
   "to czas od chwili wypadku do udzielenia pomocy w szpitalu", "to czas od chwili wypadku do udzielenia pomocy w szpitalu"],
  ["Podział cieczy łatwo zapalnych na klasy niebezpieczeństwa pożarowego zależy od:", "ciepła spalania", "temperatury zapłonu" , "granic wybuchowości", "temperatury zapłonu"],
  ["Wybuch może spowodować:", "metan z powietrzem", "dwutlenek węgla z powietrzem", "wodór z azotem", "metan z powietrzem"],
  ["Czad to :", "tlenek węgla" , "dwutlenek węgla" , "tlenek węgla ze związkami siarki", "tlenek węgla"],
  ["Dolna granica wybuchowości jest cechą charakteryzującą:", "ciecze palne",  "gazy palne", "ciała stałe palne", "gazy palne"],
  ["Pirometrem nazywamy:",  "urządzenie służące do wykrywania substancji toksycznych", "urządzenie sejsmiczno-akustyczne do wykrywania zasypanych ludzi",
  "urządzenie do zdalnego, bezstykowego pomiaru temperatury", "urządzenie do zdalnego, bezstykowego pomiaru temperatury"],
  ["Czy wolno napełniać gazem butle o masie 11kg na stacjach gazu płynnego?", "nie", "tak, jeżeli wykonana jest niezależna instalacja, nie przeznaczona do tankowania pojazdów", "tak", "nie"],
  ["Czy strażacy biorący udział w akcji ratowniczej mają prawo do korzystania dróg prywatnych:", "Tak, za zgodą ich właściciela",
  "Tak i to bez zgody ich właściciela , ale tylko  w zakresie niezbędnym do prowadzenia akcji", "Nie",
  "Tak i to bez zgody ich właściciela , ale tylko  w zakresie niezbędnym do prowadzenia akcji"],
  ["Czy konieczne jest zapewnienie drogi pożarowej co najmniej z dwóch stron budynku ?", "tak", "nie",
  "tak, jeżeli szerokość budynku jest większa niż 60 m", "tak, jeżeli szerokość budynku jest większa niż 60 m"],
  ["Budynki określone jako IN to:", "budynki inwentarskie", "budynki produkcyjno-magazynowe", "budynki mieszkalne", "budynki inwentarskie" ],
  ["Budynek średniowysoki (SW) to:", "powyżej 18 kondygnacji lub 55 m", "od 4 do 9 kondygnacji lub od 25 m do 55 m",
  "powyżej 4 kondygnacji do 9 kondygnacji włącznie lub od 12m do 25m włącznie", "powyżej 4 kondygnacji do 9 kondygnacji włącznie lub od 12m do 25m włącznie"],
  ["Jaki jest minimalny czas działania oświetlenia ewakuacyjnego?", "2 godziny", "3 godziny", "4 godziny", "2 godziny"]]; // questions
let shuffled_data_array = []; // new array for questions prepared for shuffling
function rand(min, max){  // random number generator
  return Math.floor(Math.random()*(1+max-min))+min;
}
function output(stat, qAndA, GAMEINFO, saved, death, empty, players_stat){  // output of actual game status
  if(!onePlayer){     // stat for two players
    stat.innerHTML = GAMEINFO;
    frame.appendChild(stat);
    players_stat.innerHTML = "<div id='player1'>Gracz 1</div>"+
    `<ul><li class='dotSaved'>Ocaleni: ${saved1}</li><li class='dotDeath'>Ofiary: ${death1}</li><li class='dotEmpty'>Pusty: ${empty1}</li></ul>`+
    "<div id = 'player2'>Gracz 2</div>"+
    `<ul><li class='dotSaved'>Ocaleni: ${saved2}</li><li class='dotDeath'>Ofiary: ${death2}</li><li class='dotEmpty'>Pusty: ${empty2}</li></ul>`;
    stat.appendChild(players_stat);
    if(firstPlayer){
      document.getElementById('player1').style.backgroundColor = "yellow";
    }else document.getElementById('player2').style.backgroundColor = "yellow";
  }else{    // stat for one player
    stat.innerHTML = GAMEINFO + `<ul><li class='dotSaved'>Ocaleni: ${saved}</li><li class='dotDeath'>Ofiary: ${death}</li><li class='dotEmpty'>Pusty: ${empty}</li></ul>`;
    frame.appendChild(stat);
    stat.style.left ="300px";  // if one player -> move div to the left(bcs div with quesions is thinner)
    stat.appendChild(players_stat);
  }
}
function buildingConstructor(players){                  // setting dimensions of container for different amount of players
  let container = document.getElementById('container');
  switch (players){
    case 1:
      container.style.width = "280px";    // 4x4 //280x500px;
      container.style.height = "500px";
      windowsNumber=16;
      break;
    case 2:
      container.style.width = "350px";    // 5x5
      container.style.height = "600px";
      windowsNumber=25;
      onePlayer=false;
      break;
    default:
  }
}
function shuffle(arr1, arr2){   // shuffling arr1 to create arr2, arr1 is still available unchanged after function proceeded
  let temp = arr1.slice(0); // clone arr1 to save it, temp will be killed
    while(arr2.length<48)
      {
        let pick = rand(0, temp.length-1);
        arr2.push(temp[pick]);
        if(temp.length !== 0)
        {
            temp.splice(pick, 1);
        }
      }
}
function init(players){        // initialization of the game
  let intro = document.getElementById('intro');
  intro.remove();                                 //removing intro buttons and text
  let block = document.createElement("div");      // creating block container for windows with questions
  block.setAttribute("class", "container");
  block.setAttribute("id", "container");
  frame.appendChild(block);
  buildingConstructor(players);   // checking how many players in game
  shuffle(data_array, shuffled_data_array); // shuffling questions to place them randomly
  for(let i=0; i<windowsNumber; i++){
    let isPersonInside = false;
    // 48 questions data_array[0-47], data_array[i][1-3] - possible answers, data_array[i][4] - correct answer
    if(rand(0,5)>0){   // ratio of person rand(0,5)= 1/6(16.667%) of rooms are empty
      isPersonInside = true;}else isPersonInside = false;
    let answers = [shuffled_data_array[i][1], shuffled_data_array[i][2], shuffled_data_array[i][3]];
    arr_qa.push([shuffled_data_array[i][0], shuffled_data_array[i][4], answers, isPersonInside]);
    board.push([i,arr_qa[i][0],arr_qa[i][1],arr_qa[i][2],arr_qa[i][3]] ); //pushing index of question and the question and the answer
  }
  for(let i = 0; i < board.length; i++){
    //create a div HTML element called cell
    let cell = document.createElement("div");
    //set its CSS class to cell
    cell.setAttribute("class", "cell");
    cell.setAttribute("id", i);
          //add the div HTML element to the stage
    block.appendChild(cell);
          //handle click
    cell.addEventListener("click", clickHandler);
    }
  let entrence = document.createElement("img");
  entrence.setAttribute("class", "entrence");
  entrence.src = "./img/door.png";
  block.appendChild(entrence);

  let stat = document.createElement("div");        // create status div
  stat.setAttribute("class", "stat");
  stat.setAttribute("id", "stat");
  //output(stat, qAndA, GAMEINFO, saved, death, empty);

  let players_stat = document.createElement("div");        // create status div
  players_stat.setAttribute("class", "players_stat");
  players_stat.setAttribute("id", "players_stat");
  output(stat, qAndA, GAMEINFO, saved, death, empty, players_stat);
                                                   // highlite active player
  document.getElementById('player1').style.backgroundColor = "yellow";
}
function activePL(current){
  if(firstPlayer){                                                    // highlite active player
    document.getElementById('player1').style.backgroundColor = "yellow";
    document.getElementById('player2').style.backgroundColor = "transparent";
    firstPlayer = false;
  }else{
    document.getElementById('player2').style.backgroundColor = "yellow";
    document.getElementById('player1').style.backgroundColor = "transparent";
    firstPlayer = true;}
}
function clickHandler(){
  current = board[this.id];
  qAndA.innerHTML = "<br>" + current[1] + "<br>" +   //asking question - Calculate...
    "<br>"+ "a) " + wrapInAdiv(current[3][0], this.id) +
    "<br>" + "b) " + wrapInAdiv(current[3][1], this.id) +
    "<br>" +  "c) " + wrapInAdiv(current[3][2], this.id);
  stat.appendChild(qAndA);
  if(!onePlayer){activePL(firstPlayer);}
  stat.removeChild(correctAnswer);
}

function wrapInAdiv(value, id){
  return '<span class="answers" onclick="checkAnswer(\''+ value + '\','+ id +')">'+ value + '</span>' + "<br>"; // KURWA!
}
function checkAnswer(value, id){
  curr_window = document.getElementById(id);
  if(current[2]==value){    // check if answer true
    curr_window.removeEventListener("click", clickHandler);
      if(current[4]==true){     //check if person inside
          ++saved;
          firstPlayer ?  ++saved2 : ++saved1;
          output(stat, qAndA, GAMEINFO, saved, death, empty, players_stat);
          curr_window.style.backgroundColor = "green";
          curr_window.style.backgroundImage = "none";
      }else{
          ++empty;
          firstPlayer ?  ++empty2 : ++empty1;
          output(stat, qAndA, GAMEINFO, saved, death, empty, players_stat);
          curr_window.style.backgroundColor = "black";
          curr_window.style.backgroundImage = "none";
      }
  // if true => mark green, deactivate, dont change the player
}else{
    curr_window.removeEventListener("click", clickHandler);
    if(current[4]==true){
      ++death;
      firstPlayer ?  ++death2 : ++death1;
      output(stat, qAndA, GAMEINFO, saved, death, empty, players_stat);
      curr_window.style.backgroundColor = "red";
      curr_window.style.backgroundImage = "none";
    }else{
      ++empty;
      firstPlayer ?  ++empty2 : ++empty1;
      output(stat, qAndA, GAMEINFO, saved, death, empty, players_stat);
      curr_window.style.backgroundColor = "black";
      curr_window.style.backgroundImage = "none";
    }
//  if false => mark black, deactivate, dont change the player
}
if(current[2]!==value){
correctAnswer.innerHTML = "Źle, prawidłowa odpowiedź brzmi: " + current[2];
}else correctAnswer.innerHTML = "Dobrze!";
stat.appendChild(correctAnswer);
if(death+saved+empty==windowsNumber){
  let total = ((saved/(saved+death))*100);
  if(!onePlayer){
    if(death == 0){
      qAndA.innerHTML = "GRAULACJE! Wspólnie ocaliliście wszystkich mieszkańców znajdujących się w budynku :) <br>";
      stat.appendChild(qAndA);
    }else if(saved == 0){
      qAndA.innerHTML = ("Wszyscy potrzebujący pomocy zginęli... <br>￼");
      stat.appendChild(qAndA);
    }else {
      qAndA.innerHTML = ("Wspólnie ocaliliście " + total.toFixed(0) + "% mieszkańców znajdujących się w budynku <br>");
      stat.appendChild(qAndA);
  }
  document.getElementById('player1').style.backgroundColor = "transparent";
  document.getElementById('player2').style.backgroundColor = "transparent";
}else{
  if(death == 0){
    qAndA.innerHTML = "GRAULACJE! Ocaliłeś wszystkich mieszkańców znajdujących się w budynku :) <br>";
    stat.appendChild(qAndA);
  }else if(saved == 0){
    qAndA.innerHTML = ("Wszyscy potrzebujący pomocy zginęli... <br>￼");
    stat.appendChild(qAndA);
  }else {
    qAndA.innerHTML = ("Ocaliłeś " + total.toFixed(0) + "% mieszkańców znajdujących się w budynku <br>");
    stat.appendChild(qAndA);
  }
}
let restart = document.createElement("INPUT");    // add game restart button after finishing game
restart.setAttribute("type", "button");
restart.setAttribute("class", "restart");
restart.setAttribute("id", "restart");
restart.setAttribute("value", "Kliknij aby zagrac ponownie");
restart.setAttribute("onclick", "window.location.reload();");
stat.appendChild(restart);
}
}
