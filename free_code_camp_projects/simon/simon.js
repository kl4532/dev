var arr = [], p_arr = [];
var par,k, result=0;
var colors = ["green", "red", "blue", "yellow"];
var los, n=1, check=1, cp=0; // n=1
var con = true;
// git v5
function mouseDown(id) {
var audio = document.getElementById("a"+id);
	switch(id)
	{
		case "green":
		audio.play("agreen");
		document.getElementById(id).style.background = "#329932";
		break;

		case "red":
		audio.play("ared");
		document.getElementById(id).style.background = "#ff3232";
		break;

		case "blue":
		audio.play("ablue");
		document.getElementById(id).style.background = "#4cc0ff";
		break;

		case "yellow":
		audio.play("ayellow");
		document.getElementById(id).style.background = "#ffff4c";
		break;
	}
}
function mouseDownUser(id) {
var audio = document.getElementById("a"+id);
	switch(id)
	{
		case "green":
		audio.play("agreen");
		document.getElementById(id).style.background = "#329932";
		p_arr.push(id);
		break;

		case "red":
		audio.play("ared");
		document.getElementById(id).style.background = "#ff3232";
		p_arr.push(id);
		break;

		case "blue":
		audio.play("ablue");
		document.getElementById(id).style.background = "#4cc0ff";
		p_arr.push(id);
		break;

		case "yellow":
		audio.play("ayellow");
		document.getElementById(id).style.background = "#ffff4c";
		p_arr.push(id);
		break;
	}
}

function mouseUp(id){
var audio = document.getElementById("a"+id);
	switch(id)
	{
		case "green":
		audio.pause("agreen");
		document.getElementById(id).style.background = "green";
		break;

		case "red":
		audio.pause("ared");
		document.getElementById(id).style.background = "red";
		break;

		case "blue":
		audio.pause("ablue");
		document.getElementById(id).style.background = "#00A6FF";
		break;

		case "yellow":
		audio.pause("ayellow");
		document.getElementById(id).style.background = "yellow";
		break;
	}
}
function get_way()
{

	los = Math.floor((Math.random() * 4) + 0);
		for(var i=0;i<20;i++)
			{
				los = Math.floor((Math.random() * 4) + 0);
				arr.push(colors[los]);
			}
}

function show_way()
{
	document.getElementById('help').innerHTML = arr;
	var inc=n*20;
	k =700-inc;
	mouseDown(arr[0]);

	setTimeout(function(){mouseUp(arr[0]); }, k);

	function doSetTimeoutDown(i)
	{
	  setTimeout(function(){ mouseDown(arr[i]); }, k);
	}
	function doSetTimeoutUp(i)
	{
	  setTimeout(function(){ mouseUp(arr[i]); }, k);
	}
	for(var i=1;i<n;i++)
	{
		k+=700-inc;
		doSetTimeoutDown(i);
		k+=700-inc;
		doSetTimeoutUp(i);

	}
}

function checker()
{
	if(p_arr[cp]==arr[cp])
	{
		con =true;
		cp++;
		if(cp==n)
		{
			if(n==20) 									// Game goal
			{
				reset('win')
			}else reset('good');
		}
	}else reset('wrong');
}
function reset(p)
{
	switch(p)
	{
		case 'wrong':
		if(document.getElementById("strict").checked == true) 	//strict
		{
			cp=0;
			n=1;
			p_arr =[];
			//alert("wrong");
			var audio = document.getElementById("awrong");
			audio.play("awrong");
			setTimeout(function(){audio.pause("awrong"); 500});
			document.getElementById("count").innerHTML = "Score: 0";
			show_way();
		}else
		{
			cp=0;
			p_arr =[];
			alert("wrong");
			x=n;
			x=x-1;
			document.getElementById("count").innerHTML = "Score: " + x;
			show_way();
		}
		break;

		case 'good':
		cp=0;
		p_arr =[];
		document.getElementById("count").innerHTML = "Score: " + n;
		n++;
		setTimeout(function(){ show_way(); }, 1000);
		break;

		case 'win':
		cp=0;
		p_arr =[];
		n=1;
		document.getElementById("count").innerHTML = "Score: " + n;
		alert("YOU WIN! Press generate to play again.");
		arr=[];
		document.getElementById("count").innerHTML = "Score: 0";
		get_way();
		break;
	}
}
// addEventListener("keydown", function(event) {
//     if (event.keyCode == 81) //q
//       mouseDownUser("green");
// 			checker();
//   });
//   addEventListener("keyup", function(event) {
//     if (event.keyCode == 81)
//       mouseUp("green");
//   });
// 	addEventListener("keydown", function(event) {
// 	    if (event.keyCode == 87) //w
// 	      mouseDownUser("red");
// 				checker();
// 	  });
// 	  addEventListener("keyup", function(event) {
// 	    if (event.keyCode == 87)
// 	      mouseUp("red");
// 	  });
// 		addEventListener("keydown", function(event) {
// 		    if (event.keyCode == 65) //a
// 		      mouseDownUser("yellow");
// 					checker();
// 		  });
// 		  addEventListener("keyup", function(event) {
// 		    if (event.keyCode == 65)
// 		      mouseUp("yellow");
// 		  });
// 			addEventListener("keydown", function(event) {
// 					if (event.keyCode == 83) //s
// 						mouseDownUser("blue");
// 						checker();
// 				});
// 				addEventListener("keyup", function(event) {
// 					if (event.keyCode == 83)
// 						mouseUp("blue");
// 				});
