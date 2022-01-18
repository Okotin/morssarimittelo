class Morssari extends Entity {

    constructor(game, posX, posY, behavior, name) {

        super(game, posX, posY, new Hitbox([[-0.5, 0, 0.5, 13/32]/* , [-9/32, 13/32, 9/32, 25/32] */], []));

        this.maxHealth = 100;
        this.health = 100;
        this.armor = 0;
        
        this.facing = "right";
        this.pitch = 0;

        this.behavior = behavior;
        this.behavior.morssari = this;
        this.name = name ? name : "Mörssäri";

    }


    behave() {

        this.behavior.behave();

    }


    getSprites() {

        return [ [/* this.game.textureLoader.textures. */"morssari", -16, 25, 0] ];

    }


}