import {cvs, ctx, state} from "./config.js";
import vars from "./gameVars.js";
import {checkCollision} from "./otherFunc.js";

export default class Pipe {
    constructor(sprite) {
        
        this.sprite = sprite
        this.ctx = ctx
        this.cvs = cvs
        this.position = []

        this.top = {
            sX : 553,
            sY : 0
        }

        this.bottom = {
            sX : 502,
            sY : 0 
        }

        this.w = 53
        this.h = 400
        this.gap = 120
        this.maxYPos = -150
        this.dx = 2
        this.speedIdx = 1

        this.HIT = new Audio("./audio/hit.wav")
        this.SCORE_S = new Audio("./audio/point.wav")
    }

   draw() {
        for(let i = 0; i < this.position.length; i++) {
            let p = this.position[i];

            let topYPos = p.y;
            let bottomYPos = p.y + this.h + this.gap;

            //top pipe
            this.ctx.drawImage(this.sprite, this.top.sX, this.top.sY, this.w, this.h, p.x, topYPos, this.w, this.h);
            
            //bottom pipe
            this.ctx.drawImage(this.sprite, this.bottom.sX, this.bottom.sY, this.w, this.h, p.x, bottomYPos, this.w, this.h);
        }
    }

    update(bird, score) {

        if(state.current !== state.game) return;

        if(vars.frames % 100 == 0) {
            this.position.push({
                x : this.cvs.width, 
                y : this.maxYPos * ( Math.random() + 1)
            });
        }
        for(let i = 0; i < this.position.length; i++) {
            let p = this.position[i];

            //move pipes to the left
            p.x -= this.dx * this.speedIdx;

            //if pipes go beyond canvas we delete them from the array
            if(p.x + this.w <= 0) {
                this.position.shift();
                score.value += 1;
                this.SCORE_S.play();

                score.best = Math.max(score.value, score.best);
                localStorage.setItem("best", score.best);
            }

            // check collision
            if (checkCollision(this, bird)) {
                state.current = state.over;
                this.HIT.play();
            }
        }
    }

    reset() {
        this.position = [];
    }
}

