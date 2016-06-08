import Canvas from './Canvas.js'
import Vector from './Vector.js'

window.addEventListener('load', function(){

    const gameCanvas = new Canvas('canvas', 800, 600);
    gameCanvas.add('app');

    let ctx = gameCanvas.getCtx();

    let loop = function(){

        //for(let i = 0; i < 10; i++){
            let vector1 = new Vector(ctx, Math.random()*800, Math.random()*800, Math.random()*100, Math.random()*100);
            vector1.draw(2, 'tomato');

            let vector2 = new Vector(ctx, Math.random()*800, Math.random()*800, Math.random()*100, Math.random()*100);
            vector2.draw(2, 'blue');

            let vector3 = new Vector(ctx, Math.random()*800, Math.random()*800, Math.random()*100, Math.random()*100);
            vector3.draw(2, 'green');
        //}

        tick();
    };

    function tick(){
        requestAnimationFrame(loop);
    }

    tick();

});
