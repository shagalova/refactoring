import {state} from "./state.js";

export default class GetReadyMessage {
    constructor(ctx, sprite) {
        this.ctx = ctx
        this.sprite = sprite

        this.coords = {
            sX : 0,
            sY : 228,
            w : 173,
            h : 152,
            x : this.ctx.canvas.width/2 - 173/2,
            y : 80,
        }              
    }

    draw() {
        const { sX, sY, w, h, x, y } = this.coords;
        
        if(state.current == state.getReady) {
        this.ctx.drawImage(this.sprite, sX, sY, w, h, x, y, w, h);
        }
    }

}