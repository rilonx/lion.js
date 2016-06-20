export default class Keyboard {

    constructor(){

        this.KEY_LEFT = 37;
        this.KEY_RIGHT = 39;
        this.KEY_UP = 38;
        this.KEY_DOWN = 40;
        this.SHIFT = 16;

        this.isShift = false;
        this.keyState = [false, false, false, false];

        this.init = function(){

            document.addEventListener('keydown', (event) => {

                if (event.keyCode == this.SHIFT) {
                    this.isShift = true;
                }
                if (event.keyCode == this.KEY_LEFT) {
                    this.keyState[0] = true;
                }
                if (event.keyCode == this.KEY_RIGHT) {
                    this.keyState[1] = true;
                }
                if (event.keyCode == this.KEY_UP) {
                    this.keyState[2] = true;
                }
                if (event.keyCode == this.KEY_DOWN){
                    this.keyState[3] = true;
                }
            });

            document.addEventListener('keyup', (event) => {

                if (event.keyCode == this.SHIFT) {
                    this.isShift = false;
                }
                if(event.keyCode == this.KEY_LEFT){
                    this.keyState[0] = false;
                }
                if(event.keyCode == this.KEY_RIGHT){
                    this.keyState[1] = false;
                }
                if(event.keyCode == this.KEY_UP){
                    this.keyState[2] = false;
                }
                if(event.keyCode == this.KEY_DOWN){
                    this.keyState[3] = false;
                }
            });

            return this;
        };

        return this;
    }
}