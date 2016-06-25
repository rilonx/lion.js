export default class Game {

    constructor(canvas, ctx) {

        this.pause = false;
        this.drawFunctions = null;
        this.canvas = canvas;
        this.ctx = ctx;

        return this;
    }

     setPause() {
        this.pause =! this.pause;
        this.init();
    }

    draw(objArr){
        this.drawFunctions = objArr;
        if(!this.pause) {
            for (let key in objArr) {
                objArr[key]();
            }
        }
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.canvas.width, this.canvas.canvas.height);
    }

    init(){

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

        let loop = () => {
            if (!this.pause) {
                this.draw(this.drawFunctions);
                tick(loop);
            }
        };

        tick(loop);

        return this;
    }

}