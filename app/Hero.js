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

        this.currentFrame = 104;
        this.durationFrame = 7;

        this.minFrame = 104;
        this.maxFrame = 111;
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
                this.minFrame = 104;
                this.maxFrame = 111;
            }
            if (direction === 'n') {
                this.minFrame = 112;
                this.maxFrame = 119;
            }
            if (direction === 'ne') {
                this.minFrame = 120;
                this.maxFrame = 127;
            }
            if (direction === 'nw') {
                this.minFrame = 128;
                this.maxFrame = 135;
            }
            if (direction === 's') {
                this.minFrame = 136;
                this.maxFrame = 143;
            }
            if (direction === 'se') {
                this.minFrame = 144;
                this.maxFrame = 151;
            }
            if (direction === 'sw') {
                this.minFrame = 152;
                this.maxFrame = 159;
            }
            if (direction === 'w') {
                this.minFrame = 160;
                this.maxFrame = 167;
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