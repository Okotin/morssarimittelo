class Player {

    constructor(game) {

        this.game = game;
        this.morssari;

    }


    behave() {

        const kb = this.game.keyboard;
        let spd = 2;
        let tSpd = Math.PI / 2;
        if (kb.isPressed(kb.KEY_A)) {
            this.morssari.posX -= spd / this.game.updater.tps;
        }
        if (kb.isPressed(kb.KEY_D)) {
            this.morssari.posX += spd / this.game.updater.tps;
        }
        if (kb.isPressed(kb.KEY_W)) {
            this.morssari.posY += spd / this.game.updater.tps;
        }
        if (kb.isPressed(kb.KEY_S)) {
            this.morssari.posY -= spd / this.game.updater.tps;
        }

        if (kb.isPressed(kb.KEY_Q)) {
            this.morssari.rotation -= tSpd / this.game.updater.tps;
        }
        if (kb.isPressed(kb.KEY_E)) {
            this.morssari.rotation += tSpd / this.game.updater.tps;
        }

    }


}