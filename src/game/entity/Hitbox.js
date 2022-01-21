class Hitbox {
    /**
     * 
     * @param {Array[Array[number]]} rectangles List of rectangles. A rectangle is defined by its bottom left and top right corners.
     * @param {Array[Array[number]]} circles List of circles. A circle is defined by its the x and y coordinates of its center, and its radius.
     */
    constructor(rectangles, circles) {

        this.rectangles = rectangles;
        this.circles = circles;
        this.entity = undefined;    // set upon creation
        this.world = undefined;     // set upon creation
        this.comHeight = this.calculateCOMHeight();

    }


    groundCollisions(distX, distY) {
        
        const debugCvs = document.getElementById("debug_canvas");
        const ctx = debugCvs.getContext("2d");
        
        const renderer = this.entity.game.renderer;
        const scaleFactor = renderer.unitWidth * renderer.canvas.width * renderer.cams[0].zoom;
        
        const sin = Math.sin(-this.entity.rotation);
        const cos = Math.cos(this.entity.rotation);

        for (let i = 0; i < this.rectangles.length; i++) {

            const rect = this.rectangles[i];

            // Calculate the positions of the hitbox' corners after moving to the new location
            // A = bottom left, B = bottom right, C = top right, D = top left

            const x_A = this.entity.posX + distX + cos * rect[0] - sin * rect[1];
            const y_A = this.entity.posY + distY + sin * rect[0] + cos * rect[1]; 
            
            const x_B = this.entity.posX + distX + cos * rect[2] - sin * rect[1];
            const y_B = this.entity.posY + distY + sin * rect[2] + cos * rect[1];
            
            const x_C = this.entity.posX + distX + cos * rect[2] - sin * rect[3];
            const y_C = this.entity.posY + distY + sin * rect[2] + cos * rect[3];
            
            const x_D = this.entity.posX + distX + cos * rect[0] - sin * rect[3];
            const y_D = this.entity.posY + distY + sin * rect[0] + cos * rect[3];

            // Determine the min and max x-coordinates of each line segment

            const minX_AB = Math.min(x_A, x_B);
            const maxX_AB = Math.max(x_A, x_B);
            const minX_BC = Math.min(x_B, x_C);
            const maxX_BC = Math.max(x_B, x_C);
            const minX_CD = Math.min(x_C, x_D);
            const maxX_CD = Math.max(x_C, x_D);
            const minX_DA = Math.min(x_D, x_A);
            const maxX_DA = Math.max(x_D, x_A);
            
            // Calculate the slopes of the line segments AB and BC
            // Since the hitbox is a rectangle, no need to calculate for CD and DA

            const k_AB = (y_B - y_A) / (x_B - x_A);
            const k_BC = -1 / k_AB;

            // Calculate the y-intercepts of each line corresponding to the line segments

            const b_AB = y_A - k_AB * x_A;
            const b_BC = y_B - k_BC * x_B;
            const b_CD = y_C - k_AB * x_C;
            const b_DA = y_D - k_BC * x_D;
            
            // [DEBUG] draw the rotated hitbox
            ctx.save();
            ctx.translate(debugCvs.width / 2, debugCvs.height / 2);
            ctx.strokeStyle = "red";
            ctx.beginPath();
            ctx.moveTo((x_A - renderer.cams[0].posX) * scaleFactor, (renderer.cams[0].posY - y_A) * scaleFactor);
            ctx.lineTo((x_B - renderer.cams[0].posX) * scaleFactor, (renderer.cams[0].posY - y_B) * scaleFactor);
            ctx.lineTo((x_C - renderer.cams[0].posX) * scaleFactor, (renderer.cams[0].posY - y_C) * scaleFactor);
            ctx.lineTo((x_D - renderer.cams[0].posX) * scaleFactor, (renderer.cams[0].posY - y_D) * scaleFactor);
            ctx.closePath();
            ctx.stroke();
            //ctx.fillRect((x_A - renderer.cams[0].posX) * scaleFactor - 5, (renderer.cams[0].posY - y_A) * scaleFactor - 5, 10, 10)
            ctx.restore();

            // Cycle through each TerrainLine object in the world

            for (let j = 0; j < this.world.terrain.length; j++) {
                for (let k = 0; k < this.world.terrain[j].lines.length; k++) {

                    const line = this.world.terrain[j].lines[k];

                    // Denoting the endpoints of the TerrainLine as E and F
                    // Determine the min and max x-coordinates of the line segment EF

                    const minX_EF = Math.min(line.x1, line.x2);
                    const maxX_EF = Math.max(line.x1, line.x2);

                    // Calculate the slope and intercept of the line EF

                    const k_EF = (line.y2 - line.y1) / (line.x2 - line.x1);
                    const b_EF = line.y1 - k_EF * line.x1;

                    // Calculate the x-coordinates for intersection of the lines defining the hitbox and the line EF 

                    const xInt_AB = (b_EF - b_AB) / (k_AB - k_EF);
                    const xInt_BC = (b_EF - b_BC) / (k_BC - k_EF);
                    const xInt_CD = (b_EF - b_CD) / (k_AB - k_EF);
                    const xInt_DA = (b_EF - b_DA) / (k_BC - k_EF);

                    // Check if the x-coordinate of the intersection is within the line segments EF and e.g. AB
                    // If yes, the hitbox and the TerrainLine will intersect

                    if (minX_AB < xInt_AB && xInt_AB < maxX_AB &&
                        minX_EF < xInt_AB && xInt_AB < maxX_EF) {
                        console.log("ähää AB", xInt_AB);
                    }
                    if (minX_BC < xInt_BC && xInt_BC < maxX_BC &&
                        minX_EF < xInt_BC && xInt_BC < maxX_EF) {
                        console.log("ähää BC");
                    }
                    if (minX_CD < xInt_CD && xInt_CD < maxX_CD &&
                        minX_EF < xInt_CD && xInt_CD < maxX_EF) {
                        console.log("ähää CD");
                    }
                    if (minX_DA < xInt_DA && xInt_DA < maxX_DA &&
                        minX_EF < xInt_DA && xInt_DA < maxX_EF) {
                        console.log("ähää DA");
                    }

                    // Extreme cases: 
                    // k_AB == k_EF results in intersections being NaN or infinities, failing conditions for xInt_AB and xInt_CD above
                    // infinite k_AB, k_BC or k_EF result in intersections being NaN, requiring special handling

                    if (Math.abs(k_EF) === Infinity) {
                        const minY_EF = Math.min(line.y1, line.y2);
                        const maxY_EF = Math.max(line.y1, line.y2);

                        if (minX_AB < line.x1 && line.x1 < maxX_AB) {
                            // yInt_AB = ???

                            console.log("ähää AB INF!");
                        }
                    }
                }

            }
        }

    }


    calculateCOMHeight() {

        let weightedSum = 0;
        let totalArea = 0;
        for (let i = 0; i < this.rectangles.length; i++) {
            const rect = this.rectangles[i];
            const area = (rect[2] - rect[0]) * (rect[3] - rect[1]);
            totalArea += area;
            weightedSum += (rect[1] + rect[3]) / 2 * area;
        }
        for (let i = 0; i < this.circles.length; i++) {
            const circ = this.circles[i];
            const area = Math.PI * circ[2] * circ[2];
            totalArea += area;
            weightedSum += circ[1] * area;
        }
        return weightedSum / totalArea;

    }


}