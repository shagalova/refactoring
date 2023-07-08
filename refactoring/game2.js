import {state, startBtn} from "./state.js";
import vars from "./gameVars.js";
import Background from "./bg.js";
import Foreground from "./fg.js";
import Bird from "./bird.js";
import Pipe from "./pipes.js";
import GetReadyMessage from "./getReadyMessage.js";
import GameOverMessage from "./gameOverMessage.js";
import Score from "./score.js";
import Medals from "./medals.js";


//select cvs

const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");

//load sprite image

const sprite = new Image();
sprite.src = "images/sprite.png";


//game elements
const bg = new Background(ctx, sprite);
const fg = new Foreground(ctx, sprite);
const bird = new Bird(ctx, sprite);
const pipes = new Pipe(ctx, sprite);
const getReadyMessage = new GetReadyMessage(ctx, sprite);
const gameOverMessage = new GameOverMessage(ctx, sprite);
const score = new Score(ctx);
const medals = new Medals(ctx, sprite);
const SWOOSHING = new Audio("./audio/swooshing.wav");
const FLAP = new Audio("./audio/flap.wav");


cvs.addEventListener("click", (evt) => {

      switch(state.current) {
          case state.getReady:
            state.current = state.game;
              SWOOSHING.play(); 
              break;
          case state.game:
              if(bird.coords.y - bird.radius <= 0) 
              return;
              bird.flap();
              FLAP.play();
              break;
          case state.over:
              let rect = cvs.getBoundingClientRect();
              let clickX = evt.clientX - rect.left;
              let clickY = evt.clientY - rect.top;
  
              //check if we click on the start button
              if(clickX >= startBtn.x && 
                 clickX <= startBtn.x + startBtn.w &&
                 clickY >= startBtn.y &&
                 clickY <= startBtn.y + startBtn.h) {
                  pipes.reset();
                  bird.speedReset();
                  score.reset();
                  state.current = state.getReady;
                 }           
              break;
      }
  })



function draw() {
    ctx.fillStyle = "#70c5ce";
    ctx.fillRect(0, 0, cvs.width, cvs.height);

    bg.draw();
    pipes.draw();
    fg.draw();
    bird.draw();
    getReadyMessage.draw();
    gameOverMessage.draw();
    score.draw();
    medals.draw(score);
   
}

//update
function update() {
   
    fg.update();
    bird.update(fg);
    pipes.update(bird, score);

}

//loop 
function loop() {
    update();
    draw();
    vars.frames++;

    requestAnimationFrame(loop);
}
loop()