class Cball{
    constructor(x, y){
        var ballOptions = {
            isStatic:true
        }
        this.body = Bodies.circle(x, y ,30, ballOptions)
        World.add(world, this.body)
        this.img = loadImage("assets/cannonball.png")
    }
    display(){
        push()
        imageMode(CENTER)
        image(this.img,this.body.position.x,this.body.position.y,30,30)
        pop()
    }
    shoot(){
        var speed = p5.Vector.fromAngle(cannon.angle)
        speed.mult(15)
        Matter.Body.setStatic(this.body,false)
        Matter.Body.setVelocity(this.body,{x:speed.x,y:speed.y})
    }
}
