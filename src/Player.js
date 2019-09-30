class Vec2{
	constructor(x = 0.0, y = 0.0){
		this.x = x;
		this.y = y;
	}

	add(other){
		this.x += other.x;
		this.y += other.y;
  }
  
  isEqual(other){
    return this.x === other.x && this.y === other.y;
  }

  toString(){
    return `(${this.x}, ${this.y})`
  }
}

class Player{
	constructor(){
		this.size 		= new Vec2(32, 32);
		this.position = new Vec2(0, 0);
    this.movement = new Vec2(1, 0);
    this.velocity = 5.0;
    this.hp       = 100;
	}

	draw(){
		ctx.fillStyle = 'red'
		ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
	}

	update(){
    if(this.hp <= 0) { return; }
		this.position.add(this.movement);
  }
  
  changeMovement(newDir){
    this.movement = new Vec2(newDir.x * this.velocity, newDir.y * this.velocity);
  }

  takeDamage(value){
    //this.hp -= value;
    this.hp -= Math.abs(value);

    // Clamping HP to 0
    if(this.hp < 0) { this.hp = 0; }
  }
}