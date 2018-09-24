var check=false;
var resx=0;
var reso=0;
var end =false;
function appear(id) // check if id box is empty
{
	if(check==false)
	{
		if(document.getElementById(id).innerHTML=="")
		{
		document.getElementById(id).innerHTML = "X";
		check=true;
		win("X");
		}
	}else
	{
		if(document.getElementById(id).innerHTML=="")
		{
		document.getElementById(id).innerHTML = "O";
		check=false;
		win("O");
		}
	}
}
function win(p) // check who win
{ 
	var c=0;
	for(var i=1; i<10; i++)	
	{
		if(document.getElementById('b'+i).innerHTML=="")
		{
			c++;
		}
	}
	if(c>=0)  // check if draw(no empty box)
	{// if not draw -> crazy long condition !@!?*/>
		if((document.getElementById('b1').innerHTML==p && 	//horizontal 
			document.getElementById('b2').innerHTML==p && 
			document.getElementById('b3').innerHTML==p) || 
			(document.getElementById('b4').innerHTML==p && 
			document.getElementById('b5').innerHTML==p && 
			document.getElementById('b6').innerHTML==p) || 
			(document.getElementById('b7').innerHTML==p && 
			document.getElementById('b8').innerHTML==p && 
			document.getElementById('b9').innerHTML==p) ||
			(document.getElementById('b1').innerHTML==p && 	//veritical
			document.getElementById('b4').innerHTML==p && 
			document.getElementById('b7').innerHTML==p) || 
			(document.getElementById('b2').innerHTML==p && 
			document.getElementById('b5').innerHTML==p && 
			document.getElementById('b8').innerHTML==p) || 
			(document.getElementById('b3').innerHTML==p && 
			document.getElementById('b6').innerHTML==p && 
			document.getElementById('b9').innerHTML==p) ||
			(document.getElementById('b1').innerHTML==p && //cross1
			document.getElementById('b5').innerHTML==p &&
			document.getElementById('b9').innerHTML==p) ||
			(document.getElementById('b3').innerHTML==p && // cross2
			document.getElementById('b5').innerHTML==p && 
			document.getElementById('b7').innerHTML==p)) //end of cond
		{
			alert( p +" wins");
			end=true;
			clear();
			if(p=="X")
			{
				document.getElementById('Xp').innerHTML = ++resx ;
			}else
			{
				document.getElementById('Op').innerHTML = ++reso ;
			}

		}
	}
	if(c==0 && end==false)
		{
		clear();
		alert("draw...");
		}
		end=false;
}
function clear() // clear all boxes - reset game
{
	for(var i=1; i<10; i++)
		{
		document.getElementById('b'+i).innerHTML="";
		}
}
function mode(id)
{
	var html;
	var dcontent= document.createElement("div");
    dcontent.id = "dc";
	if(id=='two')
	{  
    html="<div class='frame'>X:<span id ='Xp'>0</span>&nbsp &nbsp O:<span id ='Op'>0</span><div class='main'><div onclick='appear(&#39;b1&#39;)' id='b1' class='fields'></div><div onclick='appear(&#39;b2&#39;)' id='b2' class='fields'></div><div onclick='appear(&#39;b3&#39;)' id='b3' class='fields'></div><div onclick='appear(&#39;b4&#39;)' id='b4' class='fields'></div><div onclick='appear(&#39;b5&#39;)' id='b5' class='fields'></div><div onclick='appear(&#39;b6&#39;)' id='b6' class='fields'></div><div onclick='appear(&#39;b7&#39;)' id='b7' class='fields'></div><div onclick='appear(&#39;b8&#39;)' id='b8' class='fields'></div><div onclick='appear(&#39;b9&#39;)' id='b9' class='fields'></div></div></div>"
    document.body.appendChild(dcontent);
    $(html).appendTo("#dc");
	}else if(id=='one')
	{
		sayhi();
		html="<div class='frame'>X:<span id ='Xp'>0</span>&nbsp &nbsp O:<span id ='Op'>0</span><div class='main'><div onclick='appear(&#39;b1&#39;)' id='b1' class='fields'></div><div onclick='appear(&#39;b2&#39;)' id='b2' class='fields'></div><div onclick='appear(&#39;b3&#39;)' id='b3' class='fields'></div><div onclick='appear(&#39;b4&#39;)' id='b4' class='fields'></div><div onclick='appear(&#39;b5&#39;)' id='b5' class='fields'></div><div onclick='appear(&#39;b6&#39;)' id='b6' class='fields'></div><div onclick='appear(&#39;b7&#39;)' id='b7' class='fields'></div><div onclick='appear(&#39;b8&#39;)' id='b8' class='fields'></div><div onclick='appear(&#39;b9&#39;)' id='b9' class='fields'></div></div></div>"
    document.body.appendChild(dcontent);
    $(html).appendTo("#dc");
		
		}
}
function appearCpu(id) // check if id box is empty
{
	if(check==false)
	{
		if(document.getElementById(id).innerHTML=="")
		{
		document.getElementById(id).innerHTML = "X";
		check=true;
		win("X");
		}
	}else
	{
		if(document.getElementById(id).innerHTML=="")
		{
		document.getElementById(id).innerHTML = "O";
		check=false;
		win("CO");
		}
	}
}
function sayhi()
{alert("hi");
	}
