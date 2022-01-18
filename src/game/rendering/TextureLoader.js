class TextureLoader {

    constructor(game) {

        this.game = game;
        this.imagesLoaded = 0;

        this.textures = {
            morssari: "morssari/morssari.png"
        }

        const sources = Object.keys(this.textures);
        const textureLoader = this;

        for (let i = 0; i < sources.length; i++) {
            const img = new Image();
            img.src = "resources/textures/" + this.textures[sources[i]];
            this.textures[sources[i]] = img;
            img.onload = function() {
                // use <canvas> instead of <image> elements to store sprites
                /* const cvs = document.createElement("canvas");
                const ctx = cvs.getContext("2d");
                cvs.width = img.width;
                cvs.height = img.height;
                ctx.drawImage(img, 0, 0);
                textureLoader.textures[sources[i]] = cvs; */
                textureLoader.imagesLoaded++;
            };
        }

    }


    isLoaded() {

        return this.imagesLoaded === Object.keys(this.textures).length;

    }


}
