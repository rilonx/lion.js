import Canvas from './Canvas.js'
import Game from './Game.js'
import Keyboard from './Keyboard.js'

window.addEventListener('load', function(){

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
    let str = 'ИГОРЕК';
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
