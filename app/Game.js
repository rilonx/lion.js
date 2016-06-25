export default class Game {

    constructor() {

        this.pause = false;
        this.drawFunctions = null;

        return this;
    }

     setPause(){
        this.pause =! this.pause;
        this.init();
    };

    draw(objArr){
        this.drawFunctions = objArr;
        if(!this.pause) {
            for (let key in objArr) {
                objArr[key]();
            }
        }
    };

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
    };

}