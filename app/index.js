import Converter from './library/Converter.js';
import Canvas from './Canvas.js';
import Game from './Game.js';
import Keyboard from './Keyboard.js';
import {assets} from "./assets.js";
import Hero from './Hero.js';

window.addEventListener('load', function(){

    // loading assets
    assets.load(["app/assets/hero-1.png", "app/assets/hero-1.json"]).then(() => {

        // Main game code
        const backgroundCanvas = new Canvas('BackgroundCanvas', 800, 600).add('app');
        const gameCanvas = new Canvas('canvas', 800, 600).add('app');

        let backgroundCtx = backgroundCanvas.getCtx();
        let ctx = gameCanvas.getCtx();

        let game = new Game(gameCanvas, ctx).init();
        let keys = new Keyboard().init();

        let handlers = {};

        game.draw(handlers);

        document.addEventListener('keydown', function(event){

            if (event.keyCode == 80) {
                game.setPause();
            }
        });

        ctx.fillStyle = 'red';
        ctx.font="12px arial";
        let image = assets["app/assets/hero-1.png"];

        let heroObj = {
            name: 'Lex',
            level: 1,
            life: 5,
            speed: 2,
            position: {
                x: 100,
                y: 100
            }

        };

        let myHero = new Hero(heroObj, keys);

        handlers.goHero = function(){

            myHero.update();
            game.clear();

            let frame = assets[myHero.currentFrame].frame;
            ctx.drawImage(image, frame.x, frame.y, frame.w, frame.h, myHero.position.x, myHero.position.y, frame.w, frame.h);

            if (!myHero.dead) {
                ctx.fillText(myHero.name, myHero.position.x + 10, myHero.position.y - 10);
            }
        };

    });

});
