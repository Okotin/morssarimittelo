class Morssarimittelo {

    constructor() {

        this.gui = new GUI();
        this.keyboard = new Keyboard(document);
        this.textureLoader = new TextureLoader(this);
        this.renderer = new Renderer(this, document.getElementById("game_canvas"));
        this.updater = new Updater(this, 50);
        this.world = undefined;

        this.testGame();

        
    }
    
    
    update() {
        
        this.world.update();
        
    }
    
    
    testGame() {
        
        const cam = new Camera(this, 0, 0);
        this.renderer.cams.push(cam);
        
        this.world = new World(this);
        
        // const lines = TerrainLine.prototype.linesFromCoords([0,1], [1,2], [2,2], [3,1], [2,0], [1,0]);
        // const lines = TerrainLine.prototype.linesFromCoords([1,0], [1.1,0], [1,0.1]);    // 
        const lines = TerrainLine.prototype.linesFromCoords([3,-2], [3.00,5], [5.01,5], [5,-2]);
        this.world.terrain.push(new TerrainElement(lines, 1, 1));


        const morssari = new Morssari(this, 0, 5, new Player(this), "Mörssäri");
        this.world.addEntity(morssari);
        // cam.target = morssari;
        
        /* const ammus = new Morssari(this, -5, 3, new Player(this), "Ammus");
        ammus.velX = 1;
        this.world.addEntity(ammus); */

        this.updater.start();

    }


}
