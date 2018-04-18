var commands = ["forward","back","left","right"];
var arr = ["forward","forward","forward","forward","back", "left",
			"left","left", "right", "forward","forward","forward",
			"forward","forward","forward","forward","forward","forward",
			"left","left","left","left","left","left","left","left",
			"left","left","left","left",
      "back", "right"];
			
function move(commandArr){
	let position = [0,0];
	console.log("Start: " + position.toString());
	$.each(commandArr, function(key, value){
		switch (value){
			case "forward":
				if (position[0] < 10) position[0]++;
				break;
			case "back":
				if (position[0] > -10) position[0]--;
				break;
			case "left":
				if (position[1] < 10) position[1]++;
				break;
			case "right":
				if(position[1] > -10) position[1]--;
				break;
		}
		if(key == commandArr.length-1){
			console.log("Finish: " + position.toString());
		}else{			
			console.log("Step " + key + ": " + position.toString())
		}
	})
}
move(arr);