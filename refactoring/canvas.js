
import {cvs, ctx} from "./config.js"
export default class Canvas {
    constructor() {
        
        this.width = cvs.width
        this.height = cvs.height

        this.ctx = ctx

    }

    draw() {

        this.ctx.fillStyle = "#70c5ce";
        this.ctx.fillRect(0, 0, this.width, this.height);
    return this; 

    }
       
}
    
