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

        let handlers = {};

        game.draw(handlers);

        document.addEventListener('keydown', function(event){

            if (event.keyCode == 80) {
                game.setPause();
            }
        });

        let x = 50;
        let y = 50;
        let str = 'Lex';
        ctx.fillStyle = 'red';
        ctx.font="12px arial";
        let image = assets["app/assets/hero-1.png"];

        function drawHero(){

        }

        handlers.goHero = function(){
            if(keys.keyState[3]){
                let frame = assets[16].frame;
                ctx.clearRect(0,0,gameCanvas.canvas.width, gameCanvas.canvas.height);
                ctx.drawImage(image, frame.x, frame.y, frame.w, frame.h, x, y, frame.w, frame.h);
                y +=2;
            }
            if(keys.keyState[2]){
                let frame = assets[10].frame;
                ctx.clearRect(0,0,gameCanvas.canvas.width, gameCanvas.canvas.height);
                ctx.drawImage(image, frame.x, frame.y, frame.w, frame.h, x,y,frame.w, frame.h);
                y -=2;
            }
            if(keys.keyState[0]){
                let frame = assets[25].frame;
                ctx.clearRect(0,0,gameCanvas.canvas.width, gameCanvas.canvas.height);
                ctx.drawImage(image, frame.x, frame.y, frame.w, frame.h, x,y,frame.w, frame.h);
                x -=2;
            }
            if(keys.keyState[1]){
                let frame = assets[0].frame;
                ctx.clearRect(0,0,gameCanvas.canvas.width, gameCanvas.canvas.height);
                ctx.drawImage(image, frame.x, frame.y, frame.w, frame.h, x,y,frame.w, frame.h);
                x +=2;
            }
        };

        handlers.setText = function(){
            ctx.fillText(str,x,y-10);
        };


        //odd.go = function(){
        //    if(keys.keyState[3]){
        //        ctx.clearRect(0,0,gameCanvas.canvas.width, gameCanvas.canvas.height);
        //        ctx.fillText(str,x,y);
        //        y +=2;
        //    }
        //    if(keys.keyState[2]){
        //        ctx.clearRect(0,0,gameCanvas.canvas.width, gameCanvas.canvas.height);
        //        ctx.fillText(str,x,y);
        //        y -=2;
        //    }
        //    if(keys.keyState[0]){
        //        ctx.clearRect(0,0,gameCanvas.canvas.width, gameCanvas.canvas.height);
        //        ctx.fillText(str,x,y);
        //        x -=2;
        //    }
        //    if(keys.keyState[1]){
        //        ctx.clearRect(0,0,gameCanvas.canvas.width, gameCanvas.canvas.height);
        //        ctx.fillText(str,x,y);
        //        x +=2;
        //    }
        //};

    });

});
