class Baseclass{
    constructor(x,y,width,height,angle){
        //properties
        var options={
            restitution:0.8,friction:1.5,density:1.0
          }
         this.body=Bodies.rectangle(x,y,width,height,options);
         this.image=loadImage("sprites/base.png");
         this.width=width;
         this.height=height;
         World.add(myWorld,this.body);
         
    }
    display(){//functions
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate (pos.x,pos.y);
    rotate (angle);
    imageMode (CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
    }
}