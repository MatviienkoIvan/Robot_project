// var Robot = function(positX, positY){
	// this.x = positX || 0 ;
	// this.y = positY || 0 ;
// }
// Robot.prototype.forward = function(){
	// this.x ++;
	// this.show();
// }
// Robot.prototype.back = function(){
	// this.x --;
	// this.show();
// }
// Robot.prototype.right = function(){
	// this.y ++;
	// this.show();
// }
// Robot.prototype.left = function(){
	// this.y --;
	// this.show();
// }
// Robot.prototype.show = function(){
	// console.log ("actual position: " + "x = " + this.x + " y = " + this.y)
// }
// var newRobot = new Robot(5,5)
// var newRobot2 = new Robot()

// addEventListener('keyup', function(e){
	// let move = function(instance){
		// switch(e.keyCode){
			// case 37:
				// instance.left();
				// break;
			// case 38:			
				// instance.forward();
				// break;
			// case 39:			
				// instance.right();
				// break;
			// case 40:			
				// instance.back();
				// break;
		// }
	// }
	// move(newRobot2);
// });


function Robot(selector){
	this.element = document.querySelector("div");
	this.x;
	this.y;
}
Robot.prototype.forward = function(){
	this.x ++;
	this.show();
}
Robot.prototype.back = function(){
	this.x --;
	this.show();
}
Robot.prototype.right = function(){
	this.y ++;
	this.show();
}
Robot.prototype.left = function(){
	this.y --;
	this.show();
}
Robot.prototype.show = function(){
	console.log ("actual position: " + "x = " + this.x + " y = " + this.y)
