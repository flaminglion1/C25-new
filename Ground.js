class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
          }
          this.b1=Bodies.rectangle(x,y,width,height,options)
          World.add(myWorld,this.b1);
  this.width=width
  this.height=height
  
        }
        display(){
            var pos=this.b1.position;
          rectMode(CENTER)
            fill("green");
          rect(pos.x,pos.y,this.width,this.height)  
        }
        
}


