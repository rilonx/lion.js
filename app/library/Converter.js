export default class Converter {

    static i2xy(index, mapWidth){
        var x = index % mapWidth;
        var y = Math.floor(index/mapWidth);
        return [x,y];
    }

    static xy2i(x, y, mapWidth){
        return y * mapWidth + x;
    }

}