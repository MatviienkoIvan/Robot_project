document.addEventListener('DOMContentLoaded', function(){
	class Robot{
		constructor(selector){
			this.element = document.querySelector("img");
			this.element.style.position = "absolute"
			this.topValue = 0;
			this.leftValue = 0;
			this.rightValue = document.documentElement.clientWidth;
			this.bottomValue = document.documentElement.clientHeight;
		}		
		def(){
			this.topValue = 0;
			this.leftValue = 0;
		}
		centre(){		
			this.topValue = (this.bottomValue - this.element.clientHeight) / 2;
			this.leftValue = (this.rightValue - this.element.clientWidth) / 2;
		}
		forward(){
			this.topValue -= (this.topValue >= this.element.clientHeight) ? this.element.clientHeight : 0 ;			
		}
		back(){
			this.topValue += ( (this.topValue + this.element.clientHeight) < (this.bottomValue - this.element.clientHeight )) ? this.element.clientHeight : 0;
		}
		right(){		
			this.leftValue += ( (this.leftValue + this.element.clientWidth) < (this.rightValue - this.element.clientWidth)) ? this.element.clientWidth : 0;
		}
		left(){
			this.leftValue -= (this.leftValue >=this.element.clientWidth) ? this.element.clientWidth : 0;
			
		}
		render(){
			this.element.style.left = this.leftValue + 'px';
			this.element.style.top = this.topValue + 'px' ;
		}
	}
	
	let newRobot = new Robot();

	addEventListener('keyup', (e)=>{
		let move = (instance)=>{
			switch(e.keyCode){
				case 37:
					instance.left();
					break;
				case 38:			
					instance.forward();
					break;
				case 39:			
					instance.right();
					break;
				case 40:			
					instance.back();
					break;
				case 32:
					instance.centre();
					instance.newBorder();
					break;
				case 27:
					instance.newBorderRadius();
					instance.def();
					break;
			}
			instance.render();
		}
		move(newSuperRobot);
	});

	class SuperRobot extends Robot{
		
		newBorder(){
			this.element.style.border = 6 + 'px solid red';
		}
		newBorderRadius(){
			this.element.style.borderRadius = 15 + 'px';
		}
	}
	let newSuperRobot = new SuperRobot();
	
}, false)
