class Entity {

    constructor(game, posX, posY, hitbox) {

        this.game = game;
        this.world = game.world;
        this.posX = posX;
        this.posY = posY;
        this.velX = 0;
        this.velY = 0;
        this.hitbox = hitbox;
        this.hitbox.entity = this;
        this.hitbox.world = this.world;
        this.onGround = false;
        this.rotation = 0; // HUOM!

    }


    update() {

        this.posX += this.velX / this.game.updater.tps;
        this.posY += this.velY / this.game.updater.tps;
        this.velY -= this.world.gravity / this.game.updater.tps;
        
        this.behave();
        this.hitbox.groundCollisions(0, 0);

    }


    behave() {}
    
    getSprites() {}


}