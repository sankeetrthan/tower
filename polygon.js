class Polygon {
    constructor(x,y,width,height){
      var options = {
          restitution : 0.5,
          isStatic : false,
          friction : 1,
          density : 1,
      }
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.image = loadImage("polygon.png");
      this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
      World.add(world,this.body);
    }
  
    display() {
  
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);

    }
}