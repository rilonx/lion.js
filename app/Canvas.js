export default class Canvas {

    constructor(id, width, height){

        this.canvas = document.createElement('canvas');
        this.canvas.id = id;
        this.canvas.width = width;
        this.canvas.height = height;

        this.getCtx = function() {
            return this.canvas.getContext('2d');
        };

        this.add = function(parentId) {
            let parent = document.getElementById(parentId);
            parent.appendChild(this.canvas);
            return this;
        };

        return this;
    }
};