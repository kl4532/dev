var min=document.getElementById("slength").value;
var sec=0;
var idTime;
var on=false;
var check=0;
function stop()
{
	clearInterval(idTime);
	on=false;
}
function start()
{
	if(!on)
	{
	idTime = setInterval(timeCut, 1000);
	on=true;
	}else
	{
		stop();
	}
}
function timeCut() {
if(min==0&&sec==0)
	{
		
		check++;
		change();
		//stop(); // ZMIANA
	} 
if(sec<10 && sec>0)
{
	document.getElementById("out").innerHTML= min +":"+ "0"+sec;
	sec--
}
	else
	{
		if(sec==0)
		{
			sec="00";
		}
		document.getElementById("out").innerHTML= min +":"+ sec;
		sec--;
		if(sec<0&&min>=0)
		{
			min--;
			sec=59;
		}
		
	}	
}
function add(id)
{	
		document.getElementById(id).value++;
		min=document.getElementById("slength").value;
		sec=0;
}
function sub(id)
{
	var k=document.getElementById(id).value;
	if(k>1)
	{
		document.getElementById(id).value--;
	}
	min=document.getElementById("slength").value;
	sec=0;
}
function change()
{	
	if(check%2 !== 0 )
	{
	document.getElementById("out").style.backgroundColor ="blue";
	min=document.getElementById("blength").value;
	sec=0;
	}else
	{
	document.getElementById("out").style.backgroundColor ="red";
	min=document.getElementById("slength").value;
	sec=0;
		}
}

	
	
	
	
	
	
	
	
