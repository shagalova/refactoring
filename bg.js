import {cvs, ctx} from "./config.js"

export default class Background {
    constructor(sprite) {
        
        this.sprite = sprite

        this.cvs = cvs
        this.ctx = ctx

        this.coords = {
            sX : 0,
            sY : 0,
            w : 275,
            h : 226,
            x : 0,
            y : this.cvs.height - 226
        }
    }

    draw() {
        const { sX, sY, w, h, x, y } = this.coords;

        this.drawBackgroundPart(sX, sY, w, h, x, y);
        this.drawBackgroundPart(sX, sY, w, h, x + w, y);
        }

    drawBackgroundPart(sX, sY, w, h, x, y) {
        this.ctx.drawImage(this.sprite, sX, sY, w, h, x, y, w, h);
        }
}

