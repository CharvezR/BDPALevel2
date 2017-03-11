function doLevel1(){
alert ('Do Level 1')
var answer=Prompt("what's the answer") 
hide("level1")
show ("level2")
}
function doLevel2(){
alert ('Do Level 2')
hide ("level2")
show ("level3")
}
function doLevel3(){
alert ('Do Level 3')
hide ("level3")
}
function show(id){
	var el = document.getElementById(id);
	el.classList.remove("hidden");
}
function hide(id){
	var el = document.getElementById(id);
	el.classList.add("hidden")
}

var score = 0
function addPoints(points){
	score = score + points;
	document.getElementById("score").innerHTML = score;
}

