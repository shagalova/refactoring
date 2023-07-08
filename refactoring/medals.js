import {state} from "./state.js";

export default class Medals {
    constructor(ctx, sprite) {
        this.ctx = ctx
        this.sprite = sprite

        
        this.coords = {
            gold : {
                sX : 312,
                sY : 159,
            },
            silver : {
                sX : 312,
                sY : 112,
            },
            bronze : {
                sX : 360,
                sY : 159,
            },
            steel : {
                sX : 360,
                sY : 112,
            },

            w : 44,
            h : 44,
            x : this.ctx.canvas.width/2 - 225/2 + 26, 
            y : 90 + 87,
            
        }
    }

    draw(score) {       
        if(state.current == state.over) {
            if((score.best - score.value) >= 3) {
                const {steel: {sX, sY}, w, h, x, y} = this.coords;
                this.ctx.drawImage(this.sprite, sX, sY, w, h, x, y, w, h);
            }
            if((score.best - score.value) == 2) {
                const {bronze: {sX, sY}, w, h, x, y} = this.coords;
                this.ctx.drawImage(this.sprite, sX, sY, w, h, x, y, w, h);
            }
            if((score.best - score.value) == 1) {
                const {silver: {sX, sY}, w, h, x, y} = this.coords;
                this.ctx.drawImage(this.sprite, sX, sY, w, h, x, y, w, h);
            }
            if((score.best - score.value) <= 0) {
                const {gold: {sX, sY}, w, h, x, y} = this.coords;
                this.ctx.drawImage(this.sprite, sX, sY, w, h, x, y, w, h);
            }
        }
    }
}