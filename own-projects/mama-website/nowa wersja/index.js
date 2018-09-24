$( document ).ready(function() {
  menu("home");
});
function menu(name){
  $( "#content" ).empty();
  var html;
switch(name)
    {
  case "home": //HOME
{   
  html="<br><span class='logo'><img style='width: 60%;' src='/images/logo.png'></span>";
   $(html).hide().appendTo("#content").fadeIn(3000);
  //var arr = ["<span style='width:20%;' class='headanim'>Dieta</span>", "<span style='width:10%;' class='headanim'>Uroda</span>","<span style='width:20%;'class='headanim'>Zdrowie</span>"];
 //html = "<span class='headanim'>Dieta</span><span class='headanim'>Zdrowie</span><span class='headanim'>Uroda</span>";
  for(var i=0; i<6; i++)
      {
      $(arr[i]).appendTo("#content"); 
      }
 $("span.headanim").each(function(index) {
  $(this).delay(400*index).fadeIn(700);
});

    //$(html).hide().appendTo("#content").fadeIn("slow");
  break;
  
    
}
  case "sport": //SPORT
{
html="<div id='sport'> <h2> Ruch to zdrowie!</h2> <img style='float:right; border:4px solid rgba(0,128,255, 0.5); heigth: 30%; width: 22%;margin-left:2%; margin-right:2%;' src='/images/DSC00071.jpg'> <p> Moja <i>przygoda</i> z bieganiem rozpoczęła się 7 lat temu i trwa nadal. Istotną przyczyną podjęcia decyzji o bieganiu była mnogość korzyści wynikających z tego cudownego zjawiska. Tak to nazywam dosłownie. Walory zdrowotne są nieocenione. Jedne z wielu pozytywnych efektów to: </p> <ul class='list'> <li>mocniejszy układ kostny (ważne dla mnie, kobiety 50+, zabezpiecza przeciwko osteoporozie)</li> <li>naturalnie wzmocniony układ mięśniowy</li> <li>biegacze znacznie rzadziej zapadają na chorobę wieńcową (mają niższe ciśnienie tętnicze i są mniej <i>otłuszczeni</i> )</li> <li>mam zwiększoną wydolność oddechową, nie dostaję zadyszki</li> </ul> <img style='float:left; border:4px solid rgba(0,128,255, 0.5); width: 16%; margin-left:2%; margin-right:2%;' src='/images/DSC_0035.jpg'><p>Wiele jest efektów zdrowotnych i nowe są odkrywane. Dla mnie ważne są przede wszystkim aspekty psychiczne. Wydzielają się endorfiny, zwane popularne <i>hormonami szczęścia</i>, to dzięki ich opioidowemu działaniu po bieganiu czuję się weselsza, zrelaksowana i uspokojona, a jednocześnie pobudzona do działania. Nabywam <i>euforii biegacza</i>, które daje mi nowe siły życiowe i radość. Mój dzienny dystans nie jest duży, to tylko parę kilometrów, ale robię to 7 razy w tygodniu. Razem z przygotowaniem zajmuje mi to 50 minut. Tylko tyle, a ileż mam z tego korzyści zdrowotnych i radości życia. Takie małe zjawisko, a tak bardzo raduje moje serce!</p> </div> <div style='clear: left;'> </div> <div style='clear: right;'> </div>";
$(html).hide().appendTo("#content").fadeIn("slow");fgdfg
  break;
}

case "wsk": //WSK
{
html="<div id='BMI'> <h2>BMI</h2> BMI (Body Mass Index) to wskaźnik masy ciała, przeznaczony dla osób dorosłych. Aby obliczyć swój BMI zważ się (najlepiej rano, zanim zjesz śniadanie), zmierz swój wzrost i wstaw te dane poniżej: <br><br> <div id='bmicalc' style='display:inline-block;'> <div class='floating-box'> <div> <span><img style='width: 5%; height: auto;' src='/images/400x400px-kilogram_weight.svg.png'></span> <span><input class= 'txtbox' id='kg' type='text' name='kg'> kg</span> </div> <div> <span class='obj'><img style='width: 5%; height: auto;' src='/images/Height-measurement.png'></span> <span class='obj'><input class= 'txtbox' id='cm' type='text' name='cm'> cm</span> </div> </div> <div class='floating-box'> <div style='position: absolute; margin-top: 1%;' > <span style='font-size: 20px;' id='bmires'></span> <span style='font-size: 20px;' id='comment'></span> </div> <div style='margin-top:18%;'> <button class='button' id = 'bmibtn' onclick='cbmi()'>Oblicz swoje BMI</button> </div> <script> document.getElementById('kg') .addEventListener('keyup', function(event) { event.preventDefault(); if (event.keyCode == 13) { document.getElementById('bmibtn').click(); } }); document.getElementById('cm') .addEventListener('keyup', function(event) { event.preventDefault(); if (event.keyCode == 13) { document.getElementById('bmibtn').click(); } }); </script> </div> </div> </div> <div id='WHR'> <h2>Pomiar obwodu pasa i bioder (waist-hip ratio – WHR)</h2><h4 style='color: red'>(tylko dla osób z BMI powyżej 25!)</h4> <div style='clear: left;'> </div> Do rozpoznania typu otyłości służy tzw. wskaźnik WHR. Wskaźnik ten określa lokalizację nadmiaru tkanki tłuszczowej i pozwala wyróżnić dwa główne typy otyłości: otyłość trzewna (charakterystyczna dla mężczyzn), związana z gromadzeniem tkanki tłuszczowej w jamie brzusznej i górnej części ciała oraz otyłość gynoidalna (pośladkowo-udowa), występująca częściej u kobiet.<br> <h4 style='color: red;'>Uwaga!</h4> <ul> <li> obwód w tali należy mierzyć na wysokości pępka </li> <li> obwód w biodrach należy mierzyć na wysokości wystających krętarzy większych, tzn. Na wysokości spojenia łonowego </li> </div> <br> <div id='bmicalc' style='display:inline-block;'> <div style='width: 40%;' class='floating-box'> <div> <span><img style='width: 10%; height: auto;' src='/images/slimming_toning_slim_weight_losswaist-512.png'></span> <span>Obwód w talii&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input style='width: 30%;'class= 'txtbox' id='cmt' type='text' name='cmt'> cm</span> </div> <div> <span><img style='width: 10%; height: auto;' src='/images/biodra.png'></span> <span>Obwód w biodrach <input style='width: 30%;'class= 'txtbox' id='cmb' type='text' name='cmb'> cm</span> </div> <ul style='list-style-type: none; clear: left; width:100%; margin-left: 45%;'> <li><input type='radio' id='man' name='selector'>mężczyzna</li> <li><input type='radio' id='woman' name='selector'>kobieta</li> <ul> </div> <div class='floating-box'> <div style='position: absolute; margin-top: 1%; width: 100%;' > <span style='font-size: 22px;' id='whrres'></span> <span style='font-size: 22px;' id='comment'></span> </div> <div style='margin-top:18%;'> <button class='button' id = 'whrbtn' onclick='cwhr()'>Oblicz swoje WHR</button> </div> <script> document.getElementById('cmt') .addEventListener('keyup', function(event) { event.preventDefault(); if (event.keyCode == 13) { document.getElementById('whrbtn').click(); } }); document.getElementById('cmb') .addEventListener('keyup', function(event) { event.preventDefault(); if (event.keyCode == 13) { document.getElementById('whrbtn').click(); } }); </script> </div> </div> </div>";
$(html).hide().appendTo("#content").fadeIn("slow");
  break;
}

  case "diety": //DIETY
  {
    adddiety();
  $("div.diety").each(function(index) {
    $(this).delay(100*index).fadeIn(400);
});
    }
  break;
  case "cennik": //CENNIK
    {
      html = "<h2>Cennik</h2><table><tr><th>Usługa</th><th>Cena</th></tr><tr><td>Pierwsza wizyta (obejmuje: analizę składu ciała, wywiad żywieniowy, zalecenia dietetyczne, edukację z zasad prawidłowego odżywiania)</td><td>80zł</td></tr><tr><td>Wizyta + Jadłospis 7-dniowy</td><td>120zł</td></tr><tr><td>Wizyta + Jadłospis 14-dniowy</td><td>170zł</td></tr><tr><td>Wizyta kontrolna (przy wykupieniu diety). Sprawdzenie efektów diety, ponowna analiza składu ciała, ustalenie kolejnych kroków w postępowaniu dietetycznym</td><td>50zł</td></tr><tr><td>Jednorazowa analiza składu ciała z omówieniem wyników</td><td>30zł</td></tr><tr><td>Zakupy z dietetykiem (bez konieczności dokonania zakupów)</td><td>50zł</td></tr><tr></tr><tr><td>Wizyta domowa(z dojazdem do pacjenta)</td><td>100zł</td></tr><tr></tr></table><br><p style='font-size: 18px;color:#b31aff;'>Proszę o wcześniejsze umawianie się na wizytę telefonicznie lub mailowo</p>"  ;
      $(html).hide().appendTo("#content").fadeIn("slow");
    
  break;
      }
  case "wizyta": //WIZYTA
    {
    {html = "<h2>Wizyta</h2><h4><b>Przyjmuję pacjentów w kieleckim Centrum Zdrowia Kobiet <i>KOMED</i> jak również świadczę wizyty domowe.</b></h4><p><i>Pierwsza wizyta</i> trwa 40-60 minut. Zostanie przeprowadzony <b>wywiad  żywieniowy i zdrowotny</b>.  W czasie takiego wywiadu zadam Ci pytania na temat twojego obecnego sposobu żywienia i stylu życia.<br><br>Następnie wykonana zostanie<b> analiza składu ciała</b>, która określi rzeczywistą masę ciała, całkowitą zawartość wody w organizmie, zawartość tkanki tłuszczowej i masę mięśniową. Aby wyniki były dokładne proszę zjedz posiłek najpóźniej 2 godziny przed wizytą, a także przez 12 godzin przed badaniem unikaj kawy i alkoholu oraz  wzmożonej aktywności fizycznej.<br><br>Jeśli posiadasz <b>aktualne wyniki badań </b>przygotuje je na wizytę  (tj. morfologię, cholesterol,trój glicerydy, poziom glukozy). Mogą być potrzebne, zwłaszcza jeżeli na coś chorujesz. Jeśli jeszcze lepiej chcesz przygotować się do wizyty, to podczas rozmowy telefonicznej zapytaj, jakie badania mogą być potrzebne, postaram się podpowiedzieć lub możemy to omówić również na spotkaniu. Wyniki badań są pomocne w diagnostyce i ustaleniu indywidualnego planu żywienia.  <br><br>  <i>Wykorzystując wszystkie uzyskane  podczas wywiadu żywieniowego i  pomiarów informacje ustalimy wspólnie Twój nowy sposób żywienia, który przełoży się na zdrowy styl życia.</i></p><h4>Zasięg świadczonych usług:<br> Kielce, Skarżysko-Kamienna, Starachowice (i okolice)</h4>";
   }   $(html).hide().appendTo("#content").fadeIn("slow");  break;
}
  case "oferta": //OFERTA
 { 
   html = "<h2>Oferta</h2>" + "<p>Uzyskasz ode mnie rzetelne porady dietetyczne i skuteczną pomoc w zakresie żywienia. Wspieram osoby chcące zmienić swój sposób odżywiania. Moje doświadczenie zdobyte w ciągu 30 lat pracy w zawodzie dietetyka zmienią Twój sposób żywienia na zdrowszy, niż ten dotychczasowy. Spróbuj i uwierz, że bez wyrzeczeń można zdrowiej żyć. Zapraszam do zapoznania się z moją ofertą oraz tym, czym jest prawidłowe żywienie i dlaczego jest tak ważne w naszych życiu.</p>" + "<p><br>Zakres moich konsultacji:</p>" + "<ul><li>skuteczna dieta odchudzająca</li><li>dieta obniżająca poziom cholesterolu</li><li>dieta w ciąży</li><li>dieta w cukrzycy insulino zależnej</li><li>dieta regulująca prawidłowy poziom cukru</li><li>dieta w nadciśnieniu</li><li>dieta bezglutenowa</li><li>inne diety w chorobach,  np. w dnie moczanowej, chorobach żołądka i dwunastnicy, tarczycy, wątroby i trzustki, </li></ul>"
   $(html).hide().appendTo("#content").fadeIn("slow");
  break;
 }
  case "o_mnie": //O MNIE
{
  html = "<img style="+"'border: 2px solid green; heigth: 30%; width: 22%; float: right; margin-right: 1%;'" + "src="+"'/images/mama.png'>"
  + "<h2>O mnie</h2>" + "<h4>Wykształcenie</h4>" + "<p>Jestem mgr inż. żywienia człowieka, nauk konsumenckich i technologii żywności, a także absolwentką Medycznego Studium Zawodowego, wydz. Dietetyki w Krakowie. Ukończyłam  SGGW, wydz. Nauk o Żywieniu Człowieka i Konsumpcji, a także Akademię Rolniczą, wydz. Technologii Żywności w Krakowie.<br><br> Ukończyłam również kształcenie podyplomowe na kierunku Poradnictwo dietetyczne- postępy w żywieniu człowieka w Instytucie Żywności i Żywienia w Warszawie. Członkini Polskiego Stowarzyszenia Dietetyków.</p>" + "<h4>Doświadczenie</h4>" + "<p>Od wielu lat jestem uczestnikiem Kongresów, szkoleń i wykładów dot. żywności, terapii żywieniowej i nowoczesnych trendów w żywieniu. Specjalizuję się w zakresie leczenia nadwagi i otyłości, a także chorób wynikających z wadliwego odżywiania dzieci i dorosłych. Jestem również dietetykiem klinicznym. Swoje doświadczenie zawodowe zdobywałam pracując w Specjalistycznym Szpitalu Dziecięcym i Poradni Endokrynologicznej oraz Zakładzie Opiekuńczo-Leczniczym w Kielcach. Od kilkunastu lat pracuję również jako nauczyciel dietetyki, pozwala mi to na stały kontakt z tą dziedziną nauki oraz stałe dokształcanie w tym zakresie. Sama prowadząc zdrowy styl życia, jestem dobrym przykładem na to, że bez wyrzeczeń moje samopoczucie i zdrowie, mimo 50+, są w doskonałej formie.</p></p><img style="+"'heigth: 30%; width: 50%; '"+"src='/images/001_3.jpg'><img style="+"'heigth: 30%; width: 50%; '"+"src='/images/001_2.jpg'><img style="+"'heigth: 30%; width: 50%; '"+"src='/images/001_5.jpg'><img style="+"'heigth: 30%; width: 50%; '"+"src='/images/001_6.jpg'>";
  $(html).hide().appendTo("#content").fadeIn("slow"); // tekst
  break;
}
 case "pobierz": //OFERTA
 { 
   html = "<a href='/documents/dzyw.pdf'>Dzienniczek żywieniowy</a>"
   $(html).hide().appendTo("#content").fadeIn("slow");
  break;
 }
    
}

}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
 function adddiety()
    {
    var arr=["<a href='#Dtodchudz' onclick=\"f1('#Dtodchudz')\"><div class='diety'>Dieta odchudzająca</div></a>",
            "<a href='#Dtchol' onclick=\"f1('#Dtchol')\"><div class='diety'>Dieta obniżająca poziom cholesterolu</div></a>",
             "<a href='#Dtciaz' onclick=\"f1('#Dtciaz')\"><div class='diety'>Dieta w ciąży</div></a>",
             "<a href='#Dtcukr' onclick=\"f1('#Dtcukr')\"><div class='diety'>Dieta w cukrzycy insulino zależnej</div></a>",
             "<a href='#Dtnt' onclick=\"f1('#Dtnt')\"><div class='diety'>Dieta w nadciśnieniu tętniczym</div></a>",
             "<a href='#Dtbg' onclick=\"f1('#Dtbg')\"><div class='diety'>Dieta bezglutenowa</div></a>",
             "<a href='#Dtwdm' onclick=\"f1('#Dtwdm')\"><div class='diety'>Dieta w dnie moczanowej</div></a>"
            ];
    $("<h2>Diety</h2>").appendTo("#content");
    for(var i=0; i<6; i++)
      {
      $(arr[i]).appendTo("#content");
      }
    }
 function f1(id){ 
      var html;
   var dcontent= document.createElement("div");
    dcontent.id = "dc";
    switch(id)
         {
       case "#Dtodchudz": // #Dtodchudz
         {
           $( "#dc" ).empty();
           html="<div id='Dtodchudz'> <h2>Dieta odchudzająca</h2> <img style='float: right; width: 25%; heigth: 25%;' class='dietimg' src='/images/weight-loss-image01.png'> <p>Otyłość jest chorobą ogólnoustrojową. Ludzie tyją, ponieważ pobierają znacznie więcej energii z pożywienia, niż potrzebują do prawidłowego funkcjonowania. Nadmiar energii gromadzi się w organizmie w postaci tkanki tłuszczowej. Przyczyną otyłości może być wiele czynników, najważniejsze z nich to: rodzinny, zaburzenia hormonalne i środowiskowe. Powikłania otyłości są znane, co zrobić aby do nich nie doszło? Należy zmienić sposób żywienia i styl życia. Zacznij już od dziś, nie czekaj do jutra. <b>Pamiętaj drogi Pacjencie- nie ma diety cud, jest odpowiedni sposób odżywiania. </b> Wskażę Ci, jak skutecznie zmniejszyć nadmiar zbędnych kilogramów, a efektem tego będzie Twoje dobre zdrowie i znakomite samopoczucie! Za pomocą analizatora składu ciała, dokonam następujących pomiarów antropometrycznych:</p> <ul class='list'> <li>masy tkanki tłuszczowej</li> <li>procentowej zawartości tkanki tłuszczowej</li> <li>masy tkanki mięśniowej</li> <li>całkowitej zawartości wody w organizmie (woda zewnątrzkomórkowa, woda wewnątrzkomórkowa)</li> <li>beztłuszczowej masy ciała</li> <li>masy mineralnej kości</li> <li>wskaźnika trzewnej tkanki tłuszczowej</li> <li>wskaźnika podstawowej przemiany materii</li> <li>wieku metabolicznego</li> </ul> <div style='clear:right;'> <img style='float: left; width: 25%; heigth: 25%;' class='dietimg' src='/images/slide_04.png'> <p> Znajomość ww. parametrów i odpowiednia dieta, są najlepszym sposobem na bezpieczną, prawidłową i trwałą utratę zbytecznych kilogramów.</p> <p> Analizator działa w oparciu o nieinwazyjną technologię analizy składu masy ciała – bioimpedancję elektryczną (BIA) polegającą na pomiarze oporu elektrycznego poszczególnych tkanek organizmu, co w efekcie dostarcza danych ilościowych o tkance tłuszczowej, tkance mięśniowej, tkance kostnej i beztłuszczowej masie ciała. Analizator TANITA spełnia wymagania europejskiej dyrektywy NAWI, odnoszącej się do systemu ważenia. </p> <div style='clear:right;'> </div> ";
         }
         break;
       case "#Dtchol": // #Dtchol
         {$( "#dc" ).empty();
           html="<div id='Dtchol'> <h2>Dieta obniżająca poziom cholesterolu</h2> <img style='float: left; width: 25%; heigth: 25%;' class='dietimg' src='/images/HealthyHeart.png'> <p><br>Cholesterol to substancja tłuszczowa obecna we wszystkich komórkach i krwi. Konieczny jest dla utrzymania zdrowia, ale zbyt duże jego ilości w organizmie zwiększają ryzyko rozwoju miażdżycy i jej późniejszych powikłań: choroby wieńcowej, zawału serca czy udaru mózgu. Z cholesterolem (podobnie jak z ludźmi) jest tak, że jest <i>dobry</I> – HDL (z ang. high density lipoproteins) i <i>zły</i> – LDL (z ang. low density lipoproteins). Ludzie, którzy jedzą w nadmiarze produkty bogate w tłuszcze zwierzęce (wyjątek stanowi tłuszcz ryb) są najbardziej narażeni na wysoki poziom cholesterolu, właśnie tego <i>złego</i>. <br> <b>Wysoki poziom cholesterolu, powyżej pożądanych wartości stanowi ryzyko miażdżycy, choroby niedokrwiennej serca, zawałów.</b> Ryzyko podwyższonego stężenia cholesterolu stwierdza się często u osób jedzących w nadmiarze tłuszcze zwierzęce (wyjątek stanowi tłuszcz pozyskiwany z ryb). Gdy poziom cholesterolu lekko przekracza normę, pierwsze, co możesz zrobić, to zmienić sposób odżywiania. Często wyniki poprawiają się już po 3 miesiącach stosowania diety hipolipemicznej (antycholesterolowej).Ode mnie uzyskasz informacje, jak jeść i co jeść, by obniżyć poziom cholesterolu. Zaproponuję Ci dietę obniżającą cholesterol. Dieta jest układana indywidualnie dla każdego Pacjenta. Odpowiednio zbilansowana dieta przynosi widoczne i odczuwalne dla zdrowia efekty. <b>Już po 2-3 miesiącach stosowania diety zauważysz w badaniach laboratoryjnych znaczny spadek cholesterolu.</b> </p> <ul class='list'> <p>Aby nie narażać się na choroby wynikające z nadmiaru cholesterolu koniecznie: </p> <li>zmień złe nawyki żywieniowe i styl życia</li> <li>zastosuj dietę ze zwiększoną zawartością tłuszczów roślinnych</li> <li>włącz do jadłospisu razowe pieczywo, kaszę gryczaną, warzywa i owoce</li> <li>ogranicz do minimum tłuszcze zwierzęce, cukier i słodycze</li> </ul> <p>Zmiana stylu życia wiąże się z aktywnością fizyczną, która zmniejszy stres, wyszczupli Twoją sylwetkę i poprawi samopoczucie. Stosowanie <b>diety hipolipemicznej</b>(o niskim poziomie cholesterolu) w naturalny sposób obniży jego poziom i pozwoli Ci zdrowiej żyć. </p> <div style='clear:left;'> </div>";
         }
         break; 
      case "#Dtciaz": // #Dtciaz
         {$( "#dc" ).empty();
           html="<div id='Dtciaz'> <h2>Dieta w ciąży</h2> <img style='float: right; width: 20%; heigth: 25%;' class='dietimg' src='/images/mums-and-dads-pregnant-lady.png'> <p>Zachodzące w organizmie kobiety zmiany związane z ciążą, takie jak wzrost objętości krwi czy powiększanie się macicy w miarę rozwoju dziecka, warunkują stopniowy przyrost masy ciała. Dla optymalnego rozwoju płodu duże znaczenie ma zarówno prawidłowa masa ciała matki przed zapłodnieniem, jak również przyrost masy ciała podczas ciąży. <br> Zapotrzebowanie na energię w I trymestrze ciąży nie zmienia się, dopiero w II i III zwiększa się w stosunku do zapotrzebowania przed ciążą. Istotny jest odpowiedni poziom spożycia głównych składników odżywczych (białka, tłuszczu, węglowodanów, minerałów i witamin). <br><br> <b>Jeśli spodziewasz się dziecka - pamiętaj:</b> <ul class='list'> <li>ważne są 3 główne posiłki i 2 posiłki uzupełniające</li> <li>niekorzystne dla organizmu kobiety ciężarnej jest podjadanie</li> <li>najwięcej energii powinny dostarczać śniadanie i obiad</li> <li>posiłki powinny być spożywane o stałych porach</li> <li>nie należy zapominać o dostarczeniu odpowiedniej ilości płynów</li> <li>różnorodność spożywanych posiłków zapobiega niedoborom pokarmowym, które podczas ciąży często się zdarzają</li> </ul> </p> <div style='clear:right;'> </div> ";}
         break;  
      case "#Dtcukr": // #Dtcukr
         {$( "#dc" ).empty();
           html="<div id='Dtcukr'> <h2>Dieta w cukrzycy insulino zależnej</h2> <img style='width: 30%; heigth: 15%; float:left;' class='dietimg' src='/images/Manage-Diabetes-With-Diet-and-Exercise2-1024x535.png'> <p> Żywienie chorych z cukrzycą insulinozależną nie odbiega od żywienia ludzi zdrowych. Planując jadłospis należy jedynie przestrzegać ilości wymienników węglowodanowych i ich rozkładu na posiłki, w zależności od rodzaju i dawek insuliny. Każdego Pacjenta nauczę, jak to zrobić w prosty sposób. Poznając mechanizm stosowania wymienników węglowodanowych Pacjent unika przewlekłych powikłań w tej chorobie (uszkodzenie wzroku, nerek, miażdżyca tętnic, zaburzenia sercowo-naczyniowe). Ważny jest dobór i ilość spożywanych produktów żywnościowych, przedstawię Ci te zasady w postaci piramidy doboru produktów.</p> <div style='clear:left;'> </div>";}
         break;  
     case "#Dtnt": // #Dtnt
         {$( "#dc" ).empty();
           html="<div id='Dtnt'> <h2>Dieta w nadciśnieniu tętniczym</h2> <img style='width: 20%; heigth: 20%; float: right;' class='dietimg' src='/images/Untitled-3-01.png'> <p>Czy wiesz, że w Polsce na nadciśnienie tętnicze choruje około <b>8 mln osób! </b>To stale rosnące zjawisko i niebezpieczne, ponieważ zagraża ludzkiemu życiu. W nadciśnieniu tętniczym ograniczenie energii do <b>1700-2200 kcal</b> wpływa korzystnie na jego obniżenie. Prosta dieta, która ogranicza w żywieniu <i>złe tłuszcze</i> znacząco normuje ciśnienie, a tym samym przyśpiesza proces zdrowienia. </p> <p>Ważne w diecie są produkty, które obniżają poziom ciśnienia</p> <ul class='list'> <li>do takich prodkuktów zaliczamy: czosnek, estragon, natka pietruszka, koperek, banany, brzoskwinie, czarna porzeczka. Należy je wpisać w codzienny jadłospis każdego, kto ma nadciśnienie tętnicze. Produkty te są ogólnodostępne na rynku i możemy po nie sięgać przez cały rok</li> <li>posiłki powinny być <i>lekkie</i>, nie obciążające przewodu pokarmowego (ogranicz potrawy smażone, ciężkostrawne z dużą zawartością tłuszczów zwierzęcych)</li> <li>ogranicz sól, kawę, napoje typu cola, alkohol, chipsy, produkty kiszone, sery żółte</li> <ul> <p>Redukcja masy ciała sprzyja obniżeniu nadciśnienia, zaproponuję Ci dietę, która będzie prosta w zastosowaniu i przyniesie oczekiwane efekty zdrowotne.</p> <div style='clear:right;'> </div> </div> ";}
         break; 
     case "#Dtbg": // #Dtbg
         {$( "#dc" ).empty();
           html="<div id='Dtbg'> <h2>Dieta bezglutenowa</h2> <img style='float:left; width: 20%; heigth: 20%;'class='dietimg' src='/images/gluten_free.png'> <p>Dietę bezglutenową powinny stosować osoby cierpiące na celiakię, chorobę Duhringa oraz osoby mające alergię lub nadwrażliwość na gluten. <b>Zastosowanie diety bezglutenowej wskazane jest tylko w potwierdzonych przypadkach tych przypadłości.</b> Wykluczenie glutenu powoduje ustąpienie wcześniej opisanych objawów w przypadku alergii a osobom z celiakią pozwala normalnie żyć i dzieciom dobrze się rozwijać.  <br>Osoby zdrowe, które nie mają żadnych z wymienionych wyżej chorób nie powinny wykluczać glutenu z diety bez uzasadnienia. Mąki bezglutenowe mają dużo mniej białka, witamin z grupy B oraz składników mineralnych, jak choćby magnez, żelazo, cynk czy miedź niż ich glutenowe odpowiedniki. W diecie bezglutenowej jest także dużo mniej błonnika pokarmowego, a więcej cukru i często też tłuszczu. Może to powodować powstawanie problemów z wypróżnianiem się czy też inne kłopoty z przewodem pokarmowym.</p> <div style='clear:left;'> </div> ";}
         break; 
     case "#Dtwdm": // #Dtwdm
         {$( "#dc" ).empty();
           html="<div id='Dtwdm'> <h2>Dieta w dnie moczanowej</h2> <img style='width: 20%; heigth: 20%;'class='dietimg' src='http://1.bp.blogspot.com/-lLb8JwjkIfI/VSTFdiGW3KI/AAAAAAAAACY/4cw7-jaoz6w/s1600/Gout.png'> <p>Dna (podagra: skaza moczanowa) jest choroba metaboliczną polegająca na odkładaniu się kwasu moczowego we krwi. Jedną z przyczyn jest niewłaściwa dieta, ale również stres, niektóre leki i zwiększony wysiłek fizyczny. Leczenie dietetyczne polega na zastosowaniu diety ubogo purynowej, w której ważny jest dobór produktów i sposób ich przygotowania. Wskażę, jak taką dietę ułożyć i jak ją stosować, aby złagodzić przebieg choroby i uniknąć przewlekłego, wielostawowego zapalenia w tym schorzeniu, któremu towarzyszą np. powikłania ze strony układu krążenia i nerek. </p> <div style='clear:right;'> </div>";}
         break; // 
     // text html
     }
  document.getElementById("content").appendChild(dcontent);
     $(html).hide().appendTo("#dc").fadeIn(100);
 }
