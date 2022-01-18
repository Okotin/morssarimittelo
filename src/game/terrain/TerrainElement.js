class TerrainElement {

    constructor(lines, explosionAbsorption, friction) {

        this.lines = lines;
        this.lines.forEach(line => { line.element = this; });
        this.explosionAbsorption = explosionAbsorption;
        this.friction = friction;

    }


}

