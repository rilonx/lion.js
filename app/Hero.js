export default class Hero {

    constructor(hero, keyBoard) {

        this.name = hero.name;
        this.level = hero.level;
        this.life = hero.life;
        this.kills = hero.kills;
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

            if (this.keyBoard.keyState[0] && this.keyBoard.keyState[1]) {

                //upRight
                this.position.y -= this.speed / 1.2;
                this.position.x += this.speed / 1.2;
                this.animate('ne');
                console.log('upRight');

            } else if (this.keyBoard.keyState[1] && this.keyBoard.keyState[2]) {

                // downRight
                this.position.y += this.speed / 1.2;
                this.position.x += this.speed / 1.2;
                this.animate('se');
                console.log('downRight');

            } else if (this.keyBoard.keyState[2] && this.keyBoard.keyState[3]) {

                // downLeft
                this.position.y += this.speed / 1.2;
                this.position.x -= this.speed / 1.2;
                this.animate('sw');
                console.log('downLeft');

            } else if (this.keyBoard.keyState[3] && this.keyBoard.keyState[0]) {

                // upLeft
                this.position.y -= this.speed / 1.2;
                this.position.x -= this.speed / 1.2;
                this.animate('nw');
                console.log('upLeft');

            } else if (this.keyBoard.keyState[0]) {

                //up
                this.position.y -= this.speed;
                this.animate('n');
                console.log('up');

            } else if (this.keyBoard.keyState[1]) {

                //right
                this.position.x += this.speed;
                this.animate('e');
                console.log('right');

            } else if (this.keyBoard.keyState[2]) {

                //down
                this.position.y += this.speed;
                this.animate('s');
                console.log('down');

            } else if (this.keyBoard.keyState[3]) {

                //left
                this.position.x -= this.speed;
                this.animate('w');
                console.log('left');
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
            if (direction === 'ne') {
                this.minFrame = 16;
                this.maxFrame = 23;
            }
            if (direction === 'nw') {
                this.minFrame = 24;
                this.maxFrame = 31;
            }
            if (direction === 's') {
                this.minFrame = 32;
                this.maxFrame = 39;
            }
            if (direction === 'se') {
                this.minFrame = 40;
                this.maxFrame = 47;
            }
            if (direction === 'sw') {
                this.minFrame = 48;
                this.maxFrame = 55;
            }
            if (direction === 'w') {
                this.minFrame = 56;
                this.maxFrame = 63;
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