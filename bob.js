class Bob{
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
        var options = {
            restitution : 0.8
        }
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
        
    }

    show(){
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        stroke(255);
        fill("black");
        ellipse(pos.x, pos.y, this.r, this.r);
        pop(); 
    }
}