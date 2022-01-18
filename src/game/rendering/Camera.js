class Camera {

    constructor(game, posX, posY, target) {

        this.game = game;
        this.posX = posX;
        this.posY = posY;
        this.zoom = 1;
        this.target = target;

    }


    update() {

        const kb = this.game.keyboard;
        const speed = 5;
        const zoomSpeed = 1;

        if (this.target) {
            
            this.posX = this.target.posX;
            this.posY = this.target.posY;
            // this.posX += (this.target.posX - this.posX) * 0.15;
            // this.posY += (this.target.posY - this.posY) * 0.15;

        } else {

            if (kb.isPressed(kb.KEY_UP)) {
                this.posY += speed / this.zoom / this.game.updater.tps;
            }

            if (kb.isPressed(kb.KEY_DOWN)) {
                this.posY -= speed / this.zoom / this.game.updater.tps;
            }

            if (kb.isPressed(kb.KEY_LEFT)) {
                this.posX -= speed / this.zoom / this.game.updater.tps;
            }

            if (kb.isPressed(kb.KEY_RIGHT)) {
                this.posX += speed / this.zoom / this.game.updater.tps;
            }

            
        }
        
        if (kb.isPressed(kb.KEY_COMMA)) {
            this.zoom *= 1 + zoomSpeed / this.game.updater.tps;
        }
        
        if (kb.isPressed(kb.KEY_PERIOD)) {
            this.zoom /= 1 + zoomSpeed / this.game.updater.tps;
        }
        
    }


}
