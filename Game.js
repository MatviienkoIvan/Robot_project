document.addEventListener('DOMContentLoaded', function(){
	
    class Robot{
		constructor(fild, parameters){
            this.area = fild;
            this.pictureID = "picID";
            this.picture = $("<img id='" + this.pictureID + "' src=2.png>");
			this.topValue = 0;
			this.leftValue = 0;
            this.fildWidth = parameters.width;
            this.fildHeight = parameters.height;
            this.nextValue = 0;
            $('body').append(this.picture).css({top: 4.5, left:4.5, position: "absolute" });
		}		
		def(){
			this.topValue = 0;
			this.leftValue = 0;
		}
		forward(){
            this.nextValue = this.topValue - 1;
			if(this.nextValue >= 0){
                if(this.area[this.nextValue][this.leftValue] == 1){                    
                    this.topValue = this.nextValue >= 0 ? this.nextValue : this.topValue;	
                }else{
                    alert("you can not move to this way");
                }
            }else{
                    alert("you can not move to this way");
                }
		}
		back(){
            this.nextValue = this.topValue + 1;
            if( this.nextValue < this.area.length){
                if(this.area[this.nextValue][this.leftValue] == 1){
                    this.topValue = this.nextValue < (this.area.length) ? this.nextValue : this.topValue;
                }else{
                    alert("you can not move to this way");
                }
            }else{
                    alert("you can not move to this way");
                }                
		}
		right(){		
			this.nextValue = this.leftValue +1;
            if(this.area[this.topValue][this.nextValue] == 1){                
                this.leftValue = this.nextValue < (this.area[this.topValue].length) ? this.nextValue : this.leftValue;
            }else if(this.nextValue > (this.area[this.topValue].length-1) && this.area[this.topValue][this.nextValue-1] == 1){                
                alert("You find exit. Congratulation");
            }
            else{
                alert("you can not move to this way");
            }
        }
		left(){
			this.nextValue = this.leftValue -1;
            if(this.area[this.topValue][this.nextValue] == 1){
                this.leftValue = this.nextValue >= 0 ? this.nextValue : this.leftValue;
            }else{
                alert("you can not move to this way");
            }
			
		}
		render(){            
			let moveLeft = document.getElementById(this.pictureID).style.left = (this.leftValue*(this.fildWidth+2)) + "px";
			let moveTop = document.getElementById(this.pictureID).style.top = (this.topValue*(this.fildHeight+4)) + "px";
		}
	}	   
    
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
				case 27:
					instance.def();
					break;
			}
			instance.render();
		}
		move(newRobot);
	});
    
    const DESK = [
            [1,0,1,0,1,1,1,1,1,1,1,1,0,0,0],
            [1,0,1,0,1,0,0,0,0,0,0,1,0,0,0],
            [1,1,1,0,1,0,0,1,0,1,1,1,0,1,1],
            [1,0,1,0,1,1,1,1,0,1,0,1,0,1,0],
            [1,0,1,0,0,0,0,1,0,1,0,1,1,1,0],
            [1,0,1,1,1,1,1,1,0,1,1,1,0,1,0]
    ]
	
    class GameArea{
        constructor(map, widt, heigh){
            this.area = map;
            this.wid = widt;
            this.heig = heigh;
        };
        renderData(){
            let self = this;
            $.each(this.area, function(key, value){
                let rowHtml = $("<div>").addClass("row");
                  $.each(value, function(keys, values){
                    let colHtml = $("<div>");
                        if(values == 1){
                            colHtml = colHtml.addClass("first").width(self.wid).height(self.heig);
                        }else{
                            colHtml = colHtml.addClass("second").width(self.wid).height(self.heig);
                        }
                      rowHtml.append(colHtml);
                  })
                $('body').append(rowHtml)
            })
        }
    }
    let fildParam = {
        width : 25,
        height: 25
    };
    
    let area = new GameArea(DESK, fildParam.width, fildParam.height);
    area.renderData();    
	let newRobot = new Robot(DESK, fildParam);
    newRobot.render();
    	
}, false)