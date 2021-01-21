class ball{

    constructor(x,y,radius)
    {
        var options={
            restitution:0.5,
            friction:1,
            density:1.5,
            isStatic:false
          } 
          this.x=x;
          this.y=y;
          this.radius=radius;
           this.body = Bodies.circle(x,y,this.radius/2,options);
           this.radius = radius;
          
           World.add(world,this.body);  
    }
    display(){
        var pos = this.body.position;
       
        var angle = this.body.angle;
        push ();
        translate(pos.x,pos.y);
        
        rectMode(CENTER);
        strokeWeight(5);
        stroke('blue');
        fill ("yellow")
        ellipse (0,0,this.r,this.r)
        pop ();
        
    }
}