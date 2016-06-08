export default class Canvas {

    constructor(id, width, height){

        this.canvas = document.createElement('canvas');
        this.canvas.id = id;
        this.canvas.width = width;
        this.canvas.height = height;

        this.getCtx = () => {
            return this.canvas.getContext('2d');
        };

        this.add = (parentId) => {
            let parent = document.getElementById(parentId);
            parent.appendChild(this.canvas);
        }
    }
};