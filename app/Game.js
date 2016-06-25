export default class Game {

    constructor() {

        this.pause = false;
        this.drawFunctions = null;

        this.setPause = function(){
            this.pause =! this.pause;
            this.init();
        };

        this.draw = function(objArr){
            this.drawFunctions = objArr;
            if(!this.pause) {
                for (let key in objArr) {
                    objArr[key]();
                }
            }
        };

        this.init = function(){

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
        };

        return this;
    }

}