import Canvas from './Canvas.js'
import Vector from './Vector.js'

window.addEventListener('load', function(){

    const gameCanvas = new Canvas('canvas', 800, 600);
    gameCanvas.add('app');
    let pause = true;

    document.addEventListener('keydown', function(event){

        if (event.keyCode == 80) {

            pause =! pause;
            tick(loop);
        }
    });

    let ctx = gameCanvas.getCtx();

    let draw = () => {

        //for(let i = 0; i < 10; i++){
        let vector1 = new Vector(ctx, Math.random()*800, Math.random()*800, Math.random()*100, Math.random()*100);
        vector1.draw(2, 'tomato');

        let vector2 = new Vector(ctx, Math.random()*800, Math.random()*800, Math.random()*100, Math.random()*100);
        vector2.draw(2, 'blue');

        let vector3 = new Vector(ctx, Math.random()*800, Math.random()*800, Math.random()*100, Math.random()*100);
        vector3.draw(2, 'green');
        //}
    };

    let tick = (function(){
        return requestAnimationFrame ||
            webkitRequestAnimationFrame ||
            mozRequestAnimationFrame ||
            oRequestAnimationFrame ||
            msRequestAnimationFrame ||
            function(callback){
                setTimeout(callback, 1000 / 60);
            };
    })();

    let loop = function(){

        if (!pause) {
            draw();
            tick(loop);
        }
    };

    tick(loop);

});
