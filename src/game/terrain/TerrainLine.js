class TerrainLine {

    constructor(x1, y1, x2, y2) {

        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;

        this.element = undefined;

    }


    linesFromCoords() {

        const args = arguments;
        const result = [];

        for (let i = 0; i < arguments.length - 1; i++) {
            const line = new TerrainLine(args[i][0], args[i][1], args[i + 1][0], args[i + 1][1]);
            result.push(line);
        }

        const last = new TerrainLine(args[args.length - 1][0], args[args.length - 1][1], args[0][0], args[0][1]);
        result.push(last);

        return result;

    }


}
