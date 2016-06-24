window.DEV = true;
import Converter from './library/Converter.js'
import Canvas from './Canvas.js'
import Game from './Game.js'
import Keyboard from './Keyboard.js'
import {assets} from "./assets.js";

window.addEventListener('load', function(){
    //console.log(Converter.xy2i(50,50,800));

    // loading assets
    assets.load(["app/assets/hero-1.png", "app/assets/hero-1.json"]).then(() => {
        // End loading assets
        // Main game code

        const gameCanvas = new Canvas('canvas', 800, 600).add('app');

        let game = new Game().init();
        let keys = new Keyboard().init();
        let ctx = gameCanvas.getCtx();
        let odd = {};

        game.draw(odd);

        document.addEventListener('keydown', function(event){

            if (event.keyCode == 80) {
                game.setPause();
            }
        });

        let x = 50;
        let y = 50;
        let str = 'ИГРОК';
        ctx.fillStyle = 'red';
        ctx.font="30px Arial";

        odd.go = function(){
            if(keys.keyState[3]){
                ctx.clearRect(0,0,gameCanvas.canvas.width, gameCanvas.canvas.height);
                ctx.fillText(str,x,y);
                y +=2;
            }
            if(keys.keyState[2]){
                ctx.clearRect(0,0,gameCanvas.canvas.width, gameCanvas.canvas.height);
                ctx.fillText(str,x,y);
                y -=2;
            }
            if(keys.keyState[0]){
                ctx.clearRect(0,0,gameCanvas.canvas.width, gameCanvas.canvas.height);
                ctx.fillText(str,x,y);
                x -=2;
            }
            if(keys.keyState[1]){
                ctx.clearRect(0,0,gameCanvas.canvas.width, gameCanvas.canvas.height);
                ctx.fillText(str,x,y);
                x +=2;
            }
        };

    });

});
