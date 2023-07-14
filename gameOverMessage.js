import {cvs, ctx, state} from "./config.js";

export default class GameOverMessage {
    constructor(sprite) {
        
        this.sprite = sprite
        this.cvs = cvs
        this.ctx = ctx
        this.coords = {
            sX : 175,
            sY : 228,
            w : 225,
            h : 202,
            x : this.cvs.width/2 - 225/2,
            y : 90,
        }              
    }

    draw() {
        const { sX, sY, w, h, x, y } = this.coords;
                
        if(state.current == state.over) {
        this.ctx.drawImage(this.sprite, sX, sY, w, h, x, y, w, h);
        }
    }

}