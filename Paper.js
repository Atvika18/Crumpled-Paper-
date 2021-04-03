class Paper {
    constructor(x, y, radius) {
        var paperOptions = {
            isStatic: false,
            restitution: 0.3,
            friction: 0,
            density: 0.7,
        }

        this.paper = Bodies.circle(x, y, radius/2, paperOptions);
       World.add(world, this.paper)
        this.radius = radius;
        this.image = loadImage("paper.png");
        

    }

    display() {
        var pos = this.paper.position;
        var angle = this.paper.angle;

        push();
        translate(pos.x, pos.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius);
       // this.paper.scale = 0.5;
        
        //ellipseMode(RADIUS);
        //ellipse(0, 0, this.radius, this.radius);
        pop();
    }
     
}
