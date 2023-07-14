import {cvs, ctx, state} from "./config.js";

export default class Score {
    constructor() {
        this.cvs = cvs
        this.ctx = ctx
        this.best = parseInt(localStorage.getItem("best")) || 0
        this.value = 0
    }
    
    draw () {
        this.ctx.fillStyle = "#fff";
        this.ctx.strokeStyle = "#7c761a";

        if(state.current == state.game) {
            this.ctx.lineWidth = 2;
            this.ctx.font = "35px Roboto"
            
            this.ctx.fillText(this.value, this.cvs.width/2, 50);
            this.ctx.strokeText(this.value, this.cvs.width/2, 50);

        } else if(state.current == state.over) {
            //score value
            this.ctx.font = "25px Roboto"
            this.ctx.fillText(this.value, 225, 186);
            this.ctx.strokeText(this.value, 225, 186);
            //best score
            this.ctx.fillText(this.best, 225, 228);
            this.ctx.strokeText(this.best, 225, 228);
            
        }
    }

    reset() {
        this.value = 0;
    }
}