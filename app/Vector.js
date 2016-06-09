export default class Vector {

    constructor(ctx, x, y, vecX, vecY){

        this.x = x;
        this.y = y;
        this.vecX = vecX;
        this.vecY = vecY;

        this.draw = (width, color) => {

            ctx.width = width;
            ctx.strokeStyle = color;

            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + vecX, this.y + vecY);
            ctx.stroke();
        }
    }
}