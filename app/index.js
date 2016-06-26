import Converter from './library/Converter.js';
import Canvas from './Canvas.js';
import Game from './Game.js';
import Keyboard from './Keyboard.js';
import {assets} from "./assets.js";
import Hero from './Hero.js';

window.addEventListener('load', function(){

    // loading assets
    assets.load(["app/assets/hero-1.png", "app/assets/hero-1.json"]).then(() => {
        console.log(assets);
        // Main game code
        const backgroundCanvas = new Canvas('BackgroundCanvas', 800, 600).add('app');
        const gameCanvas = new Canvas('canvas', 800, 600).add('app');

        let backgroundCtx = backgroundCanvas.getCtx();
        let ctx = gameCanvas.getCtx();

        let game = new Game(gameCanvas, ctx).init();
        let keys = new Keyboard().init(game);

        let handlers = {};
        let bodyes = [];

        game.draw(handlers);

        ctx.fillStyle = 'red';
        ctx.font="12px arial";
        let image = assets["app/assets/hero-1.png"];

        let heroObj = {
            name: 'Lex',
            level: 1,
            life: 5,
            kills: 0,
            speed: 2,
            position: {
                x: 100,
                y: 100
            }

        };

        let heroObj2 = {
            name: 'Bot',
            level: 1,
            life: 5,
            kills: 0,
            speed: 2,
            position: {
                x: 200,
                y: 170
            }

        };

        let myHero = new Hero(heroObj, keys);
        bodyes.push(myHero);

        handlers.updateHandler = function(){

            // update all data heroes
            for(let i = 0; i < bodyes.length; i++) {
                bodyes[i].update();
            }

        };

        handlers.drawHandler = function() {
            // clear canvas
            game.clear();

            // draw all heroes
            let frame = assets[myHero.currentFrame].frame;
            ctx.drawImage(image, frame.x, frame.y, frame.w, frame.h, myHero.position.x, myHero.position.y, frame.w, frame.h);

            if (!myHero.dead) {
                ctx.fillText(myHero.name, myHero.position.x + 10, myHero.position.y - 10);
            }

        }

    });

});
