export default class Background {
    constructor(ctx, sprite) {
        this.ctx = ctx;
        this.sprite = sprite;

        this.coords = {
            sX : 0,
            sY : 0,
            w : 275,
            h : 226,
            x : 0,
            y : this.ctx.canvas.height - 226
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

