'use strict'

const canvas = document.getElementById('canvas')
canvas.width = 800;
canvas.height = 600;

const ctx = canvas.getContext('2d');

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