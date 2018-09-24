
function convertToRoman(num) {
  var digits = num.toString().split("");
  var spl_arr = [];
var zero ="0";
  var x=0;
  var y="";
  digits.reverse();
for(var i=0; i<digits.length; i++)
 {
     spl_arr.push(digits[i] + "0".repeat(i));
   
  }
  spl_arr.reverse();
  
  for(i=0; i<spl_arr.length; i++)
    {
      if(spl_arr[i]>999)
        {
          while(x<spl_arr[i])
            {
              x+=1000;
              y+="M";
            }
        }else if(spl_arr[i]>99)
          {
           switch(spl_arr[i])
             {
               case "100":
                 y+="C";
                 break;
               case "200":
                 y+="CC";
                 break;
               case "300":
                 y+="CC";
                 break;
               case "400":
                 y+="CD";
                 break;
               case "500":
                 y+="D";
                 break;
               case "600":
                 y+="DC";
                 break;
               case "700":
                 y+="DCC";
                 break;
               case "800":
                 y+="DCCC";
                 break;
               case "900":
                 y+="CM";
                 break;
               default: 
                 y+="huj";
                 break;
             }
          }else if(spl_arr[i]>9)
             {
               switch(spl_arr[i])
             {
               case "10":
                 y+="X";
                 break;
               case "20":
                 y+="XX";
                 break;
               case "30":
                 y+="XXX";
                 break;
               case "40":
                 y+="XL";
                 break;
               case "50":
                 y+="L";
                 break;
               case "60":
                 y+="LX";
                 break;
               case "70":
                 y+="LXX";
                 break;
               case "80":
                 y+="LXXX";
                 break;
               case "90":
                 y+="XC";
                 break;
               default: 
                 y+="";
                 break;
             }
             }
               else if(spl_arr[i]<=9)
             {
              switch(spl_arr[i])
             {
               case "1":
                 y+="I";
                 break;
               case "2":
                 y+="II";
                 break;
               case "3":
                 y+="III";
                 break;
               case "4":
                 y+="IV";
                 break;
               case "5":
                 y+="V";
                 break;
               case "6":
                 y+="VI";
                 break;
               case "7":
                 y+="VII";
                 break;
               case "8":
                 y+="VIII";
                 break;
               case "9":
                 y+="IX";
                 break;
               default: 
                 y+="";
                 break;
             }
             }
          }
  return y;
    }
  

convertToRoman(509);

