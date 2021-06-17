/*

Correct Code 

class Rope{
	constructor(body1,body2, pointA, pointB)
	{
		this.pointA=pointA
		this.pointB=pointB
	
		var options={
			bodyA:body1,
            pointA: {x:this.pointA, y:this.pointB},
			bodyB:body2
			
		}
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	show()
	{
		var posRoof=this.rope.bodyA.position;
        var posBob=this.rope.bodyB.position;
		strokeWeight(2);
		//line(posRoof.x+this.pointA,posRoof.y+this.pointB,this.pointB.x,this.pointB.y);
        line(posRoof.x+this.pointA,posRoof.y+this.pointB,posBob.x,posBob.y);
	}

}*/


class Rope{
	constructor(body1,body2, x, y)
	{
		this.pointAX=x;
		this.pointAY=y;
        this.bodyA = body1;
        this.bodyB = body2;
        console.log(this.bodyA);
        console.log(this.bodyB);
	
		var options={
			bodyA:this.bodyA,
            pointA: {x:this.pointAX, y:this.pointAY},
			bodyB:this.bodyB.body,
            pointB: {x:0, y:0},
            length:200,
            stiffness:0.04	
		}
		this.rope=Constraint.create(options);
		World.add(world,this.rope)
	}

	show()
	{
        strokeWeight(2);
        //console.log(this.rope.bodyA);
		var posRoof=this.rope.bodyA.position;
		var posBob=this.rope.bodyB.position;

        //When creating single bobs
        //var posBob=this.rope.bodyB.position;
        //line(posRoof.x+this.pointAX,posRoof.y+this.pointAY,posBob.x,posBob.y);

        //When creating Bob class
        line(posRoof.x+this.pointAX,posRoof.y+this.pointAY,posBob.x,posBob.y);
	}

}
