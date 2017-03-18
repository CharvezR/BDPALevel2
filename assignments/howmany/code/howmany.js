function doLevel1(){
	var answer=prompt("what's the answer") 
	if( answer== "Satellite dishes"){
		alert("Congratulations you got it right")
		addPoints(10)
	} else {
		alert("Sorry the correct answer was Satellite dishes")
	}	
	hide("level1") 
	show ("level2")
}
function doLevel2(){
var answer=prompt("what's the answer") 
if( answer== "5"){
		alert("Congratulations you got it right")
		addPoints(10)
	} else {
		alert("Sory the correct answer was 4")
	}	
hide ("level2")
show ("level3")
}
function doLevel3(){
var answer=prompt("what's the answer") 
if( answer== "true"){
		alert("Congratulations you got it right")
		addPoints(10)
	} else {
		alert("Sorry the correct answe was true")
	}	
hide ("level3")
show ("Congrats")
showFinalScore()
alert ("CONGRAGULATIONS YOU HAVE FINISHED THE GAME THAT I, CHARVEZ RUSSELL HAS CREATED")
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
function showFinalScore(){
	document.getElementById("FinalScore").innerHTML="Final Score="+score;
}