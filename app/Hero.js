export default class Hero {

    constructor(hero, keyBoard) {

        this.name = hero.name;
        this.level = hero.level;
        this.life = hero.life;
        this.speed = hero.speed;
        this.dead = false;
        this.position = hero.position;
        this.keyBoard = keyBoard;
        this.currentFrame = 16;
    }

    update(){

        if (!this.dead) {
            if(this.keyBoard.keyState[3]){
                this.position.y += this.speed;
                this.currentFrame = 16;
            }
            if(this.keyBoard.keyState[2]){
                this.position.y -= this.speed;
                this.currentFrame = 10;
            }
            if(this.keyBoard.keyState[0]){
                this.position.x -= this.speed;
                this.currentFrame = 25;
            }
            if(this.keyBoard.keyState[1]){
                this.position.x += this.speed;
                this.currentFrame = 0;
            }
        }

    }


}