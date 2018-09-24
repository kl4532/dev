function checkRadio(){
var yrb = document.getElementById("radioYes").checked;
var nrb = document.getElementById("radioNo").checked;
var instrument = document.getElementById("instrument");
if(yrb){
    instrument.innerHTML = '<div><input id="instrument-name" type="text" name="name" required placeholder="Enter instrument you play"></div>';
}else if(nrb)
  {
    instrument.innerHTML = '<div>You should start!</div>'
  }
}
function checkSelect(){
  var select = document.getElementById("dropdown").value;
  var band = document.getElementById("band");
  switch(select)
    {
          case "Pop":
        band.innerHTML = '<divid="band"class="colRight"><input type="checkbox" id="Bieber" name="feature" value="Bieber"/><label for= "Bieber">Bieber</label><br><input type="checkbox" id="Gumowy Marcepan" name="GM" value="GM"/><label for= "GM">Gumowy Marcepan</label><br><input type="checkbox" id="beatles" name="feature" value="beatles"/><label for= "beatles">The Beatles</label><br><input type="checkbox" id="TaTu" name="feature" value="TaTu"/><label for= "TaTu">TaTu</label><br>';
      break;
        case "Rock":
        band.innerHTML = '<divid="band"class="colRight"><input type="checkbox" id="GJ" name="GJ" value="GJ"/><label for= "GJ">Geronimo Jackson</label><br><input type="checkbox" id="DS" name="DS" value="DS"/><label for= "DS">Drive Shaft</label><br><input type="checkbox" id="LZ" name="LZ" value="LZ"/><label for= "LZ">Led Zeppelin</label><br><input type="checkbox" id="Машина времени" name="Машина времени" value="Машина времени"/><label for= "Машина времени">Машина времени</label><br>';
        break;
        case "Electronic":
        band.innerHTML = '<divid="band"class="colRight"><input type="checkbox" id="PG" name="PG" value="PG"/><label for= "PG">Prodigy</label><br><input type="checkbox" id="DP" name="DP" value="DP"/><label for= "DP">Daft Punk</label><br><input type="checkbox" id="OZ" name="OZ" value="OZ"/><label for= "OZ">Overloaded живот</label><br><input type="checkbox" id="JD" name="JD" value="JD"/><label for= "JD">Jabadabadu</label><br>';
        break;
        case "Classical":
        band.innerHTML = '<divid="band"class="colRight"><input type="checkbox" id="Ch" name="Ch" value="Ch"/><label for= "Ch">Fryderyk Chopin</label><br><input type="checkbox" id="D" name="D" value="D"/><label for= "D">Antonin Dvorak</label><br><input type="checkbox" id="" name="St" value="St"/><label for= "St">Eric Satie</label><br><input type="checkbox" id="RS" name="RS" value="RS"/><label for= "RS">Robert Schuman</label><br>';
        break;
  default:
    }
}
