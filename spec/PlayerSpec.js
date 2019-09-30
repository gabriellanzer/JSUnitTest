describe("Player", function() {
  var player;

  beforeEach(function() {
    player = new Player();
  });

  describe("testing HP", function() {
    it("should take damage", function() {
      const currentHealth = player.hp;
      player.takeDamage(50);
      expect(player.hp).toEqual(currentHealth - 50);
    });

    it("should take damage from negative input", function() {
      const currentHealth = player.hp;
      player.takeDamage(-50);
      expect(player.hp).toEqual(currentHealth - 50);
    });

    it("hp should NOT go below 0", function() {
      player.takeDamage(player.hp + 1);
      expect(player.hp).toEqual(0);
    });
  });

  describe("testing movement", function() {
    it("should change movement correctly", function() {
      const playerVel = player.velocity;
      const newDirection = new Vec2(0, 1);
      player.changeMovement(newDirection);

      expect(player.movement).toEqual(
        new Vec2(newDirection.x * playerVel, newDirection.y * playerVel)
      );
    });
  });

  describe("testing update", function() {
    it("update should change position according to movement", function() {
      const playerMovement = player.movement;
      const oldPosition = new Vec2(player.position.x, player.position.y);

      player.update();

      expect(player.position).vectorEqual(
          oldPosition.x + playerMovement.x,
          oldPosition.y + playerMovement.y
      );
    });

    it("should NOT update position when HP is equal or below 0", function() {
      const oldPosition = new Vec2(player.position.x, player.position.y);

      player.takeDamage(player.hp);
      player.update();

      expect(player.position).toEqual(oldPosition);
    });
  });

});
