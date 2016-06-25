export default class Hero {

    constructor(hero, keyBoard) {

        this.name = hero.name;
        this.level = hero.level;
        this.life = hero.life;
        this.speed = hero.speed;
        this.dead = false;
        this.position = hero.position;
        this.keyBoard = keyBoard;

        this.currentDirection = 'e';
        this.lastDirection = 'e';

        this.currentFrame = 0;
        this.durationFrame = 7;

        this.minFrame = 0;
        this.maxFrame = 7;
    }

    update() {

        if (!this.dead) {


            if (this.keyBoard.keyState[0]) {

                //up
                this.position.y -= this.speed;
                this.animate('n');
            }
            if (this.keyBoard.keyState[1]) {

                //right
                this.position.x += this.speed;
                this.animate('e');
            }
            if (this.keyBoard.keyState[2]) {

                //down
                this.position.y += this.speed;
                this.animate('s');
            }
            if (this.keyBoard.keyState[3]) {

                //left
                this.position.x -= this.speed;
                this.animate('w');
            }

        }

        this.durationFrame --;
    }

    animate(direction) {

        this.currentDirection = direction;

        if (this.durationFrame <= 0) {

            this.durationFrame = 7;

            if (direction === 'e') {
                this.minFrame = 0;
                this.maxFrame = 7;
            }
            if (direction === 'n') {
                this.minFrame = 8;
                this.maxFrame = 15;
            }
            if (direction === 's') {
                this.minFrame = 16;
                this.maxFrame = 23;
            }
            if (direction === 'w') {
                this.minFrame = 24;
                this.maxFrame = 31;
            }

            if (this.currentFrame < this.maxFrame) {

                if (this.lastDirection === this.currentDirection) {
                    this.currentFrame ++;
                    this.lastDirection = direction;
                } else {
                    this.currentFrame = this.minFrame;
                    this.lastDirection = direction;
                }

            } else {
                this.currentFrame = this.minFrame;
            }
        }
    }
}