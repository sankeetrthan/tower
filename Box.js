class Box{
    constructor(x, y, width, height)
     {
        var options = 
        {
            restitution:0.8,
            friction:1.0,
            density:1.0,
            isStatic:false
        }
        this.x=x;
        this.y=y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x,this.y,this.width, this.height, options);
        this.Visibility = 255;
        this.image=loadImage("stone.png")
        World.add(world, this.body);
      }
      display()
      {
        var angle = this.body.angle;
       if(this.body.speed<3)
       {
         push();
         translate(this.body.position.x, this.body.position.y);
         rotate(angle);
         rectMode(CENTER);
         rect( 0, 0, this.width, this.height);
         pop();
      }

       else
        {
          push();
          World.remove(world,this.body);
          this.Visibility = this.Visibility-1;
          tint(255,this.Visibility);
         
          pop();  
        }
      }
}