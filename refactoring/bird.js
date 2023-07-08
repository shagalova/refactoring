import vars from "./gameVars.js";
import {state} from "./state.js";
//import fg from "./fg.js";

export default class Bird {
    constructor(ctx, sprite) {
        this.ctx = ctx
        this.sprite = sprite

        this.animation = [
            {sX : 276, sY : 112},
            {sX : 276, sY : 139},
            {sX : 276, sY : 164},
            {sX : 276, sY : 139},
        ]

        this.coords = {
            x : 50,
            y : 150,
            w : 34,
            h : 26,
        }

        this.radius = 12
    
        this.frame = 0
    
        this.gravity = 0.14
        this.jump = 3.6
        this.speed = 0
        this.rotation = 0

        this.DIE = new Audio("./audio/die.wav")
    }


    
    draw() {
        let bird = this.animation[this.frame];
        const { x, y, w, h } = this.coords;
    
        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.rotate(this.rotation);
        this.ctx.drawImage(this.sprite, bird.sX, bird.sY, w, h, - w/2, - h/2, w, h);
    
        this.ctx.restore();
    }
    
    flap() {
        this.speed = -this.jump
    }
    
    update(fg) {

            //if the game state is get ready the bird must flap slowly
       
        this.period = state.current == state.getReady ? 10 : 5;
            //we increment the frame by 1 each period
        this.frame += vars.frames % this.period == 0 ? 1 : 0;
            //frames go from 0 to 4, then again to 0
        this.frame = this.frame % this.animation.length;
    
        if(state.current == state.getReady) {
            this.speed = 0;
            this.coords.y = 150; //reset position bird after game over
            this.rotation = 0 * vars.DEGREE;
        } else {
            this.speed += this.gravity;
            this.coords.y += this.speed;
    
            if(this.coords.y < 0 + this.coords.h/2) {
                this.coords.y = 0 + this.coords.h/2
            }
    
            if(this.coords.y + this.coords.h/2 >= this.ctx.canvas.height - fg.coords.h) {
                this.coords.y = this.ctx.canvas.height - fg.coords.h - this.coords.h/2;
                if(state.current == state.game) {
                    state.current = state.over;                    
                    this.DIE.play();
                }
            }
    
                //if the speed greater then jump means the bird is falling down
            if(this.speed >= this.jump) {
                this.rotation = 90 * vars.DEGREE;
                this.frame = 1;
            } else {
                this.rotation = -25 * vars.DEGREE;
            }
        }
    
    }
    
    speedReset() {
        this.speed = 0;
    }
    
}
