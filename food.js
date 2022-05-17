//khai bao newFood()thay vi khai bao this.x, this.y

class Food{
	constructor(){
	this.newFood();
	}
	newFood(){
	//lay toa do random
	this.x=Math.floor(random(width));
	this.y= Math.floor(random(height));
	
	//lay toa do theo kich thuoc cua ran
	this.x=Math.floor(this.x/GRID_SIZE)*GRID_SIZE;
	this.y=Math.floor(this.y/GRID_SIZE)*GRID_SIZE;

	}
	show(){
	fill(255,40,0);
	rect(this.x, this.y, GRID_SIZE, GRID_SIZE);
	}
}