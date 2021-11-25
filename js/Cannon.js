class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    
  }
  display(){
    if (keyIsDown(RIGHT_ARROW) && this.angle<0.8){
      this.angle=this.angle + 0.02
    }
    if (keyIsDown(LEFT_ARROW) && this.angle>-0.3){
      this.angle=this.angle - 0.02
    }
    push()
    imageMode(CENTER)
    translate(this.x,this.y)
    rotate(this.angle)
    image(cannonImage,0,0,this.width,this.height)
    pop()
    image(cbImage,60,30,200,200)
    noFill()
  }
}
