'use strict'

const canvas = document.getElementById('canvas')
canvas.width = 800;
canvas.height = 600;

const ctx = canvas.getContext('2d');

class Vec2{
	constructor(x = 0.0, y = 0.0){
		this.x = x;
		this.y = y;
	}

	add(other){
		this.x += other.x;
		this.y += other.y;
	}
}

class Player{
	constructor(){
		this.size 		= new Vec2(32, 32);
		this.position = new Vec2(0, 0);
		this.velocity = new Vec2(1, 0);
	}

	draw(){
		ctx.fillStyle = 'red'
		ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
	}

	update(){
		this.position.add(this.velocity);
	}
}

function clearCanvas(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const player = new Player();

function updateGame(){
	clearCanvas();
	player.update();
	player.draw();
}

const gameLoop = setInterval(updateGame, 20)