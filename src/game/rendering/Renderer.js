class Renderer {

    constructor(game, canvas) {

        this.game = game;
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        // this.context.imageSmoothingEnabled = false;
        this.cams = [];

        this.scaledTextures = {};
        this.prevZoom = -1;
        
        // unit width as a percentage of screen width
        this.unitWidth = 0.035;
        this.spritePxPerUnit = 32;
        
    }
    
    
    render() {

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        if (this.cams.length === 1) {
            
            const cam = this.cams[0];
            const terrain = this.game.world.terrain;
            const entities = this.game.world.entities;
            const canvasPxPerUnit = this.canvas.width * this.unitWidth * cam.zoom;

            if (this.prevZoom !== cam.zoom) {
                this.scaleTextures();
            }
            this.prevZoom = cam.zoom;
            
            this.context.save();
            this.context.translate(this.canvas.width / 2, this.canvas.height / 2);

            // render terrain
            for (let i = 0; i < terrain.length; i++) {
                
                const terrainElem = terrain[i];
                
                this.context.beginPath();
                let line = terrainElem.lines[0]
                let xDiff = line.x1 - cam.posX;
                let yDiff = cam.posY - line.y1;
                this.context.moveTo(xDiff * canvasPxPerUnit, yDiff * canvasPxPerUnit);
                
                for (let j = 1; j < terrainElem.lines.length; j++) {
                    
                    line = terrainElem.lines[j];
                    xDiff = line.x1 - cam.posX;
                    yDiff = cam.posY - line.y1;
                    this.context.lineTo(xDiff * canvasPxPerUnit, yDiff * canvasPxPerUnit);
                    
                }
                
                this.context.fill();

            }

            // render entities
            for (let i = 0; i < entities.length; i++) {
                
                const entity = entities[i];
                const sprites = entity.getSprites();
                const xDiff = entity.posX - cam.posX;
                const yDiff = cam.posY - entity.posY;

                // translate context to the position of the entity
                this.context.save();
                this.context.translate(xDiff * canvasPxPerUnit, yDiff * canvasPxPerUnit);
                this.context.rotate(entity.rotation);
                
                
                for (let j = 0; j < sprites.length; j++) {
                    
                    const spriteInfo = sprites[j];
                    
                    // this.context.drawImage(
                    //     spriteInfo[0],
                    //     spriteInfo[1] / this.spritePxPerUnit * canvasPxPerUnit,
                    //    -spriteInfo[2] / this.spritePxPerUnit * canvasPxPerUnit,
                    //     spriteInfo[0].width / this.spritePxPerUnit * canvasPxPerUnit,
                    //     spriteInfo[0].height / this.spritePxPerUnit * canvasPxPerUnit
                    // );
                    this.context.drawImage(
                        this.scaledTextures[spriteInfo[0]],
                        spriteInfo[1] / this.spritePxPerUnit * canvasPxPerUnit,
                       -spriteInfo[2] / this.spritePxPerUnit * canvasPxPerUnit
                    );
                       
                }
                
                // [DEBUG] draw a dot at the position of the entity
                this.context.save();
                this.context.fillStyle = "red";
                this.context.beginPath();
                this.context.arc(0, 0, 2, 0, 2 * Math.PI);
                this.context.fill();
                this.context.restore();

                // [DEBUG] draw the center of mass of the entity
                this.context.save();
                this.context.fillStyle = "red";
                this.context.beginPath();
                this.context.arc(0, -entity.hitbox.comHeight * canvasPxPerUnit, 2, 0, 2 * Math.PI);
                this.context.fill();
                this.context.restore();
            
                this.context.restore();
                
            }
            
            
        }
        
        // [DEBUG] draw a crosshair in the center
        this.context.save();
        this.context.strokeStyle = "red";
        this.context.lineWidth = 1.5;
        this.context.beginPath();
        this.context.moveTo(0, -10);
        this.context.lineTo(0, 10);
        this.context.moveTo(-10, 0);
        this.context.lineTo(10, 0);
        this.context.stroke();
        this.context.restore();
        
        // restore origin from center to top left
        this.context.restore();

        // [DEBUG] draw Morssari from scaled textures
        // this.context.drawImage(this.scaledTextures.morssari, 0, 0);

        // [DEBUG] draw the debug canvas
        const debugCvs = document.getElementById("debug_canvas");
        this.context.drawImage(debugCvs, 0, 0);
        debugCvs.getContext("2d").clearRect(0, 0, debugCvs.width, debugCvs.height);

    }


    scaleTextures() {

        const keys = Object.keys(this.game.textureLoader.textures);
        const createCanvases = Object.keys(this.scaledTextures).length === 0;
        for (let i = 0; i < keys.length; i++) {

            const texture = this.game.textureLoader.textures[keys[i]];

            const cvs = createCanvases ? document.createElement("canvas") : this.scaledTextures[keys[i]];
            const ctx = cvs.getContext("2d");
            const scaleFactor = 1/this.spritePxPerUnit * this.unitWidth * this.canvas.width * this.cams[0].zoom;
            
            cvs.width = texture.width * scaleFactor;
            cvs.height = texture.height * scaleFactor;
            
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(texture, 0, 0, texture.width * scaleFactor, texture.height * scaleFactor);
            this.scaledTextures[keys[i]] = cvs;

        }

        
    }


}
