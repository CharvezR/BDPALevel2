function decidePassword(prompt){
	if(prompt > 1){
		return "3";
	} else{
		return "7";
	}
	
}

	function runLevel(){
var cabbageMan = new MazeRunner.CabbageMan();
cabbageMan.moveRight(1);
cabbageMan.calculatePassword("RIGHT", decidePassword);
cabbageMan.moveRight(2);
cabbageMan.calculatePassword("RIGHT", decidePassword);
cabbageMan.moveRight(14);
	}