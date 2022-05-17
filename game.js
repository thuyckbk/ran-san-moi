
let snake;
let food;
let diem;
let snakeSpeed = SNAKE_SPEED;

//ham setup() la 1 ham dc dinh nghia san trong p5js,
//no se duoc chay ngay khi mo chuong trinh
function setup() {  
	var canvas = createCanvas(WIDTH, HEIGHT);
	canvas.parent('canvas');
	newGame();
	sound();
	document.getElementById('level').innerHTML = "I";

}
//ham draw() la 1 ham dc dinh nghia san trong p5js,
//no se duoc chay ngay sau ham setup()

function draw(){
	background(0);
	if(!snake.isDead){
		drawSnake();
	}else{
		document.getElementById('gameOver').innerHTML = ("<audio autoplay><source src=\"gameOver.wav\"></audio>");
		setTimeout("alert(\'Bạn đã thua cuộc, mời bạn chơi lại\!\!\')",500);
		//alert('Bạn đã thua cuộc, mời bạn chơi lại!!');
		newGame();
	}
}
/*function gameOverSound(){
	document.getElementById('gameOver').innerHTML = ("<audio autoplay><source src=\"gameOver.wav\"></audio>");
}*/

function drawSnake(){
	//update every SNAKE_SPEED frame
	// frameCount la 1 bien dem he thong, no chay lien tuc 
	//trong setup() co gia tri la 0
	// trong ham draw() sau lan lap dau tien cua draw, gia tri la 1
	if ((frameCount) % (snakeSpeed) == 0){
		snake.update();
	}
	snake.show();
	food.show();
	
	//Handle when snake eat food
	if(snake.head.x == food.x && snake.head.y == food.y){
		eatFood();
	}
}

function eatFood(){
	document.getElementById('diemSo').innerHTML = snake.length+1;
	snake.length++;
	food.newFood();
	if(snake.length%5==0&&snakeSpeed>0){
		snakeSpeed -=1;
	}
	document.getElementById('eatFoodSound').innerHTML = ("<audio autoplay><source src=\"eatFood.wav\"></audio>");

	
	
	switch(snakeSpeed){
		case 8:
			document.getElementById('level').innerHTML = "II";
			break;
		case 6:
			document.getElementById('level').innerHTML = "III";
			break;
		case 4:
			document.getElementById('level').innerHTML = "VI";
			break;
		case 2:
			document.getElementById('level').innerHTML = "V";
			break;
		case 0:
			document.getElementById('level').innerHTML = "VI";
			snakeSpeed = 0.5;
			break;
	}
}

function newGame() {
	snake = new Snake();
	food = new Food();
	document.getElementById('diemSo').innerHTML = snake.length;
}
function sound(){
	document.getElementById('sound').innerHTML = ("<h3 id=\"sound\" onclick=\"notSound()\"><i class=\"fas fa-volume-up\"></i></h3>"+"<audio autoplay loop><source src=\"sound.wav\"></audio>");
}
function notSound(){
	document.getElementById('sound').innerHTML = ("<h3 id=\"sound\" onclick=\"sound()\"><i class=\"fas fa-volume-slash\"></i></h3>");
}

function keyPressed(){
	if ((keyCode == UP_ARROW||keyCode==87||keyCode==104 )&& snake.vel.y !=1){
		snake.vel.y = -1;
		snake.vel.x=0;
		
	}else if ((keyCode == DOWN_ARROW||keyCode==98||keyCode==88 )&& snake.vel.y !=-1){
		snake.vel.y = 1;
		snake.vel.x = 0;
	}else if ((keyCode == LEFT_ARROW||keyCode==65||keyCode==100) && snake.vel.x !=1){
		snake.vel.y = 0;
		snake.vel.x=-1;
	}else if((keyCode == RIGHT_ARROW||keyCode==68||keyCode==102 )&& snake.vel.x !=-1){
		snake.vel.y =0;
		snake.vel.x = 1;
	}
}
