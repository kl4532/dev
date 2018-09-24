function cbmi() //BMI
{
  var kg, cm, bmi, comment;
  kg = document.getElementById('kg').value;
  cm = document.getElementById('cm').value;
  comment = "default";
  if(kg.indexOf(",")!=-1)
    {
      kg=kg.replace(",",".");
    }
  kg= Number(kg);
  cm= Number(cm);
  bmi = kg/((cm*cm)/10000); 
if(Number.isNaN(bmi)==true || bmi<5 || bmi>150)
{
  document.getElementById('bmires').innerHTML ="Ups,"
}else
  {
    document.getElementById('bmires').innerHTML = "Twoje BMI: " + rounder(bmi,2) + " -";
  }
  if(bmi<18.5 && bmi>5)
    {
      comment = " niedowaga";
      document.getElementById('comment').style.color = "orange";
      document.getElementById('comment').innerHTML = comment; 
    }else if(bmi>=18.5 && bmi< 24.99)
      {
        comment = " posiadasz prawidłową wagę, graulacje!";
        document.getElementById('comment').style.color = "green";
        document.getElementById('comment').innerHTML = comment;
      }else if(bmi>=24.99 && bmi< 30)
        {
          comment = " masz nadwagę - pomyśl nad odchudzaniem!";
        document.getElementById('comment').style.color = "orange";
        document.getElementById('comment').innerHTML = comment; 
        }else if(bmi>=30 && bmi<35)
          {
            comment = " I stopień otyłości - czas schudnąć"; document.getElementById('comment').style.color = "red";
        document.getElementById('comment').innerHTML = comment; 
}else if(bmi>=35 && bmi<40)
          {
            comment = " II stopień otyłości - musisz schudnąć!"; document.getElementById('comment').style.color = "red";
        document.getElementById('comment').innerHTML = comment; 
}else if(bmi>=40 && bmi<=150)
          {
            comment = " III stopień otyłości - podejmij leczene natychmiast!"; document.getElementById('comment').style.color = "red";
        document.getElementById('comment').innerHTML = comment; 
}else if(bmi<5 || bmi>150)
  {
    comment = " coś poszło nie tak... sprawdź dane";
    document.getElementById('comment').style.color = "black";
    document.getElementById('comment').innerHTML = comment;
    
  }
  else
    {
        comment = " wprowadź poprawną wartość";
        document.getElementById('comment').style.color = "black";
        document.getElementById('comment').innerHTML = comment; 
}
       
}

function cwhr() // WHR
{
  var cmt, cmb, whr;
  cmt = document.getElementById('cmt').value;
  cmb = document.getElementById('cmb').value;
  cmt = Number(cmt);
  cmb = Number(cmb);
  whr = cmt/cmb; 
  if(whr==Infinity){
    document.getElementById('whrres').innerHTML = "Wypełnij wszystkie pola";
  }else
  if(document.getElementById('man').checked) {
    if((whr>=1 || cmt>100) && whr<5)
      {
        document.getElementById('whrres').innerHTML = "WHR: " + rounder(whr,2) + ", typ otyłości: " + "otyłość brzuszna(typu jabłko)";
      }else if(whr<1 && whr>0) 
        {
          document.getElementById('whrres').innerHTML = "WHR: " + rounder(whr,2) + ", typ otyłości: " + "otyłość pośladkowo-udowa (typu gruszka)";
        }else{
          document.getElementById('whrres').innerHTML = "WHR: " + rounder(whr,2) + ", typ otyłości: " + "coś poszło nie tak... popraw dane";
        }
    
}else if(document.getElementById('woman').checked) {
  if(whr>=0.85 || cmt>0.88)
      {
        document.getElementById('whrres').innerHTML = "WHR: " + rounder(whr,2) + ", typ otyłości: " + "otyłość brzuszna(typu jabłko)";
      }else if(whr<0.85 && whr>0)
        { 
          document.getElementById('whrres').innerHTML = "WHR: " + rounder(whr,2) + ", typ otyłości: " + "otyłość pośladkowo-udowa (typu gruszka)";
        }else{
          document.getElementById('whrres').innerHTML = "Coś poszło nie tak... popraw dane";
        }
}else{
  document.getElementById('whrres').innerHTML = "Wybierz płeć!";
}
}
function rounder(n,k) // Round number
{
    var factor = Math.pow(10, k+1);
    n = Math.round(Math.round(n*factor)/10);
    return (n/(factor/10));
}
