class Ground{
	constructor(x,y,w,h)
	{
	// assign options to the stone 
		var options ={
		isStatic: true
		}

		this.x=x;
		this.y=y;
		this.w=w
        this.h = h
		this.body=Bodies.rectangle(this.x, this.y, this.w,this.h, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");

		rect(this.x,this.y,this.w,this.h)
			pop()
	}

}