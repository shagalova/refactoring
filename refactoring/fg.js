import {cvs, ctx, state} from "./config.js";

export default class Foreground {
    constructor(sprite) {
        
        this.sprite = sprite
        this.ctx = ctx
        this.coords = {
            sX : 276,
            sY : 0,
            w : 224,
            h : 112,
            x : 0,
            y : cvs.height - 112
        }

        this.dx = 2
        
    }

    draw() {
        const { sX, sY, w, h, x, y } = this.coords;

        this.drawForegroundPart(sX, sY, w, h, x, y);
        this.drawForegroundPart(sX, sY, w, h, x + w, y);
        }

    drawForegroundPart(sX, sY, w, h, x, y) {
        this.ctx.drawImage(this.sprite, sX, sY, w, h, x, y, w, h);
        }

    update() {
       
        if(state.current == state.game) {
            this.coords.x = (this.coords.x - this.dx) % (this.coords.w/2);
        }
    }
}
