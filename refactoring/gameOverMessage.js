import {state} from "./state.js";

export default class GameOverMessage {
    constructor(ctx, sprite) {
        this.ctx = ctx
        this.sprite = sprite

        this.coords = {
            sX : 175,
            sY : 228,
            w : 225,
            h : 202,
            x : this.ctx.canvas.width/2 - 225/2,
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