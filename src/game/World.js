class World {

    constructor(game) {

        this.game = game;
        this.terrain = [];
        this.entities = [];

        this.gravity = 2-2;

    }


    addEntity(entity) {
        this.entities.push(entity);
    }


    update() {

        for (let i = 0; i < this.entities.length; i++) {
            this.entities[i].update();
        }

    }


}
