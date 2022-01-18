class Updater {

    constructor(game, tps) {

        this.game = game;
        this.tps = tps;

        this.loopID = undefined;

    }


    tick() {

        // console.time("tick");
        for (let i = 0; i < this.game.renderer.cams.length; i++) {
            this.game.renderer.cams[i].update();
        }
        this.game.update();
        // console.timeEnd("tick");
        // console.time("render");
        this.game.renderer.render();
        // console.timeEnd("render");

    }


    start() {

        const updater = this;
        this.loopID = setInterval(function() { updater.tick(); }, 1000 / this.tps);

    }


    stop() {

        clearInterval(this.loopID);
        this.loopID = undefined;

    }


}