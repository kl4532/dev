var sum="";
var m=null;
function show(id)
{
	var k = document.getElementById(id).textContent;
	//~ if(sum[sum.length-1]!==k)
	//~ {
	//~ document.getElementById('all').value += k;
	//~ }
	var out = document.getElementById('out').value; 
	if(id!=='minus' && id!=='plus' && id!=='divide' && id!=='multi' && id!=='eq' && id!=='dot' )
	{
		out += k;
	}
}
function clean(id){
	document.getElementById(id).value = '';
	if(id=='all')
	{
		sum="";
	}
}
 function calculator(func)
{

	switch(func)
	{
		case "b0":
		sum+="0";
		document.getElementById('all').value+="0";
		break;
		case "b1":
		sum+="1";
		document.getElementById('all').value+="1";
		break;
		case "b2":
		sum+="2";
		document.getElementById('all').value+="2";
		break;
		case "b3":
		sum+="3";
		document.getElementById('all').value+="3";
		break;
		case "b4":
		sum+="4";
		document.getElementById('all').value+="4";
		break;
		case "b5":
		sum+="5";
		document.getElementById('all').value+="5";
		break;
		case "b6":
		sum+="6";
		document.getElementById('all').value+="6";
		break;
		case "b7":
		sum+="7";
		document.getElementById('all').value+="7";
		break;
		case "b8":
		sum+="8";
		document.getElementById('all').value+="8";
		break;
		case "b9":
		sum+="9";
		document.getElementById('all').value+="9";
		break;
		case "plus":
		check("+");
		break;
		case "minus":
		check("-");
		break;	
		case "divide":
		check("/");
		break;
		case "multi":
		check("*");
		break;
		case "dot":
		check(".");
		break;
	}
	
}
function end()
{	
	//~ alert(sum);
	//~ alert(sum[sum.length-1]);
	document.getElementById('out').value = eval(sum);
	sum = eval(sum);
	document.getElementById('all').value = sum;
	
}
function check(x)
{
	if(sum[sum.length-1]!=="*" && sum[sum.length-1]!=="." && sum[sum.length-1]!=="/" && sum[sum.length-1]!=="-" && sum[sum.length-1]!=="+" && sum!==null)
		{
		sum+=x;
		document.getElementById('all').value+=x;
		}
}
function mem()
{

	if(m==null)
	{
	m = eval(sum);
}else
{
	document.getElementById('out').value = m;
	document.getElementById('all').value += m;
	sum+=m;
	}
}
function memc()
{
	m=null;
}



//~ var sum=0; 
//~ function show(id)
//~ {
	//~ var k = document.getElementById(id).textContent;
	//~ document.getElementById('all').value += k;
	//~ if(id!=='minus' && id!=='plus' && id!=='divide' && id!=='multi' && id!=='eq')
	//~ {
	//~ document.getElementById('out').value += k;
	//~ }
//~ }
//~ function clean(id){
	//~ document.getElementById(id).value = '';
//~ }
//~ function del(){
	//~ var p = document.getElementById('out').value;
	//~ document.getElementById('out').value = p.slice(0, -1);
	//~ p = document.getElementById('all').value;
	//~ document.getElementById('all').value = p.slice(0, -1);
//~ }
//~ function calculator(func)
//~ {
	//~ var p = document.getElementById('out').value;
	//~ p = Number(p);
	//~ switch(func)
	//~ {
		//~ case "plus":
		//~ sum+=p;
		//~ break;
		//~ case "minus":
		//~ sum-=p;
		//~ break;	
		//~ case "divide":
		//~ sum=sum/p;
		//~ break;
		//~ case "multi":
		//~ sum*=p;
		//~ break;
	//~ }
	
//~ }
//~ function end()
//~ {	
	//~ document.getElementById('out').value = sum;
//~ }
