export default class Vector {

    constructor(ctx, x, y, vecX, vecY){
        this.x = x;
        this.y = y;
        this.vecX = vecX;
        this.vecY = vecY;

        this.draw = (width, color) => {
            ctx.beginPath();
            ctx.width = width;
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + vecX, this.y + vecY);
            ctx.strokeStyle = color;
            ctx.stroke();
        }
    }
}