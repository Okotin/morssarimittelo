function main() {
    
    const cvs = document.getElementById("game_canvas");
    const debugCvs = document.getElementById("debug_canvas");

    resizeCanvas();
    window.onresize = resizeCanvas;

    const morssarimittelo = new Morssarimittelo();

    function resizeCanvas() {
        cvs.width = window.innerWidth;
        cvs.height = window.innerHeight;
        debugCvs.width = window.innerWidth;
        debugCvs.height = window.innerHeight;
        
    }
}

window.onload = main;